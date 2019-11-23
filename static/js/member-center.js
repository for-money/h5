$(function(){
    var tabs = $('.tab>li');
    tabs.on('click',function(){
        var index = $(this).index();
        tabs.removeClass('active').eq(index).addClass('active');
        $('.tabBox').css('display','none').eq(index).css('display','block');
    });
    tabs.eq(0).triggerHandler('click');


    $('#mask .left').on('click', function () {
        $("#mask").hide();
    })

    $('#mask .right').on('click', function () {
        $("#mask").hide();
    })
})