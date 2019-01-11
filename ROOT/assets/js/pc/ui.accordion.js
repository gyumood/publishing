function AccordionUI(param){
    this.scope = param.scope;
    this.menu = null;

    this.init();
}

AccordionUI.prototype = {
    init: function(){
        this.setCache();
        this.setEvent();
    },

    setCache: function(){
        const context = this;
        const contents = this.scope.find('.uiAccordionContent');

        this.menu = this.scope.find('.uiAccordionMenu');
        this.menu.each(function(a){
            const self = $(this);
            const content = contents.eq(a);

            self.data('content', content);
        });
    },

    setEvent: function(){
        const context = this;

        this.menu.on('click', function(e){
            const self = $(this);

            if(!self.hasClass('active')){
                context.active(self);
            }else{
                context.deactive(self);
            }

            e.preventDefault();
        });

        this.scope.find('.uiAccordionAll').on('click', function(e){
            context.menu.each(function(a){
                context.active($(this));
            });

            e.preventDefault();
        });
    },

    deactive: function(item){
        item.removeClass('active');
        item.data('content').removeClass('active');
    },

    active: function(item){
        item.addClass('active');
        item.data('content').addClass('active');
    }
};

module.exports = AccordionUI;