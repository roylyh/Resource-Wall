const getAllResourcesByTopic = function(topic_id, type) {
  console.log("getAllResourcesByTopic");
  return $.ajax({
    url: "/resources/getResourcesByTopic/" + topic_id + "/" + type,
  });
};

const getMyfavorites = function() {
  console.log("getMyfavorites");
  return $.ajax({
    url: "/resources/myfavorites",
  });
};

const getMyresources = function() {
  console.log("getMyresources");
  return $.ajax({
    url: "/resources/myresources",
  });
};

const goToResourceDetail = function(resourceid) {
  console.log("goToResourceDetail");
  return $.ajax({
    url: "/resources/allresources/" + resourceid,
  });
};

const rateResource = function(resourceid, value) {
  console.log("getMyresources");
  return $.ajax({
    url: `/resources/rateresource/${resourceid}/${value}`,
  });
};

const getComments = function(resourceid) {
  console.log("getComments");
  return $.ajax({
    url: `/resources/allcomments/${resourceid}`,
  });
};

const addComment = function(data) {
  console.log("addComment");
  return $.ajax({
    method: "POST",
    url: "/resources/addcomment",
    data,
  });
};

const likeResource = function(resourceid) {
  console.log("likeResource");
  return $.ajax({
    url: `/resources/likeresource/${resourceid}`,
  });
};

const createResource = function(data) {
  console.log("createResource");
  return $.ajax({
    method: "POST",
    url: `/resources/addresource`,
    data,
  });
};

const searchResource = function(data) {
  console.log("searchResource");
  return $.ajax({
    url: `/resources/search/${data}`
  });
};

const updateResource = function(data) {
  console.log("updateResource");
  return $.ajax({
    method: "POST",
    url: `/resources/updateresource`,
    data,
  });
};

const loginByEmail = function(data) {
  console.log("loginByEmail");
  return $.ajax({
    method: "POST",
    url: `/users/login`,
    data,
  });
};