$(function(){
    let tabs = $('.tab>li');
    tabs.on('click',function(){
        let index = $(this).index();
        tabs.removeClass('active').eq(index).addClass('active');
        $('.tabBox').css('display','none').eq(index).css('display','block');
    });
    tabs.eq(0).triggerHandler('click');

})