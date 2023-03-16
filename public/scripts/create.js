$("#new-resource-form").submit(function(event) {
  event.preventDefault();
  const urlencoded = $(this).serialize();

  createResource(urlencoded).then(
    () => {
      $(location).attr('href', `/myresources`);
    }
  );
});