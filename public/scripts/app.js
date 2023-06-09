$(() => {
  $("#p-username").text(decodeURI(document.cookie.split("; ").find((row) => row.startsWith("userName="))?.split("=")[1]));
}
);

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

$("#row5").on("click",".view",function() {
  console.log("resourceid:",$(this).attr("resourceid"));
  const resourceid = $(this).attr("resourceid");
  $(location).attr('href', `/resources/allresources/${resourceid}`);
});

$("#row6").on("click",".view",function() {
  console.log("resourceid:",$(this).attr("resourceid"));
  const resourceid = $(this).attr("resourceid");
  $(location).attr('href', `/resources/allresources/${resourceid}`);
});

$("#row5").on("click",".edit",function() {
  console.log("edit resourceid:",$(this).attr("resourceid"));
  const resourceid = $(this).attr("resourceid");
  $(location).attr('href', `/resources/editresource/${resourceid}`);
});

$("#form-search").submit(function(event) {
  event.preventDefault();
  const searchword = $(this).children("input").val();
  if (searchword.trim()) {
    searchResource(searchword).then(
      
      (resources) => {
        $(".container").empty();
        $("h1").text("Search Result");
        let $resElement = "";
        if (!resources.length) {
          $resElement += "<p>No result<p>";
        }
        $resElement += `<div class="row" id="row1">`;
        resources.forEach(resource => {
          $resElement += `
        <div class="col-md-4">
          <div class="card mb-4 shadow-sm">
          <svg class="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><image href=${resource.img_url} height="100%" width="100%" /></svg>
          <h5 class="text-center">${resource.title}</h5>   
          <div class="card-body">
              <p class="card-text">${resource.description}</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary view" resourceid=${resource.id}>View</button>
                </div>
                <small class="text-muted">9 mins</small>
              </div>
            </div>
          </div>
        </div>
      `;
        });
        $resElement += `</div>`;
        $(".container:first").html($resElement);

        $("#row1").on("click",".view",function() {
          const resourceid = $(this).attr("resourceid");
          $(location).attr('href', `/resources/allresources/${resourceid}`);
        });
      }
    );
  }
});


$("#form-signin").submit(function(event) {
  event.preventDefault();
  $("#err-message").remove();
  const urlencoded = $(this).serialize();
  loginByEmail(urlencoded)
    .then((res)=>{
      console.log(res);
      $(location).attr('href', `/`);
    })
    .catch((err)=>{
      console.log("err:",err.responseJSON.message);
      $("h1").after(`<p id="err-message" style="color:red">${err.responseJSON.message}</p>`);
    });
});

$("#form-register").submit(function(event) {
  event.preventDefault();
  $("#err-message").remove();
  const urlencoded = $(this).serialize();
  registerUser(urlencoded)
    .then((res)=>{
      console.log(res);
      $(location).attr('href', `/`);
    })
    .catch((err)=>{
      console.log("err:",err.responseJSON.message);
      $("h1").after(`<p id="err-message" style="color:red">${err.responseJSON.message}</p>`);
    });
});