const express = require('express');

const Lanches = require('../models/Lanches');
const router = express.Router();


router.get('/listar', (req, res) => {
    Lanches.findAll()
        .then((result) => {
            console.log(result);
            res.send(result);
        }).catch((error) => {
            console.log(error);
        });
})

router.post("/criar", (req, res) => {

    let objSalvar = req.body

    Lanches.create(objSalvar)
        .then((result) => {
            console.log(result);
            res.send('Novo Lanche!!');

        }).catch((error) => {
            console.log(error);
        });
})

router.put("/atualizar", (req, res) => {
    Lanches.update({ nome: 'Novo Lanche dos Ariosi' }, {
        where: req.body
    })
        .then((result) => {
            res.send('Atualizado com sucesso');
        })
        .catch((error) => {
            console.log(error);
        });
})


router.delete("/deletar", (req, res) => {
    Lanches.destroy({
        where: req.body
    })
        .then((response) => {
            res.send('Deletado com sucesso');
        })
        .catch((error) => {
            console.log(error);
        });
})


module.exports = router;