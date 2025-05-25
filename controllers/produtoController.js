const { Produto, Cliente } = require('../config/db').models;

const exibirProduto = async (req, res) => {
    try {
        const id = req.params.id;

        // Cliente logado
        let cliente = null;
        if (req.session.clienteId) {
            cliente = await Cliente.findByPk(req.session.clienteId);
        }

        const produto = await Produto.findByPk(id);
        if (!produto) {
            return res.status(404).send("Produto não cadastrado");
        }

        res.render('productPage', { produto, cliente });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro no servidor.");
    }
};

module.exports = { exibirProduto };
