const db = require('../connection');

const getUserByEmail = (email) => {
  const queryString = `select * from users where email = $1;`;
  const queryParam = [email];
  return db.query(queryString,queryParam,(res) => {
    return res.rows[0];
  }
  );
};

exports.getUserByEmail = getUserByEmail;

const getUserById = (userId) => {
  const queryString = `select * from users where id = $1;`;
  const queryParam = [userId];
  return db.query(queryString,queryParam,(res) => {
    return res.rows[0];
  }
  );
};

exports.getUserById = getUserById;

const addUser = (user) => {
  const queryString = `INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *;`;
  const queryParam = [user.name, user.email, user.password];
  return db.query(queryString,queryParam,(res) => {
    return res.rows;
  }
  );
};

exports.addUser = addUser;
