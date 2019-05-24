const express = require('express');
const router = express.Router();
const githubRouter = require('./github');
const facebookRouter = require('./facebook');
const googleRouter = require('./google');
const linkedinRouter = require('./linkedin');

router.use('/github', githubRouter);
router.use('/facebook', facebookRouter);
router.use('/google', googleRouter);
router.use('/linkedin', linkedinRouter);

module.exports = router;