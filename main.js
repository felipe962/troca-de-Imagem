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

function trocarImagemPorNome() {
    const timeDigitado = inputTime.value.toLowerCase().trim(); // Remover espaços extras
    if (times[timeDigitado]) {
        document.documentElement.style.setProperty("--imagem-fundo", `url('${times[timeDigitado]}')`);
    } else {
        alert("Time não encontrado! Tente novamente.");
    }
}

botaoTrocarImagem.addEventListener("click", trocarImagemPorNome);

inputTime.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        trocarImagemPorNome();
    }
});
function trocarImagemPorNome() {
    const timeDigitado = inputTime.value.toLowerCase().trim(); 

    if (times[timeDigitado]) {
        document.documentElement.style.setProperty("--imagem-fundo", `url('${times[timeDigitado]}')`);
        mensagemErro.style.display = "none"; 
    } else {
        document.documentElement.style.setProperty("--imagem-fundo", '');
        mensagemErro.textContent = "Erro 404: Time não disponível";
        mensagemErro.style.display = "block"; 
    }
}

