var express = require('express');
var router = express.Router();

router.post('/', function (req, res) {
    /*renderizando a página*/
    res.render('process-form', {
        nome: req.body.nome,
        email: req.body.email,
        endereco: req.body.endereco
    });
});

module.exports = router;
