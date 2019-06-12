var mySwiper = new Swiper('.swiper-container', {
    autoplay: true,
    loop: true,
});


// <img src='./static/image/fire.png' class="circleMove"/>

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

$('.content li').on('animationend',function () {
    flag = true;
    location.href = $(this).find('a').attr('href');
})



