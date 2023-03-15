// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');

const bodyParser = require('body-parser');

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

app.use(cookieSession({
  name: 'session',
  keys: ['key1']
}));


// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const usersRoutes = require('./routes/users');
const resourcesRoutes = require('./routes/resources');
const loginRoutes = require('./routes/login')
// const logoutRoutes = require('./routes/logout')
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/users', usersRoutes);
app.use('/resources', resourcesRoutes);
app.use('/login', loginRoutes)
// app.use('/logout', logoutRoutes)
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
// app.post('/login', async(req, res) => {
//   const {user, password} = req.body;

//   //to make sure user and password have a value
//   if (!user || !password) {
//     return res.status(400).json({ message: 'Email and password are required'});
//   }

//   // check email and password are valid
//   // if (email !== 'testuser' || password !== 'password') {
//   //   return res.status(401).json({ message: 'Invalid email or password'});
//   // }

//   res.json({message: 'Login was successful'});
// });
