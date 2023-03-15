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

router.get('/myfavorites', (req, res) => {
  // const userId = req.session.userId;
  const userId = 2;
  resourceQueries.getMyfavorites(userId)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/myresources', (req, res) => {
  // const userId = req.session.userId;
  const userId = 2;
  resourceQueries.getMyresources(userId)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/allcomments/:resource_id', (req, res) => {
  resourceQueries.getComments(req.params.resource_id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/allcomments/:resource_id', (req, res) => {
  resourceQueries.getComments(req.params.resource_id)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/likeresource/:resource_id', (req, res) => {
  // const userId = req.session.userId;
  const userId = 2;
  resourceQueries.likeResource(req.params.resource_id, userId)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/rateresource/:resource_id/:rate', (req, res) => {
  // const userId = req.session.userId;
  const userId = 2;
  resourceQueries.rateResource(req.params.resource_id, req.params.rate, userId)
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
