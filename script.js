// $(".tg").click(function() {  
//   $(".tg-dropdown").slideToggle(200).addClass("visible"); 
// });

$(".tg").click(function() {
  $(this).toggleClass('active');
  $(".tg-dropdown").toggleClass("visible"); 
});


$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

// $("#contact").click(function(){

// });
