/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/user-queries');
const bcrypt = require("bcryptjs");

router.get('/login/:id', (req, res) => {
  req.session.userId = req.params.id;
  res.redirect("/");
});

router.post('/login', (req, res) => {
  const {email, password} = req.body;
  if (!email || !password) {
    res.status(400).json({ message: 'Email and password are required'});
  } else {
    userQueries.getUserByEmail(email).then(
      (user) => {
        if (user) {
          if (bcrypt.compareSync(password, user.password)) {
            req.session.userID = user.id;
            console.log("login successfully");
            res.redirect("/homepage");
          } else {
            res.status(400).json({message: 'Password is wrong!'});
          }
        } else {
          res.status(400).json({message: 'no user found'});
        }
      }
    ).catch(
      (err) => {
        res.status(500).json({error: err.message});
      }
    );
  }
});

// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     res.status(400).json({ message: 'Email and password are required' });
//   } else {
//     try {
//       const user = await userQueries.getUserByEmail(email);
//       if (!user) {
//         res.status(400).json({ message: 'No user found' });
//       } else {
//         // manually compare passwords
//         const isMatch = password === user.password;
//         if (isMatch) {
//           req.session.userId = user.id;
//           console.log('Login successful');
//           res.redirect('/views/homepage.ejs');
//         } else {
//           res.status(400).json({ message: 'Password is wrong' });
//         }
//       }
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   }
// });


router.post('/logout', (req, res) => {
  res.clearCookie("session").clearCookie("session.sig").redirect("/users/login");
});

module.exports = router;
