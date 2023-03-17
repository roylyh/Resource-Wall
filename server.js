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
const loginRoutes = require('./routes/login');
// const logoutRoutes = require('./routes/logout')
// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/users', usersRoutes);
app.use('/resources', resourcesRoutes);
app.use('/login', loginRoutes);
// app.use('/logout', logoutRoutes)
// Note: mount other resources here, using the same pattern above

app.get('/', (req, res) => {
  if (!req.session.userId) {
    return res.render("login");
  }
  return res.render('index');
});

app.get('/index', (req, res) => {
  if (!req.session.userId) {
    return res.render("login");
  }
  return res.render('index');
});

app.get('/myresources', (req, res) => {
  return res.render('myresources');
});

app.get('/createresource', (req, res) => {
  return res.render('submit-resource');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});


