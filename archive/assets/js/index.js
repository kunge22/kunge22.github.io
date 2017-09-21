$(document).ready(function() {


$('.titlea2z').click(function(event) {
  $('.containershowall').addClass('hide');
  $('.container').removeClass('hide');
  $('.header').removeClass('hide');
  $('.container').addClass('show');
  $('.header').addClass('show');
  $('.titlea2z').removeClass('transprentback')
  $('.titlethumbnail').addClass('transprentback')
});




$('.titlethumbnail').click(function(event) {
  $('.containershowall').removeClass('hide');
  $('.container').addClass('hide');
  $('.header').addClass('hide');
  $('.container').removeClass('show');
  $('.header').removeClass('show');
  $('.titlea2z').addClass('transprentback')
  $('.titlethumbnail').removeClass('transprentback')


});



});
