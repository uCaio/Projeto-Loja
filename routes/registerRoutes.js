const express = require("express")
const router = express.Router()
const registerController = require("../controllers/registerController")
// const { Cliente } = require("../config/db").models


router.get('/cadastro', registerController.exibeFormCadastro);
router.post('/cadastro', registerController.cadastroCliente);


module.exports = router;