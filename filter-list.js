$(document).ready(function() {
  $('#searchInput').on('input', function() {
    const searchText = $(this).val().toLowerCase().trim();
    $('.card').each(function() {
      const cardId = $(this).attr('id').toLowerCase();
      if (cardId.indexOf(searchText) === -1) {
        $(this).hide();
      } else {
        $(this).show();
        $(this).prependTo('#cardRow');
      }
    });
  });
});