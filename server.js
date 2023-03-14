// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const { Pool } = require('pg');
const db = require('./db');
const bodyParser = require('body-parser');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('An error has occured connecting to the database', err.stack);
  } else {
    console.log('Connection to database successful', res.rows[0].now);
  }
});

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const userApiRoutes = require('./routes/routes');
const widgetApiRoutes = require('./routes/widgets-api');
const usersRoutes = require('./routes/users');
const bodyParser = require('body-parser');

// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/api/users', userApiRoutes);
app.use('/api/widgets', widgetApiRoutes);
app.use('/users', usersRoutes);
// Note: mount other resources here, using the same pattern above

// Home page
// Warning: avoid creating more routes in this file!
// Separate them into separate routes files (see above).

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


// Endpoint Functions

// Login
app.post('/login', async (req, res) => {
  const {user, password} = req.body;

  //to make sure user and password have a value
  if(!user || password) {
    return res.status(400).json({ message: 'Email and password are required'})
  }

  // check email and password are valid
  if (email !== 'testuser' || password !== 'password') {
    return res.status(401).json({ message: 'Invalid email or password'});
  }

  res.join({message: 'Login was successful'});
})
