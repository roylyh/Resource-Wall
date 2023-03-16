// Client facing scripts here
$(() => {

  for (let topic_id = 1; topic_id < 5; topic_id++) {
    getAllResourcesByTopic(topic_id, 0)
      .then((json) => {
        let $resItem = "";
        json.forEach(resource => {
          console.log(resource);
          $resItem += `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><image href=${resource.img_url} height="100%" width="100%" /></svg>
          <h5 class="text-center">${resource.title}</h5>   
          <div class="card-body">
              <p class="card-text">${resource.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary view" resourceid=${resource.id}>View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary edit" resourceid=${resource.id}>Edit</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      `;
        });
        $("#row" + topic_id).html($resItem);
      }
      );
  }

  $("#indexli").addclass("active");
}
);

