$(document).ready(function(){
	
   // Header
   $('#header').css('height', $(window).height());

   // Onde
   $('#onde').css('height', $(window).height() - 396);

   // Linha -> Check
   $('#linha-cont #linha-column .item.item-check small').click(function(){
      $(this).toggleClass('active');
   });

});

$(window).resize(function(){
   
   // Header
   $('#header').css('height', $(window).height());

   // Onde
   $('#onde').css('height', $(window).height() - 396);

});