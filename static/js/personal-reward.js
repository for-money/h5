$(function () {
    let tabs = $('.tab>.card');
    tabs.on('click', function () {
        let index = $(this).index();
        tabs.removeClass('active').eq(index).addClass('active');
    });
    tabs.eq(5).triggerHandler('click');

})