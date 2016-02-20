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
var iOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true;
if(iOS && $('.slideshow').css('min-height') == '100vh'){
  $('.slideshow').css('min-height', '0');
}


