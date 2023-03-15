/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');

router.get('/allusers', (req, res) => {
  userQueries.getAllUsers()
  .then(response => {
    res.json(response);
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

// home page
router.get('/', async (req, res) => {
  try {
    const resources = await resourceQueries.getAllResources();
    res.render('../views/homepage', { resources });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// need to reorganize routing to create more readability after

// retrieve all resources
router.get('/resources', (req, res) => {
});

// create a new resource
router.post('/resources', (req, res) => {
});

// retrieve a specific resource by ID
router.get('/resources/:id', (req, res) => {
});

// update a specific resource by ID
router.put('/resources/:id', (req, res) => {
});

// delete a specific resource by ID
router.delete('/resources/:id', (req, res) => {
});

// retrieve all resources created by a specific user
router.get('/users/:id/resources', (req, res) => {
});

// retrieve all resources associated with a specific topic
router.get('/topics/:id/resources', (req, res) => {
});

// add a new comment to a resource
router.post('/resources/:id/comments', (req, res) => {
});

// update an existing comment in the database
router.put('/comments/:id', (req, res) => {
});

// delete a comment from the database
router.delete('/comments/:id', (req, res) => {
});

// add a new rating to a resource
router.post('/resources/:id/ratings', (req, res) => {
});

// update an existing rating in the database
router.put('/ratings/:id', (req, res) => {
});

// delete a rating from the database
router.delete('/ratings/:id', (req, res) => {
});

// add a like to a resource
router.post('/resources/:id/likes', (req, res) => {
});

// remove a like from a resource
router.delete('/likes/:id', (req, res) => {
});

module.exports = router;
