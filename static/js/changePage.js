$(function () {
    let tabs = $('.selectable-info');
    // let tabs = $('.selectable-info>.selectable-info-first>.dot');
    console.log(tabs, '/////tabs');
    tabs.on('click', function () {
        let index = $(this).index();
        console.log(index, '////index');
        tabs.removeClass('active').eq(index).addClass('active');
    });
    tabs.eq(1).triggerHandler('click');
})