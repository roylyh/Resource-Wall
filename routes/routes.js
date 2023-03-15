/*
 * All routes for User Data are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /api/users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');
const getAllResources = require('../db/queries/resource-queries');

router.get('/', (req, res) => {
  userQueries.getUsers()
    .then(users => {
      res.json({ users });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

// Route to render the homepage
// const resourceQueries = require('../db/resource-queries');

// router.get('/', (req, res) => {
//   resourceQueries.getAllResources()
//     .then((resources) => {
//       res.render('homepage', { resources });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.render('homepage', { errorMessage: 'An error occurred while fetching resources' });
//     });
// });


module.exports = router;
