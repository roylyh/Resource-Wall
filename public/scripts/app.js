$("#row1").on("click",".view",function() {
  console.log("resourceid:",$(this).attr("resourceid"));
  goToResourceDetail($(this).attr("resourceid"));
});

const $star_rating = $('.star-rating .fa-star');
const $rating_value = $('input.rating-value');

$star_rating.on('click',function() {
  $rating_value.attr('value',$(this).attr('data-rating'));
  return SetRatingStar();
});

const SetRatingStar = function() {
  return $star_rating.each(function() {
    if (parseInt($rating_value.attr("value")) >= parseInt($(this).attr('data-rating'))) {
      return $(this).removeClass('fa-regular').addClass('fa-solid');
    } else {
      return $(this).removeClass('fa-solid').addClass('fa-regular');
    }
  });
};

$("button.rate").on("click", function() {
  rateResource($(this).attr('resourceid'),$rating_value.attr("value"));
});

$("#comment-form").submit(function(event) {
  event.preventDefault();
  const urlencoded = $(this).serialize();

  addComment(urlencoded).then(
    () => {
      $("#comment-textarea").val("");
      loadComments($(this).find("input").val());
    }
  );
});

$("button.like").on("click", function() {
  likeResource($(this).attr('resourceid'));
  $(this).addClass("checked");
});