$(document).ready(function() {


// Add jQuery here



$('.nav_ad').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.ad').removeClass('hide');
  $('.item.ad').addClass('show');
});

$('.nav_plan').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.plan').removeClass('hide');
  $('.item.plan').addClass('show');
});

$('.nav_pipe').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.pipe').removeClass('hide');
  $('.item.pipe').addClass('show');
});

$('.nav_brick').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.brick').removeClass('hide');
  $('.item.brick').addClass('show');
});

$('.nav_window').click(function(event) {
  $('.item').removeClass('show');
  $('.item').addClass('hide');

  $('.item.window').removeClass('hide');
  $('.item.window').addClass('show');
});


$('.nav_all').click(function(event) {
  $('.item').removeClass('hide');
  $('.item').addClass('show');
});

$('.nav_thumbnail').click(function(event){
  $('.item').removeClass('full');
  $('.item').addClass('thumbnail');
  $('.item').removeClass('col1of4');


});

$('.nav_full').click(function(event){
  $('.item').removeClass('thumbnail');
  $('.item').addClass('full');
  $('.item').removeClass('col1of4');

});

$('.nav_default').click(function(event){
  $('.item').removeClass('thumbnail');
  $('.item').removeClass('full');
  $('.item').addClass('default');
});



});
