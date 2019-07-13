var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,
    loop: true,
});



var mp3 = $("audio");
var that;
var flag = true;
$('.content li a').on('click',function(e) {
    e.preventDefault();
    if(!flag) return;
    flag = false;
    mp3[0].play();
    that = $(this);
    $(this).closest('li').addClass('swing').siblings().removeClass('swing')
})

var lis = $('.content li');
lis.on('animationend',function () {
    flag = true;
    lis.removeClass('swing');
    location.href = $(this).find('a').attr('href');
})



