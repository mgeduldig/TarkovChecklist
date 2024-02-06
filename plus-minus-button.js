$(document).ready(function() {
    $('#checkbox1').change(function() {
      if (this.checked) {
        $(this).closest('.card').addClass('selected');
      } else {
        $(this).closest('.card').removeClass('selected');
      }
    });
  });