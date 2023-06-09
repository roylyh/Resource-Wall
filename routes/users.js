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
            req.session.userId = user.id;
            res.cookie('userName', user.name);
            console.log("login successfully");
            res.json({message: 'Login successfully'});
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

router.post('/register', async(req, res) => {
  const userId = req.session.userId;
  console.log("userId:", userId);
  try {
    
    const user = {...req.body};
    const resUser2 = await userQueries.getUserByEmail(user.email);
    if (resUser2) {
      console.log("resUser exists ");
      return res.status(400).json({message: 'email exists!'});
    }

    const hashedPassword = bcrypt.hashSync(user.password, 10);
    user.password = hashedPassword;
    const resUser3 = await userQueries.addUser(user);
    req.session.userId = resUser3[0].id;
    res.json(resUser3);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
});

router.get('/logout', (req, res) => {
  console.log("logout");
  req.session = null;
  res.clearCookie("userName").redirect("/");
});

module.exports = router;
