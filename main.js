// Função para rolar até o topo da página
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Mostrar/ocultar o botão de "voltar ao topo" conforme o usuário rola a página
window.onscroll = function() {
    var topButton = document.getElementById("topBtn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// Função de validação do formulário
function validateForm() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    
    if (nome === "" || email === "") {
        alert("Por favor, preencha todos os campos.");
        return false; // Cancela o envio do formulário
    }
    return true; // Permite o envio do formulário
}
