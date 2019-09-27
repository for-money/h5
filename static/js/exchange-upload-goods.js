$(function(){
    let tabs = $('.tab>li');
    tabs.on('click',function(){
        let index = $(this).index();
        tabs.removeClass('active').eq(index).addClass('active');
        $('.tabChange').css('display','none').eq(index).css('display','block');
    });
    tabs.eq(1).triggerHandler('click');


    let selectedColl = $('.exchange-goods>.exchange-goods-info');
    selectedColl.on('click',function(){
        let index = $(this).index();
        selectedColl.removeClass('active').eq(index).addClass('active');
    });
    selectedColl.eq(0).triggerHandler('click');

    let isSelected = $('.upload-goods-selected .upload-goods-thumb');
    $('.upload-goods-selected').on('click','.upload-goods-thumb',function(){
        let index = $(this).index();
        $('.upload-goods-selected .upload-goods-thumb').removeClass('active').eq(index).addClass('active');
    });


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20
    });
})