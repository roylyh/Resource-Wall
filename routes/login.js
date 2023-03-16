const express = require('express');
const router = express.Router();
const { getUserByEmail } = require('../db/queries/user-queries');

router.get('/', async(req, res) => {
  res.render("login");
});

router.post('/', (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;

  getUserByEmail(email)
    .then((user) => {
      console.log("checking user:", user);
      if (!user) {
        res.json({ error: 'Wrong user. Please try again!'});
        return
      }

      if ((password !== user.password)) {
        res.json({ error: 'Wrong user or password. Please try again!'});
        return;
      }
      console.log("in the then");
      res.json({
        response: true
      });

    }).catch(err => res.json({
      error: err
    }));
});

//logout
router.post('/logout', (req, res) => {
  // Clear session variable to indicate user is logged out
  req.session.user = null;

  // Redirect user to home page
  res.redirect('/');
});
module.exports = router;
