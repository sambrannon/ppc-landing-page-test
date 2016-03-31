$(document).ready(function(){

  $('.input-group.date').datepicker({
    daysOfWeekDisabled: "0,6",
    autoclose: true,
    todayHighlight: true
  });

  $('.form-control').each(function(){
    var form = $(this);
    form.on('change', function(){
      if (form.val() != "") {
        form.addClass("changed");
      } else {
        form.removeClass("changed");
      }
    });
  });

  // Match up the service blocks
  $('.service').matchHeight({
    byRow: true,
    property: 'height',
    target: null,
    remove: false
  });

});
