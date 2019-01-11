function AccidentUI(options){
    this.scope = options.scope;
    this.type = options.type;
    this.confirmBtn = options.confirmBtn;
    this.map = null;
    this.parts = null;
    this.infos = null;
    this.layerName = options.layer;
    this.layer = null;
    this.layerTitle = null;
    this.layerStatus = null;
    this.currentStatus =null;
    this.currentIndex = 0;
    this.count = 0;
    this.isAccident = false;
    this.accidentArr = ['루프 패널', '사이드실', '쿼터 패널'];
    this.noneAccidentArr = [
        {
            name: '범퍼',
            type: ''
        }
    ];
    this.state = [];

    this.init();
}

AccidentUI.prototype = {
    init: function(){
        this.setCache();
        this.setEvent();
    },

    reinit: function(){
        const context = this;

        this.map.empty();
        this.setCache();

        this.layerStatus.eq(0).removeClass('active');
        this.layerStatus.eq(1).removeClass('active');

        this.infos.each(function(a){
            context.currentIndex = a;
            context.setState();
            //context.setPart();
            context.setInfo();
        });

        this.setCount();
        this.setAccident();
        this.setEvent();
    },

    setCache: function(){
        var context = this;
        this.map = this.scope.find('.uiAccidentMap');
        this.infos = this.scope.find('.uiAccidentInfo');

        var leng = this.infos.length;

        this.infos.each(function(a){
            var self = $(this),
                name = self.find('.uiAccidentName').text(),
                items = self.find('.uiAccidentStatus').children(),
                partDOM = $('<a href="#" class="link_status uiAccidentPart ' + context.type + (a+1) + '"><span class="blind">' + name + '</span></a>');

            self.data('items', items);

            context.state[a] = {
                name: name,
                change: {
                    index: 0,
                    status: false
                },
                sheet: {
                    index: 1,
                    status: false
                }
            }

            partDOM.data('index', a);
            context.map.append(partDOM);
        });

        this.parts = this.map.find('.uiAccidentPart');
        this.layer = $(this.layerName);
        this.layerTitle = this.layer.find('.uiLayerTitle');
        this.layerStatus = this.layer.find('.uiLayerStatus ');
    },

    setEvent: function(){
        const context = this;

        this.parts.off('click').on('click', function(e){
            var self = $(this),
                index = self.data('index');

            context.openLayer(index);

            e.preventDefault();
        });

        this.scope.off('refresh').on('refresh', function(){
            context.reinit();
        });
    },

    setState: function(){
        const state = this.state[this.currentIndex];

        state.change.status = this.layerStatus.eq(state.change.index).hasClass('active');
        state.sheet.status = this.layerStatus.eq(state.sheet.index).hasClass('active');
    },

    setPart: function(){
        var state = this.state[this.currentIndex],
            part = this.parts.eq(this.currentIndex),
            iconClass = '',
            iconName = '',
            iconHtml = '';

        if(state.change.status || state.sheet.status){
            part.addClass('active');

            if(state.change.status){
                iconClass = 'status_change';
                iconName = '교환';
            }else if(state.sheet.status){
                iconClass = 'status_sheet';
                iconName = '판금';
            }

            iconHtml = '<span class="txt_status ' + iconClass + ' spr_purchase">' + iconName + '</span>';

            part.find('.txt_status').remove();
            part.append(iconHtml);
        }else{
            part.removeClass('active');
            part.find('.txt_status').remove();
        }
    },

    setCount: function(){
        if(this.type === 'pannel'){
            this.count = this.map.find('.status_change').length;
        }else{
            this.count = this.map.find('.txt_status').length;
        }
    },

    setAccident: function(){
        const check = this.map.find('.status_change');

        const arr = this.accidentArr;
        const leng = arr.length;

        let flag = false;

        check.each(function(){
            for(let i=0; i<leng; i++){
                const txt = $(this).prev().text();
                if(txt.indexOf(arr[i]) !== -1){
                    flag = true;
                    break;
                }
            }

            if(flag) return;
        });

        this.isAccident = flag;
    },

    setInfo: function(){
        var state = this.state[this.currentIndex],
            info = this.infos.eq(this.currentIndex),
            items = info.data('items'),
            change = items.eq(state.change.index),
            sheet = items.eq(state.sheet.index);

        this.setItems(state, change, sheet, 'list');
    },

    openLayer: function(index){
        var context = this,
            state = this.state[index],
            change = this.layerStatus.eq(state.change.index),
            sheet = this.layerStatus.eq(state.sheet.index);

        this.layerTitle.text(state.name);
        this.setItems(state, change, sheet, 'layer');
        this.currentIndex = index;

        this.layerStatus.on('click', function(e){
            var self = $(this);

            if(self.hasClass('active')){
                context.deactiveStatus(self);
                context.currentStatus = null;
            }else{
                if(context.currentStatus) context.deactiveStatus(context.currentStatus);
                context.activeStatus(self);
            }

            e.preventDefault();
        });

        this.layer.find('.uiLayerConfirm').on('click', function(e){
            context.setState();
            context.setPart();
            context.setInfo();
            context.setCount();
            context.setAccident();
            uiLayer.fnToogle(false);

            context.layerStatus.off('click');
            context.layer.find('.uiLayerCancel').off('click');
            $(this).off('click');

            e.preventDefault();
        });

        this.layer.find('.uiLayerCancel').on('click', function(e){
            context.layerStatus.off('click');
            context.layer.find('.uiLayerConfirm').off('click');
            $(this).off('click');

            e.preventDefault();
        });

        uiLayer.init({obj: this.layerName});
    },

    setItems: function(state, change, sheet, type){
        if(state.change.status){
            change.addClass('active');
            if(type === 'layer') this.currentStatus = change;
        }else{
            change.removeClass('active');
        }

        if(state.sheet.status){
            sheet.addClass('active');
            if(type === 'layer') this.currentStatus = sheet;
        }else{
            sheet.removeClass('active');
        }
    },

    activeStatus: function(item){
        item.addClass('active');
        this.currentStatus = item;
    },

    deactiveStatus: function(item){
        item.removeClass('active');
    }
};

module.exports = AccidentUI;