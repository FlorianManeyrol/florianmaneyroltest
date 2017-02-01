

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
  $(this).toggleClass("pulsing");
});

$(".scroll-arrow").hover(function() {
  $(this).toggleClass("pulsing");
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







