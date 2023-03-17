function getAllResourcesByTopic(topic_id, type) {
  console.log("getAllResourcesByTopic");
  return $.ajax({
    url: "/resources/getResourcesByTopic/" + topic_id + "/" + type,
  });
}

function getMyfavorites() {
  console.log("getMyfavorites");
  return $.ajax({
    url: "/resources/myfavorites",
  });
}

function getMyresources() {
  console.log("getMyresources");
  return $.ajax({
    url: "/resources/myresources",
  });
}

function goToResourceDetail(resourceid) {
  console.log("goToResourceDetail");
  return $.ajax({
    url: "/resources/allresources/" + resourceid,
  });
}

function rateResource(resourceid, value) {
  console.log("getMyresources");
  return $.ajax({
    url: `/resources/rateresource/${resourceid}/${value}`,
  });
}

function getComments(resourceid) {
  console.log("getComments");
  return $.ajax({
    url: `/resources/allcomments/${resourceid}`,
  });
}

function addComment(comment) {
  console.log("addComment");
  return $.ajax({
    method: "POST",
    url: "/resources/addcomment",
    data: comment,
  });
}

function likeResource(resourceid) {
  console.log("likeResource");
  return $.ajax({
    url: `/resources/likeresource/${resourceid}`,
  });
}

function createResource(data) {
  console.log("createResource");
  return $.ajax({
    method: "POST",
    url: `/resources/addresource`,
    data,
  });
}

function searchResource(data) {
  console.log("searchResource");
  return $.ajax({
    url: `/resources/search/${data}`
  });
}
