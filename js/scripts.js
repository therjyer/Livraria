// Função para carregar conteúdo de arquivos HTML
function loadHTML(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.error('Erro ao carregar o arquivo:', error));
}

// Carregar o cabeçalho e o rodapé na página
document.addEventListener("DOMContentLoaded", function() {
    loadHTML("header", "header.html");
    loadHTML("footer", "footer.html");
});