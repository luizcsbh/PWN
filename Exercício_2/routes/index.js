var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    /* res.render('index', {
         title: 'Aula de Nodes',
         FirstName: 'Luiz',
         LastName: 'Santos'
     });*/
    /*Passagem por parametro*/
    res.render('index', {
        FirstName: req.param('FirstName'),
        LastName: req.param('LastName')
    });
});

module.exports = router;
