$(function(){
   var button = $('.button');
   var mask = $('.mask');
   var cancel = $('.cancel');
   var send = $('.submit');
   var textBtn = $('textarea');
   var isShow = true;
   button.on('click',function(){
       if(mask.hasClass('hidden')){
           mask.addClass('visible').removeClass('hidden');
       }
   });
   cancel.on('click',function(){
       mask.addClass('hidden').removeClass('visible');
   });
   send.on('click',function(){
       mask.addClass('hidden').removeClass('visible');
       var val = textBtn.val();

   })

});