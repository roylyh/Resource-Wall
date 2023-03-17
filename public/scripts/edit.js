$("#edit-resource-form").submit(function(event) {
  event.preventDefault();
  const urlencoded = $(this).serialize();

  updateResource(urlencoded).then(
    () => {
      $(location).attr('href', `/myresources`);
    }
  );
});

$("#button-cancel").on("click",function() {
  $("input,textarea").val("");
  $("select").val("1");
});