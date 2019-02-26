const produto = {
    nome: 'Caneca Bic Preta',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto) {
    return { ...objeto }
}

const novoProduto = clone(produto);
novoProduto.nome = 'Caneta Bic Azul'

console.log(novoProduto);
console.log('===========');
console.log(produto);