$(function () {
    let tabs = $('.selectable-info');
    // let tabs = $('.selectable-info>.selectable-info-first>.dot');
    tabs.on('click', function () {
        let index = $(this).index();
        tabs.find('.dot').removeClass('active');
        $(this).find('.dot').addClass('active');
    });
    tabs.eq(1).triggerHandler('click');
})