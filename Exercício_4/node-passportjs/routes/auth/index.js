const express = require('express');
const router = express.Router();
const githubRouter = require('./github');
const facebookRouter = require('./facebook');

router.use('/github', githubRouter);
router.use('/facebook', facebookRouter);

module.exports = router;