$(function () {

    var sels = $(".sel");
    var count = 0;
    sels.on('click', function () {
        if(count >=3 ) return;
        var src = $(this).closest('.btn').prev().find('.card__side--back img').attr('src');
        console.log(src);
        count++
    })


    var rights = $("ul.select .right");
    rights.on('click', function () {
        $(this).closest('.list').siblings().removeClass('active');
        $(this).closest('.list').addClass('active');
        $('.imglist').show();
    })


    var l_one = $('.l-one');
    var close = $('#more .close');
    l_one.on('click', function () {
        $('#more').addClass('active');
    })

    close.on('click', function () {
        $('#more').removeClass('active');
    })
})