const express = require("express")
const router = express.Router()
const homeController = require("../controllers/homeController")
const {Cliente} = require('../config/db').models

router.get('/home', async (req, res) => {
    try {
        let cliente = null;
        if (req.session.clienteId) {
            cliente = await Cliente.findByPk(req.session.clienteId);
        }
        res.render("home", { cliente });
    } catch (error) {
        console.log(error);
        res.status(500).send("Erro no servidor.");
    }
});
module.exports = router;