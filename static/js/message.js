$(function(){
    var lis = $('.nav > li');
    var divs = $('#main > .content')
    lis.on('click',function(){
        var index = $(this).index();
        $(this).addClass('hot').siblings('li').removeClass('hot');
        divs.removeClass('active').eq(index).addClass('active')
    })

})