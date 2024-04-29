
function aplicarDesconto() {
    var cupomInput = document.getElementById("cupom").value;
    var precoElement = document.getElementById("preco");
    var preco = parseFloat(precoElement.innerText);
  
    if (cupomInput === "FIAP2024") {
      var desconto = preco * 0.10;
      precoElement.innerText = (preco - desconto).toFixed(2);
      alert("Desconto aplicado com sucesso!");
    } else {
      alert("Cupom inválido.");
    }
  }
  