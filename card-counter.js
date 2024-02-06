$(document).ready(function() {
    $('.plus').click(function() {
      const $counter = $(this).siblings('.count');
      const $max = $(this).siblings('.max');
      const $card = $(this).closest('.card');
      let count = parseInt($counter.text());
      const maxCount = parseInt($max.text());

      if (count < maxCount) {
        count++;
        $counter.text(count);

        if (count === maxCount) {
      		$card.addClass('selected');
      	}
      }
    });

    $('.minus').click(function() {
      const $counter = $(this).siblings('.count');
      const $max = $(this).siblings('.max');
      const $card = $(this).closest('.card');
      const maxCount = parseInt($max.text());
      let count = parseInt($counter.text());

      if (count > 0) {
        count--;
        $counter.text(count);

        if (count !== maxCount) {
        	$card.removeClass('selected');
        }
      }
    });
  });