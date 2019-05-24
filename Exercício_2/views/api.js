var express = require('express');
var router = express.Router();

let produtos = {
    items: []
}

router.post('/produtos', (req, res) => {

    /*JSON EXEMPLO:
    {
      "id":1, 
      "name":"Escova 1", 
      "description":"escova para cabelos"
    }
    
    {
      "id":2, 
      "name":"Escova 2", 
      "description":"escova para dentes"
    }
    */

    produtos.items.push(req.body);
    res.end('Inserção do item realizado com sucesso!');
});

router.put('/produtos/:id', (req, res) => {

    /*JSON EXEMPLO:
    {
      "id":1, 
      "name":"Escova 1", 
      "description":"update"
    }
    */
    // atualização do produto
    var update = false;
    for (var i = 0; i < produtos.items.length; i++) {
        if (produtos.items[i]) {
            if (produtos.items[i].id == req.params.id) {
                produtos.items[i] = req.body;
                res.end('O produto com identificador = '.concat(req.params.id.toString()).concat(' foi atualizado com sucesso!'));
                update = true;
                break;
            }
        }
    }

    if (update === false)
        res.end('O produto com identificador = '.concat(req.params.id.toString()).concat(' não encontrado!'));
});

router.delete('/produtos/:id', (req, res) => {

    var qtDel = 0;
    for (var i = 0; i < produtos.items.length; i++) {
        if (produtos.items[i]) {
            if (produtos.items[i].id == req.params.id) {
                produtos.items.splice(i, 1);
                i--;
                qtDel++;
            }
        }
    }

    if (qtDel == 0)
        res.end('O produto com identificador = '.concat(req.params.id.toString()).concat(' não encontrado!'));
    else if (qtDel == 1)
        res.end('O produto com identificador = '.concat(req.params.id.toString()).concat(' foi removido!'));
    else if (qtDel > 1) {
        res.end(qtDel.toString().concat(' produtos com identificadores = ').concat(req.params.id.toString()).concat(' foram removidos!'));
    }
});

router.get('/produtos/list', function (req, res, next) {

    /*Teste com a inserção de produtos*/
    produtos.items.push({
        'id': 1,
        'name': 'prato',
        'description': 'utensílo de cozinha'
    })
    //produtos.items.push({'id' : 2, 'name' : 'panela de pressão', 'description' : 'utensílo para cozinhar'})

    res.json(produtos);
});

module.exports = router;
