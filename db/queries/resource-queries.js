const db = require('../connection');

const getAllResources = () => {
  const queryString = `select * from resources order by id;`;
  return db.query(queryString,null,(res) => {
    return res.rows;
  }
  );
};

exports.getAllResources = getAllResources;

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
  const queryString = `select x.*, y.name from comments x join users y on x.user_id = y.id where x.resource_id = $1 order by x.id;`;
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

// const searchResources = (searchword) => {
//   const queryString = `select * from resources where title like $1;`;
//   const queryParam = ['%' + searchword + '%'];
//   return db.query(queryString,queryParam,(res) => {
//     return res.rows;
//   }
//   );
// };

// exports.searchResources = searchResources;

const getResourcesByTopic = (topic) => {
  let queryString = `select * from resources where topic_id = $1 `;
  const queryParam = [ topic.topic_id ];
  if (topic.userId) {
    queryParam.push(topic.userId);
    queryString += `AND user_id = ${topic.userId}`;
  }

  queryString += " order by id;";

  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.getResourcesByTopic = getResourcesByTopic;

const searchResources = (topicOrDescription, userId) => {
  const searchTerm = `%${topicOrDescription}%`;
  let queryString = `SELECT * FROM resources WHERE title LIKE $1 OR description LIKE $1`;
  const queryParams = [searchTerm];
  if (userId) {
    queryString += `And user_id = $2`;
    queryParams.push(userId);
  }
  return db.query(queryString, queryParams, (res) => {
    return res.rows;
  })
    .catch(err => console.log(err));
};

exports.searchResources = searchResources;


const getSingleResource = (resource_id) => {
  let queryString = `select x.*, (select cast(avg(rating) as decimal(38, 1)) from ratings where resource_id = $1) as rating, y.name as topic from resources x join topics y on x.topic_id = y.id where x.id = $1; `;
  const queryParam = [ resource_id ];

  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.getSingleResource = getSingleResource;

const updateResource = (resource) => {
  let queryString = `update resources set title=$1, topic_id=$2, img_url=$3, url=$4, description=$5 where id=$6 and user_id=$7 returning *;`;
  const queryParam = [ resource.title, resource.topic_id, resource.img_url, resource.url, resource.description, resource.resourceid, resource.user_id ];

  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.updateResource = updateResource;