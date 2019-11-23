$(function(){
    var tabs = $('.tab>li');
    tabs.on('click',function(){
        var index = $(this).index();
        tabs.removeClass('active').eq(index).addClass('active');
        $('.tabChange').css('display','none').eq(index).css('display','block');
    });
    tabs.eq(1).triggerHandler('click');


    var selectedColl = $('.exchange-goods>.exchange-goods-info');
    selectedColl.on('click',function(){
        var index = $(this).index();
        selectedColl.removeClass('active').eq(index).addClass('active');
    });
    selectedColl.eq(0).triggerHandler('click');

    var isSelected = $('.upload-goods-selected .upload-goods-thumb');
    $('.upload-goods-selected').on('click','.upload-goods-thumb',function(){
        var index = $(this).index();
        $('.upload-goods-selected .upload-goods-thumb').removeClass('active').eq(index).addClass('active');
    });


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 10
    });
})