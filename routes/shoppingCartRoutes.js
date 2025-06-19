const express = require('express');
const router = express.Router();
const carrinhoController = require('../controllers/shoppingCartController');

router.get('/carrinho', carrinhoController.mostrarCarrinho);
router.post('/carrinho/adicionar/:produtoId', carrinhoController.adicionarAoCarrinho);
router.post('/carrinho/atualizar', carrinhoController.atualizarQuantidade);
router.post('/carrinho/finalizar', carrinhoController.confirmarCompra);
router.post('/carrinho/remover/:produtoId', carrinhoController.removerItem);
router.post('/carrinho/limpar', carrinhoController.limparCarrinho);

module.exports = router;
