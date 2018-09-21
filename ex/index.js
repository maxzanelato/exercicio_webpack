const logger = require('./logger');
const duvida = require('./duvidaCruel');
logger.info("Usando o padrão CommonJS");

import { Pessoa } from './pessoa';

const pessoa = new Pessoa("Max");
logger.info(pessoa.toString()); 

const produto = {
    nome: 'Caneta BIC Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto };
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta BIG Azul';

console.log(produto, novoProduto);
