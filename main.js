$( document ).ready(function() {
  $('.tab-panels .tabs li').on('click', function() {
    // Save the targeted panel id.
    var panelToShow = $(this).find('a').attr('href');

    // Move active class to clicked tab
    $('.tab-panels .tabs li.active').removeClass('active');
    $(this).addClass('active');
    
    // Hide the current panel
    $('.tab-panels .panel.active').removeClass('active');

    // Show the targeted panel
    $(panelToShow).addClass('active');
  })
});