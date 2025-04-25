const {Cliente} = require("../config/db").models

const editarCadastro = async (req, res) => {
    try {
        const {id} = req.params
        const { nome, telefone, email, senha } = req.body;
        
        const cliente = await Cliente.findByPk(id);
        if (!cliente) {
            return res.status(404).send('<h2>Cliente não encontrado.</h2>');
        }
        await Cliente.update(
            { nome, telefone, email, senha }, { where: { clienteID: id } }
        )
        return res.redirect("/home")
    } catch (error) {
        console.log(error)
        return res.status(500).send("Erro no servidor.")
    }
}

module.exports = {editarCadastro}