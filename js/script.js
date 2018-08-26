$(document).ready(function() {
    // add any custom jquery script in here
    let popover = $('[data-toggle="popover"]').popover({
        placement: 'top',
        template: '<div class="popover" role="tooltip">'
                +   '<div class="arrow"></div>'
                +   '<h3 class="popover-header"></h3>'
                +   '<div class="popover-body"></div>'
                + '</div>',
        trigger  : 'hover focus'
    });
    $('ul.languages > li').focusout(popover.popover('hide'));
    $('ul.languages > li').mouseout(popover.popover('hide'));
    $('ul.languages > li').mouseleave(popover.popover('hide'));
});
