$(() => {
  const resourceid = $("button.rate").attr("resourceid");
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
    }
  );
};