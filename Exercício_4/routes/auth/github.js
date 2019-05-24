const express = require('express')
const router = express.Router()
const passsport = require('passport')

router.get('/', passsport.authenticate('github'));

router.get('/callback',
       passsport.authenticate('github',{failureRedirect: '/login'}),
       function(req, res) {
           res.redirect('/profile');
       }    
);

module.exports = router;