// $(".tg").click(function() {
//   $(".tg-dropdown").slideToggle(200).addClass("visible");
// });

// TOGGLE MENU
$(".tg").click(function() {
  $(this).toggleClass('active');
  $(".tg-dropdown").toggleClass("visible");
});

$(document).ready(function(){
	$('#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});

$(".plus1").click(function() {
  $(this).toggleClass('active');
  $(".filter-mobile1").toggleClass("visible");
});

$(".plus2").click(function() {
  $(this).toggleClass('active');
  $(".filter-mobile2").toggleClass("visible");
});

$(".plus3").click(function() {
  $(this).toggleClass('active');
  $(".filter-mobile3").toggleClass("visible");
});

$(".see-more").click(function() {
  $(".project-box-2").removeClass('hidden');
  $(this).css({'display':'none'})
});

$(".see-more").hover(function() {
  $(this).addClass("pulsing")
});



// SMOOTH SCROLL
$("#contact-btn").click(function(){
	$('html,body').animate(
		{scrollTop: $("#contact").offset().top}, 'slow');
  return false;
});

$(".contact-btn").click(function(){
	$('html,body').animate(
		{scrollTop: $("#contact").offset().top}, 'slow');
  return false;
});

$(".project-btn").click(function(){
	$('html,body').animate(
		{scrollTop: $("#project").offset().top}, 'slow');
  return false;
});



// FIX BUG ON IOS 6
// var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true;
// if(iOS && $('.slideshow').css('min-height') == '100vh'){
//   $('.slideshow').css('min-height', '0');
// }

// window.addEventListener("orientationchange", function() {
//   if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
//     document.documentElement.innerHTML = document.documentElement.innerHTML;
//   }
// }, false);

// $('.tg').click(function(){
//     $('body').toggleClass('overflow-hidden');

// });

// $('.tg-dropdown ul li a').click(function(){
// 		$('body').removeClass("overflow-hidden");
// });



