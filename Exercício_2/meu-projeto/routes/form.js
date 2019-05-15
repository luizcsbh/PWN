var express = require('express');
var route = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('form');
});

module.exports = router;
