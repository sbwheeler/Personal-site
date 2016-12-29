$(document).ready(function() {
  $('#about, #resume, #contact, #projects').hide();
  $('#projects').show().addClass('current');

  $('#aboutlink').click(function() {
      $('.current').hide().removeClass('current');
      $('#about').show().addClass('current');
  });

  $('#projectslink').click(function() {
      $('.current').hide().removeClass('current');
      $('#projects').show().addClass('current');
  });

  $('#resumelink').click(function() {
      $('.current').hide().removeClass('current');
      $('#resume').show().addClass('current');
  });

  $('#contactlink').click(function() {
      $('.current').hide().removeClass('current');
      $('#contact').show().addClass('current');
  });
});
