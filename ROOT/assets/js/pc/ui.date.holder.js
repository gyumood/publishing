function DateHolderUI(options){
    this.scope = options.scope;
    this.holder = null;
    this.input = null;

    this.init();
};

DateHolderUI.prototype = {
    init: function(){
        this.setCache();
        this.setEvent();
    },

    setCache: function(){
        this.holder = this.scope.find('.uiDateHolder');
        this.input = this.scope.find('.uiDateInput');
    },

    setEvent: function(){
        var context = this;

        this.input.on('change', function(){
            var self = $(this),
                val = self.val();

            if(val === ''){
                context.holder.removeClass('hide');
            }else{
                context.holder.addClass('hide');
            }
        });
    }
};

module.exports = DateHolderUI;