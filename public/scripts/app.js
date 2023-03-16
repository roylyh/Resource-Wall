$("#row1").on("click",".view",function() {
  console.log("resourceid:",$(this).attr("resourceid"));
  const resourceid = $(this).attr("resourceid");
  $(location).attr('href', `/resources/allresources/${resourceid}`);
});

$("#row2").on("click",".view",function() {
  console.log("resourceid:",$(this).attr("resourceid"));
  const resourceid = $(this).attr("resourceid");
  $(location).attr('href', `/resources/allresources/${resourceid}`);
});

$("#row3").on("click",".view",function() {
  console.log("resourceid:",$(this).attr("resourceid"));
  const resourceid = $(this).attr("resourceid");
  $(location).attr('href', `/resources/allresources/${resourceid}`);
});

$("#row4").on("click",".view",function() {
  console.log("resourceid:",$(this).attr("resourceid"));
  const resourceid = $(this).attr("resourceid");
  $(location).attr('href', `/resources/allresources/${resourceid}`);
});

