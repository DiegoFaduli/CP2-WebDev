const produto1Qtd = document.getElementById('produto1Qtd');
const produto2Qtd = document.getElementById('produto2Qtd');
const produto3Qtd = document.getElementById('produto3Qtd');

produto1Qtd.addEventListener('input', updateTotal);
produto2Qtd.addEventListener('input', updateTotal);
produto3Qtd.addEventListener('input', updateTotal);

function updateTotal() {
    const precoProduto1 = 10;
    const precoProduto2 = 20;
    const precoProduto3 = 30;

    const qtdProduto1 = parseInt(produto1Qtd.value);
    const qtdProduto2 = parseInt(produto2Qtd.value);
    const qtdProduto3 = parseInt(produto3Qtd.value);

    const total = (qtdProduto1 * precoProduto1) + (qtdProduto2 * precoProduto2) + (qtdProduto3 * precoProduto3);

    document.getElementById('total').textContent = `R$ ${total.toFixed(2)}`;
}
