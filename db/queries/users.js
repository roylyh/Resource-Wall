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

const getUser = (user) => {
  const queryString = `
    SELECT * FROM users
    WHERE user = $1;
    `;
  const queryParams = [user]

  return pool.query(queryString, queryParams)
    .then(res => {
      return res.rows[0]
    })
}

exports.getUser = getUser;
