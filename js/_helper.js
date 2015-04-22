var Helper = {

    loadSpinner: function loadSpinner(target) {
        var spinner = $(target).children('.js-loading');
        if (spinner.length === 0) {
            $(target).append('<div class="is-loading js-loading">'+
                                '<svg class="icon icon__spin">'+
                                    '<use xlink:href="#icon-spin">'+
                                '</svg>'+
                            '</div>');
        }
        spinner.fadeIn();
    },

    stopSpinner: function stopSpinner(target) {
        var spinner = $(target).children('.js-loading');
        if (spinner.length !== 0) {
            spinner.fadeOut('fast');
        }
    },

    insertSuccess: function insertSuccess(target, text) {
        target.append('<div class="success"><svg class="icon icon-ok"><use xlink:href="#icon-ok"></use></svg>'+text+'</div>');
        target.find('.success').velocity({opacity: [1,0]});
    }
};
