document.addEventListener('DOMContentLoaded', function() {
    var comprarBtns = document.querySelectorAll('.comprar');
    var modal = document.getElementById('myModal');
    var span = document.getElementsByClassName("close")[0];

    comprarBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            window.location.href = "PagCompra&Info.html";
        });
    });

    var efetuarBtns = document.querySelectorAll('.efetuar');
    efetuarBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            window.alert("Adicionado ao seu carrinho com sucesso");
        });
    });

    document.getElementById('aplicarCupomBtn').addEventListener('click', function() {
        aplicarCupom();
    });

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});

