const {Cliente} = require("../config/db").models

const exibeFormCadastro = (req,res)=>{
    res.render("formRegister")
}

const cadastroCliente = async (req, res) => {
    try {
        const {nome, cpf, telefone, email, senha, data_nascimento} = req.body;
        const clienteExistente = await Cliente.findOne({ where: { cpf } })
        if (clienteExistente) {
            return res.render("Cliente já existe.")
        } else {
            await Cliente.create({ nome, cpf, telefone, email, senha, data_nascimento });
            res.redirect('/home');   
        }
    } catch (error) {
        console.log(error)
        return res.status(500).send("Erro no servidor.")
    }
}



module.exports = {exibeFormCadastro, cadastroCliente}