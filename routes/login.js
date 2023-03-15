const express = require('express')
const router = express.Router();
const { getUser } = require('../db/queries/users')

    router.get('/', async(req, res) => {
        res.render("login")
    })

    router.post('/', (req, res) => {
        console.log(req.body);
        const email = req.body.email
        const password = req.body.password

        getUsersFromEmail(email)
          .then((user) => {
            console.log("checking user:", user)
            if (!user) {
              res.json({ error: 'Wrong user or password. Please try again!'});
              return
            }

            if ((password !== user.password)) {
              res.json({ error: 'Wrong user or password. Please try again!'});
              return
            }
            console.log("in the then")
            res.json({
              response: true
            })

          }).catch(err => res.json({
            error: err
          }));
      })

      module.exports = router;
