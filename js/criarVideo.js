import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

async function criarVideo(evento) {
    evento.preventDefault(); //aqui ele só carrega depois de preenchida a pagina

    const imagem = document.querySelector("[data-imagem]").value; //valuerecebe o valor
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString(); //aqui vai tipo gerar um numero aleatorio *10 pra ele ser um numero inteiro

    await conectaApi.criaVideo(titulo, descricao, url, imagem); // seguir a ordem
    window.location.href = "../pages/envio-concluido.html"; //resposta se conseguiu enviar o video
}

formulario.addEventListener("submit", evento => criarVideo(evento)) //aqui é o fofoqueiro