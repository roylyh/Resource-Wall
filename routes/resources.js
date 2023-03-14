const express = require('express');
const router  = express.Router();
const resourceQueries = require('../db/queries/resource-queries');

router.get('/allresources', (req, res) => {
  resourceQueries.getAllResouces()
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;