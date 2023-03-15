const db = require('../connection');

const getAllResouces = () => {
  const queryString = `select * from resources;`;
  return db.query(queryString,null,(res) => {
    return res.rows;
  }
  ).catch((err) => {
    console.log(err.message);
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
  ).catch((err) => {
    console.log(err.message);
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
  ).catch((err) => {
    console.log(err.message);
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
  ).catch((err) => {
    console.log(err.message);
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
  ).catch((err) => {
    console.log(err.message);
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
  ).catch((err) => {
    console.log(err.message);
  }
  );
};

exports.rateResource = rateResource;
