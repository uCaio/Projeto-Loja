const { Produto } = require('../config/db').models;
const {Estoque} = require('../config/db').models;

let carrinho = [];

const mostrarCarrinho = (req, res) => {
    try {
        res.render('shoppingCart', { carrinho, cliente: req.session.cliente, Produto, Estoque });
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao carregar o carrinho.");
    }
};

const adicionarAoCarrinho = async (req, res) => {
    try {
        const { produtoId } = req.params;
        const { tamanho } = req.body;

        const produto = await Produto.findByPk(produtoId);
        if (!produto) {
            return res.status(404).send("Produto não encontrado.");
        }

        const estoque = await Estoque.findByPk(produtoId);
        if (!estoque || estoque.quantidade <= 0) {
            return res.status(404).send("Produto fora de estoque.");
        }

        const imagemPrincipal = produto.imagens ? produto.imagens.split(',')[0] : "sem-imagem-disponivel.jpg";

        // Verifica se já existe no carrinho com mesmo ID e tamanho
        const itemExistente = carrinho.find(item => item.id == produto.id && item.tamanho === tamanho);

        if (itemExistente) {
            itemExistente.quantidade += 1;
        } else {
            carrinho.push({
                id: produto.produtoID,
                nome: produto.nome,
                preco: produto.preco_pix,
                tamanho: tamanho,
                pasta_imagem: produto.pasta_imagens,
                imagem: imagemPrincipal,
                quantidade: 1,
            });
        }
        
        res.redirect('/carrinho');
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao adicionar item ao carrinho.");
    }
};


const confirmarCompra = async (req, res) => {
    try {
        // Verifica se o carrinho está vazio
        if (carrinho.length === 0) {
            return res.status(400).send("O carrinho está vazio.");
        }

        // Verifica se há estoque suficiente para todos os itens
        for (let item of carrinho) {
            const estoque = await Estoque.findByPk(item.id);
            if (!estoque || estoque.quantidade < item.quantidade) {
                return res.status(400).send(`Estoque insuficiente para o produto: ${item.nome}`);
            }
        }

        // Desconta o estoque de todos os itens
        for (let item of carrinho) {
            const estoque = await Estoque.findByPk(item.id);
            estoque.quantidade -= item.quantidade;
            await estoque.save();

            // Aqui você pode salvar os detalhes da compra (opcional)
            // Ex: await Pedido.create({ clienteId: req.session.cliente.id, produtoId: item.id, quantidade: item.quantidade, ... })
        }

        // Limpa o carrinho
        carrinho = [];

        res.send("Compra finalizada com sucesso!");
    } catch (error) {
        console.log(error);
        return res.status(500).send("Erro ao confirmar compra.");
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
    limparCarrinho,
    confirmarCompra
};
