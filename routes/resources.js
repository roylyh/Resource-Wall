const express = require('express');
const router  = express.Router();
const resourceQueries = require('../db/queries/resource-queries');

router.get('/allresources', (req, res) => {
  resourceQueries.getAllResources()
    .then(resources => {
      res.render('allresources', { resources });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/myfavorites', (req, res) => {
  const userId = req.session.userId;
  // const userId = 2;
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
  const userId = req.session.userId;
  // const userId = 2;
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
  const userId = req.session.userId;
  // const userId = 2;
  resourceQueries.likeResource(req.params.resource_id, userId)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log(err.message);
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/rateresource/:resource_id/:rate', (req, res) => {
  const userId = req.session.userId;
  // const userId = 2;
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

router.post('/addresource', (req, res) => {
  const userId = req.session.userId;
  // const userId = 2;
  const resource = {...req.body};
  resourceQueries.addResource(resource, userId)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.post('/addcomment', (req, res) => {
  const userId = req.session.userId;
  // const userId = 2;
  const comment = {...req.body};
  resourceQueries.addComment(comment, userId)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log("err:", err);
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/searchresouces/:searchword', (req, res) => {
  resourceQueries.searchResources(req.params.searchword)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log("err:", err);
      res
        .status(500)
        .json({ error: err.message });
    });
});

router.get('/getResourcesByTopic/:topic_id/:type', (req, res) => {
  const topic = { topic_id: req.params.topic_id };
  const userId = req.session.userId;
  // const userId = 2;
  
  if (req.params.type === 1) {
    topic.userId = userId;
  }
  
  resourceQueries.getResourcesByTopic(topic)
    .then(response => {
      res.json(response);
    })
    .catch(err => {
      console.log("err:", err);
      res
        .status(500)
        .json({ error: err.message });
    });
});

module.exports = router;
