$(document).ready(function(){

  $('.input-group.date').datepicker({
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

});
