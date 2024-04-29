

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if (usuario === "1234" && senha === "1234") {
        window.location.href = "../site-vinheria/index.html"; 
    } else {
        document.getElementById("loginMessage").textContent = "Usuário ou senha incorretos.";
    }
});
