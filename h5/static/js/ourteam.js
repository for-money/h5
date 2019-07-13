$(function(){
    var lis = $('.nav > li');
    var divs = $('main > div')
    lis.on('click',function(){
        var index = $(this).index();
        $(this).addClass('hot').siblings('li').removeClass('hot');
        divs.css({'display':'none'}).eq(index).css({display:"block"})
    })

})