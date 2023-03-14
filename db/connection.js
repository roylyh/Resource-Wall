const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: 5432
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('An error has occured connecting to the database', err.stack);
  } else {
    console.log('Connection to database successful', res.rows[0].now);
  }
});

module.exports = {
  query: (text, params, callback) => {
    const start = Date.now();
    return pool.query(text, params)
      .then((res) => {
        const duration = Date.now() - start;
        console.log("executed query", {text, params, duration, rows:res.rows});
        return callback(res);
      }
      );
  },
};