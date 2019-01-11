function TabUI(param){
    this.scope = param.scope;
    this.menu = null;
    this.container = null;
    this.current = null;

    this.init();
}

TabUI.prototype = {
    init: function(){
        this.setCache();
        this.setEvent();
    },

    setCache: function(){
        const context = this;

        this.menu = this.scope.find('.uiTabMenu');
        this.container = this.scope.find('.uiTabContainer');
        this.contents = this.container.find('.uiTabContent');

        this.menu.each(function(a){
            const self = $(this);
            const content = context.contents.eq(a);

            self.data('content', content);

            if(a === 0) context.active(self);
        });
    },

    setEvent: function(){
        const context = this;

        this.menu.on('click', function(e){
            if(context.current) context.deactive(context.current);
            context.active($(this));

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
        this.current = item;
    }
};

module.exports = TabUI;