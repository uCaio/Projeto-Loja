const express = require("express");
const router = express.Router();
const myAccount = require("../controllers/myAccountController");
const { Cliente } = require("../config/db").models;


router.get("/minhaConta/:id", async (req, res) => {
    try {
        if (!req.session.clienteId) {
            return res.send("Você não está na sua conta ou não possui uma conta. Por favor entre ou crie uma conta.");
        } else {
            const id = req.session.clienteId;
            const cliente = await Cliente.findByPk(id);
            res.render("myAccount", { cliente });
        }
    } catch (error) {
        console.log(error);
    }
});

router.put("/minhaConta/:id", myAccount.editarCadastro)



module.exports = router;