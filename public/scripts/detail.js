$(() => {
  const resourceid = $("h1").attr("resourceid");
  loadComments(resourceid);
}
);

const loadComments = function(resourceid) {
  $('.comment').remove();
  getComments(resourceid).then(
    (res) => {
      console.log("getComents Json:", res);
      res.forEach(comment => {
        const $commentItem =
        `<div class = "comment">
        <p>${comment.comment}</p>
        <p style = "text-align: right">writen by ${comment.name}</p>
      </div>`;
        $('#comment-title').after($commentItem);
      });
      $("#review-no").text(res.length);
    }
  );
};

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
  window.location.reload();
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
  window.location.reload();
});