const express = require('express');
const passport = require('passport');
const router = express.Router();
const Ticket = require('../models/Ticket');
const Comment = require('../models/Comment');
const {
  ensureLoggedIn,
  ensureLoggedOut
} = require('connect-ensure-login');

// Passport Routes Configuration
router.get('/login', ensureLoggedOut(), passport.authenticate('slack'));

// OAuth callback url
router.get('/slack/callback', ensureLoggedOut(),
  passport.authenticate('slack', {
    successRedirect: '/auth/profile',
    failureRedirect: '/auth/error-login'
  }));

router.get('/error-login', (req, res) => {
  res.render('auth/error-login', {
    user: 'User no authorized.',
  });
});

router.get('/profile', ensureLoggedIn('/auth/login'), (req, res) => {
  let user;
  if (req.user) user = req.user;
  res.render('auth/profile', {
    user: user,
  });
});

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});


module.exports = router;
