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