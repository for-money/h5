$(function(){
   let button = $('.button');
   let mask = $('.mask');
   let cancel = $('.cancel');
   let send = $('.submit');
   let textBtn =- $('textarera');
   let isShow = true;
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
       let val = textBtn.val();

   })

});