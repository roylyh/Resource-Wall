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
  location.reload();
});

$(() => {
  $("#p-username").text(decodeURI(document.cookie.split("; ").find((row) => row.startsWith("userName="))?.split("=")[1]));
}
);