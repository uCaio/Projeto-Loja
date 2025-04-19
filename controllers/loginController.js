const {Cliente} = require("../config/db").models

const exibirLogin = (req,res)=>{
    res.render('formLogin')
}

const login = async (req, res) => {
    try {
        const { email, senha } = req.body;
        const clienteExistente = await Cliente.findOne({ where: { email } })
        if (!clienteExistente) {
            return res.send('Credenciais inválidas.')
        }
        if (clienteExistente.senha !== senha) {
            return res.send('Senha incorreta.');
        }
        req.session.clienteId = clienteExistente.clienteID;
        res.redirect('/home');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro no servidor.")
    }
}

module.exports = {exibirLogin, login}