const { Produto, Cliente, Estoque} = require('../config/db').models;

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
        const estoque = await Estoque.findByPk(id);
        if (!estoque) {
            return res.status(404).send("Estoque não encontrado para o produto");
        }
        if (estoque.quantidade <= 0) {
            return res.status(404).send("Produto fora de estoque");
        }
        res.render('productPage', { produto, cliente, estoque });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro no servidor.");
    }
};
module.exports = { exibirProduto };
