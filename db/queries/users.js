const db = require('../connection');

const getAllUsers = () => {
  const queryString = `select * from users;`;
  return db.query(queryString,null,(res) => {
    return res.rows;
  }
  ).catch((err) => {
    console.log(err.message);
  }
  );
};

exports.getAllUsers = getAllUsers;
