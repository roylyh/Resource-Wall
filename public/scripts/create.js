$("#new-resource-form").submit(function(event) {
  event.preventDefault();
  const urlencoded = $(this).serialize();

  createResource(urlencoded).then(
    () => {
      $(location).attr('href', `/myresources`);
    }
  );
});

$("#button-cancel").on("click",function() {
  $("input,textarea").val("");
  $("select").val("1");
});

$(()=>{
  $("#mycreateli").addClass("active");
});