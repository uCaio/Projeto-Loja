const express = require("express")
const router = express.Router()
const { Cliente } = require('../config/db').models
const {Produto} = require('../config/db').models

router.get('/home', async (req, res) => {
    try {
        let cliente = null;
        if (req.session.clienteId) {
            cliente = await Cliente.findByPk(req.session.clienteId);
        }

        const produto = await Produto.findAll();
        res.render("home", { cliente, produto });
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro no servidor.");
    }
});
module.exports = router;