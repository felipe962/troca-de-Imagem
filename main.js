"use strict";

const botaoTrocarImagem = document.getElementById("trocar-imagem");
const inputTime = document.getElementById("time");
const mensagemErro = document.getElementById("erro");

const times = {
   "corinthians": "./img/corinthians.png",
    "sao paulo": "./img/saopaulo.png",
    "palmeiras": "./img/palmeiras.png",
    "flamengo": "./img/flamengo.png",
    "vasco": "./img/vasco.png",
    "botafogo": "./img/botafogo.png"
};

// Função para trocar a imagem com base no nome do time digitado
function trocarImagemPorNome() {
    const timeDigitado = inputTime.value.toLowerCase().trim(); // Remover espaços extras
    if (times[timeDigitado]) {
        document.documentElement.style.setProperty("--imagem-fundo", `url('${times[timeDigitado]}')`);
    } else {
        alert("Time não encontrado! Tente novamente.");
    }
}

// Evento de clique no botão para trocar a imagem
botaoTrocarImagem.addEventListener("click", trocarImagemPorNome);

// Também permite que o usuário troque a imagem pressionando a tecla Enter
inputTime.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        trocarImagemPorNome();
    }
});
function trocarImagemPorNome() {
    const timeDigitado = inputTime.value.toLowerCase().trim(); // Remover espaços extras

    if (times[timeDigitado]) {
        document.documentElement.style.setProperty("--imagem-fundo", `url('${times[timeDigitado]}')`);
        mensagemErro.style.display = "none"; // Oculta a mensagem de erro, se o time for encontrado
    } else {
        // Se o time não for encontrado, exibe a mensagem de erro
        document.documentElement.style.setProperty("--imagem-fundo", ''); // Limpa a imagem de fundo
        mensagemErro.textContent = "Erro 404: Time não disponível";
        mensagemErro.style.display = "block"; // Exibe a mensagem de erro
    }
}

