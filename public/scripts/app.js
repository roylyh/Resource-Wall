// Client facing scripts here
$(() => {
  $('#search').on('submit', (event) => {
    event.preventDefault()
    const searchTerm = $('#query').val()
    console.log('search term', searchTerm)

    $.ajax(
      `/resources/search/${searchTerm}`
    )
    .then((results) => {
      console.log('back from server', results);

      // Remove any existing search results
      $('#search-results').empty();
      $('.resource').empty();

      // Loop through each search result and create a new HTML element to display it
      for (const result of results) {
        const $resultElem = $('<div>').addClass('search-result');
        const $titleElem = $('<h2>').text(result.title);
        const $descriptionElem = $('<p>').text(result.description);

        $resultElem.append($titleElem, $descriptionElem);
        $('#search-results').append($resultElem);
      }
    })
    .catch((error) => {
      console.error(error);
    })
  })
});
