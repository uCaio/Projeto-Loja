const { Produto } = require('../config/db').models;

let carrinho = [];

const mostrarCarrinho = (req, res) => {
    try {
        res.render('shoppingCart', { carrinho, cliente: req.session.cliente, Produto });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao carregar o carrinho.");
    }
};

const adicionarAoCarrinho = async (req, res) => {
    try {
        const { produtoId } = req.params;

        const produto = await Produto.findByPk(produtoId);

        if (!produto) {
            return res.status(404).send("Produto não encontrado.");
        }

        const itemExistente = carrinho.find(item => item.id == produto.id);

        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            const imagemPrincipal = produto.imagens ? produto.imagens.split(',')[1] : "sem-imagem-disponivel.jpg";
            
            carrinho.push({
                id: produto.produtoID,
                nome: produto.nome,
                preco: produto.preco_pix,
                tamanho: produto.tamanhos,
                imagem: imagemPrincipal,
                pasta_imagem: produto.pasta_imagem,
                quantidade: 1
            });
        }

        res.redirect('/carrinho');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao adicionar item ao carrinho.");
    }
};

const atualizarQuantidade = (req, res) => {
    try {
        const { produtoId, novaQuantidade } = req.body;
        const item = carrinho.find(item => item.id == produtoId);

        if (!item) {
            return res.status(404).send("Item não encontrado no carrinho.");
        }

        item.quantidade = parseInt(novaQuantidade);
        if (item.quantidade <= 0) {
            carrinho = carrinho.filter(i => i.id != produtoId);
        }

        res.redirect('/carrinho');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao atualizar quantidade.");
    }
};

const removerItem = (req, res) => {
    try {
        const { produtoId } = req.params;
        carrinho = carrinho.filter(item => item.id != produtoId);
        res.redirect('/carrinho');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao remover item.");
    }
};

const limparCarrinho = (req, res) => {
    try {
        carrinho = [];
        res.redirect('/carrinho');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao limpar carrinho.");
    }
};

module.exports = {
    mostrarCarrinho,
    adicionarAoCarrinho,
    atualizarQuantidade,
    removerItem,
    limparCarrinho
};
