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

$(() => {
  $('#search').on('submit', (event) => {
    event.preventDefault();
    const searchTerm = $('#query').val();
    console.log('search term', searchTerm);

    $.ajax(`/resources/search/${searchTerm}`)
    .then((results) => {
      console.log('back from server', results)
      const $resourcesList = $('#resources');
      $resourcesList.empty();

      for(const resource of results) {
        const $resourceDiv = $('<div class="resource">');
        const $title = $('<h2>').text(resource.title);
        const $description = $('<p>').text(resource.description);
        const $url = $('<p>').append($('<a>').attr('href', resource.url).text(resource.url));
        const $ratings = $('<p>').text(`Ratings: ${resource.ratings}`);
        const $likes = $('<p>').text(`Likes: ${resource.likes}`);
        const $comments = $('<p>').text(`Comments: ${resource.comments}`);

        $resourceDiv.append($title, $description, $url, $ratings, $likes, $comments);
        $resourcesList.append($resourceDiv);
      }
    });
  });
});
