require('scss/pc.scss');

require('js/component/ui.layer');
require('js/component/ui.page');

const AccidentUI = require('js/pc/ui.accident');
const TabUI = require('js/pc/ui.tab');
const AccordionUI = require('js/pc/ui.accordion');
const DateHolderUI = require('js/pc/ui.date.holder');

function init(){
    setOverrideModule();
    setTab();
    setAccident();
    setScroll();
    setDateHolder();
    setAccordion();
    setInputCarNum();
    setMix();
    exportFunc();
}

function setOverrideModule(){
    uiLayer.fnDimmed = function(type){
        (type) ? this.objDimmed.insertAfter(this.obj).addClass('on') : this.objDimmed.removeClass('on');
    };

    uiLayer.rtBtnActionElement = function(value){
        return this.obj.find('a[ui-btn-action='+value+']').add(this.obj.find('input[ui-btn-action='+value+']')).add(this.obj.find('button[ui-btn-action='+value+']'));

    };
}

function setTab(){
    const scope = $('.uiTab');
    const queryArr = window.location.search.replace('?','').split('&');
    const leng = queryArr.length;
    const query = {};

    for(let i=0; i<leng; i++){
        const item = queryArr[i];
        const itemArr = item.split('=');
        query[itemArr[0]] = itemArr[1];
    }

    if(scope.length){
        scope.each(function(){
            const self = $(this);
            const instance = new TabUI({scope: self});
            self.data('instance', instance);

            if(query.type && query.type !== 'same'){
                instance.deactive(instance.current);
                instance.active(instance.menu.eq(1));
            }
        });
    }
}

function setAccident(){
    const scope = $('.uiAccident');
    const confirmBtn = $('.uiAccidentConfirm');
    const accidentState = $('.uiMix');

    if(scope.length){
        scope.each(function(a){
            var self = $(this),
                type = self.data('type');

            self.data('instance', new AccidentUI({scope: self, type: type, layer: '.uilayer_accident', confirmBtn: confirmBtn}));
        });

        // confirmBtn.on('set', function(e, data){
        //     const self = $(this);
        //
        //     let count = 0;
        //
        //     scope.each(function(a){
        //         count += $(this).data('instance').count;
        //     });
        //
        //     if(count === 0){
        //         self.removeClass('active');
        //     }else{
        //         self.addClass('active');
        //     }
        // });

        confirmBtn.on('click', function(e){
            const self = $(this);

            if(!self.hasClass('active')) return;

            let isAccident = false;
            let count = 0;

            scope.each(function(a){
                const self = $(this),
                      instance = self.data('instance');

                if(instance.isAccident){
                    isAccident = true;
                    return;
                }

                if(instance.type === 'frame' && instance.count !== 0){
                    isAccident = true;
                    return;
                }

                count += instance.count;
            });

            //if(count > 4) isAccident = true;

            if(isAccident){
                accidentState.trigger('set', {type: 'accident'});
            }else{
                if(count === 0){
                    accidentState.trigger('set', {type: 'none'});
                }else{
                    accidentState.trigger('set', {type: 'exterior', count: count});
                }
            }

            uiPage.fnToogle();
            e.preventDefault();
        });
    }
}

function setScroll(){
    if($('.uiScrollFilter').length){
        const iscroll = new iScroll('scroll_filter', {hScrollbar: false, vScrollbar: false, vScroll:false, hScroll: true, bounce:true,
            onBeforeScrollStart: function (e) {
                setTimeout(function(){
                    this.refresh();
                }, 0);
                e.preventDefault();
            }
        });
    }
}

function setDateHolder(){
    const scope = $('.uiDate');

    if(scope.length){
        scope.each(function(a){
            new DateHolderUI({scope:$(this)});
        });
    }
}

function setAccordion(){
    const scope = $('.uiAccordion');

    if(scope.length){
        new AccordionUI({scope: scope});
    }
}

function setInputCarNum(){
    const input = $('.uiInputCarNum');
    const btn = $('.uiInputCarDelete');

    input.on('keyup', function(){
        const val = input.val();

        if(val !== ''){
            btn.addClass('show');
        }else{
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e){
        input.val('').focus();
        input.trigger('keyup');
        e.preventDefault();
    });
}

function setMix(){
    const scope = $('.uiMix');

    if(!scope.length) return;

    let uiAccident = null;
    let inputLabel = null;
    let selectLabel = null;
    let current = null;
    let currentType = '';

    function init(){
        setCache();
        setEvent();
    }

    function setCache(){
        inputLabel = scope.find('.uiMixInput label');
        inputLabel.each(function(a){
            const self = $(this),
                input = self.parent().find('input');

            self.data('input', input);
        });

        selectLabel = scope.find('.uiMixSelect label');
        selectLabel.data('select', selectLabel.parent().find('select'));

        uiAccident = $('.uiAccident')
    }

    function setEvent(){
        inputLabel.on('click', function(e, data){
            const self = $(this);

            // if(self.data('input').prop('checked')){
            //     current = null;
            //     currentType = '';
            // }else{
            // }
            if(current){
                if(currentType === 'input') current.trigger('reactive');
                if(currentType === 'select') current.trigger('change', {val: '외부패널교환'});
            }
            current = $(this);
            currentType = 'input';

            if(typeof data === 'undefined'){
                uiAccident.each(function(){
                    $(this).trigger('refresh');
                });
            }
        });

        inputLabel.on('reactive', function(e){
            $(this).data('input').prop('checked', false);
        });

        selectLabel.data('select').on('change', function(e, data){
            const self = $(this),
                val = self.val();

            if(val !== '외부패널교환') {
                if(currentType === 'input') current.trigger('reactive');
                current = selectLabel;
                currentType = 'select';
            }

            selectLabel.trigger('change', {val: val});

            if(typeof data === 'undefined'){
                uiAccident.each(function(){
                    $(this).trigger('refresh');
                });
            }
        });

        selectLabel.on('change', function(e, data){
            const self = $(this);

            let txt = data.val;

            if(txt === '외부패널교환'){
                self.removeClass('active');
            }else{
                self.addClass('active');
                txt = Number(txt) >= 4 ? txt + '판 이상' : txt + '판';
            }

            self.data('select').val(data.val >= 4 ? 4 : data.val);

            if(txt !== '외부패널교환') txt = '외판 ' + txt;
            self.find('.td').text(txt);
        });

        scope.on('set', function(e, data){
            switch(data.type.toUpperCase()){
                case 'NONE':
                    if(!inputLabel.eq(0).data('input').prop('checked')) inputLabel.eq(0).trigger('click', {type: 'trigger'});
                    break;

                case 'EXTERIOR':
                    selectLabel.trigger('change', {val: data.count});
                    selectLabel.data('select').trigger('change', {type: 'trigger'});
                    break;

                case 'ACCIDENT':
                    if(!inputLabel.eq(1).data('input').prop('checked')) inputLabel.eq(1).trigger('click', {type: 'trigger'});
                    break;
            }
        });
    }

    init();
}

function exportFunc(){
    // window.uiSlideStats = false;
    // window.uiPageScrollTop;
    // window.uiPageList=[];
    //
    // window.uiLayer = uiLayer;
    // window.uiPage = uiPage;
    window.setAccordion = setAccordion;
}

init();








