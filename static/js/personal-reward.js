$(function () {
    let tabs = $('.tab>.card');
    tabs.on('click', function () {
        let index = $(this).index();
        tabs.removeClass('active').eq(index).addClass('active');
        if(index < 5){
            $('.tab-list-beforeFive').css('display','block');
            $('.tab-list').css('display','none');
            $('.reward-goods').css('display','none');
            $('.reward-order').css('display','none')
        }
        if(index === 5){
            $('.tab-list-beforeFive').css('display','none');
            $('.tab-list').css('display','block');
            $('.reward-goods').css('display','none');
            $('.reward-order').css('display','none')
        }
        if(index === 6){
            $('.tab-list-beforeFive').css('display','none');
            $('.tab-list').css('display','none');
            $('.reward-order').css('display','none');
            $('.reward-goods').css('display','block')
        }
        if(index === 7){
            $('.tab-list-beforeFive').css('display','none');
            $('.tab-list').css('display','none');
            $('.reward-goods').css('display','none');
            $('.reward-order').css('display','block')
        }

    });
    tabs.eq(0).triggerHandler('click');

})