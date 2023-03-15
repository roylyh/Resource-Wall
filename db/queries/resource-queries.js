const db = require('../connection');

const getAllResouces = () => {
  const queryString = `select * from resources;`;
  return db.query(queryString,null,(res) => {
    return res.rows;
  }
  );
};

exports.getAllResouces = getAllResouces;

const getMyfavorites = (userId) => {
  const queryString = `select x.* from resources x join likes y on x.id = y.resource_id where y.user_id = $1;`;
  const queryParam = [userId];
  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.getMyfavorites = getMyfavorites;

const getMyresources = (userId) => {
  const queryString = `select * from resources where user_id = $1;`;
  const queryParam = [userId];
  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.getMyresources = getMyresources;

const getComments = (resourceId) => {
  const queryString = `select * from comments where resource_id = $1;`;
  const queryParam = [resourceId];
  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.getComments = getComments;

const likeResource = (resourceId, userId) => {
  const queryString = `INSERT INTO likes (user_id, resource_id, liked) VALUES ($1, $2, TRUE) RETURNING *;`;
  const queryParam = [userId, resourceId];
  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.likeResource = likeResource;

const rateResource = (resourceId, rate, userId) => {
  const queryString = `INSERT INTO ratings (user_id, resource_id, rating) VALUES ($1, $2, $3) RETURNING *;`;
  const queryParam = [userId, resourceId, rate];
  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.rateResource = rateResource;

const addResource = (resource, userId) => {
  const queryString = `INSERT INTO resources (user_id, topic_id, img_url, url, title, description) 
  VALUES ( $1, $2, $3, $4, $5, $6) RETURNING *;`;
  const queryParam = [userId, resource.topic_id, resource.img_url, resource.url, resource.title, resource.description];
  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.addResource = addResource;

const addComment = (comment, userId) => {
  const queryString = `INSERT INTO comments (user_id, resource_id, comment) 
  VALUES ( $1, $2, $3) RETURNING *;`;
  const queryParam = [userId, comment.resource_id, comment.comment];
  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.addComment = addComment;

const searchResources = (searchword) => {
  const queryString = `select * from resources where title like $1;`;
  const queryParam = ['%' + searchword + '%'];
  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.searchResources = searchResources;

const getResourcesByTopic = (topic) => {
  let queryString = `select * from resources where topic_id = $1`;
  const queryParam = [ topic.topic_id ];
  if (topic.userId) {
    queryParam.push(topic.userId);
    queryString += `AND user_id = ${topic.userId}`;
  }

  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.getResourcesByTopic = getResourcesByTopic;
