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

    let isSelected = $('.upload-goods-selected>.upload-goods-thumb');
    isSelected.on('click',function(){
        let index = $(this).index();
        isSelected.removeClass('active').eq(index).addClass('active');
    });
    isSelected.eq(0).triggerHandler('click');


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 20
    });
})