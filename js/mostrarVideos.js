import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]"); 
// o data- individualizar elementos e conseguir manipular o DOM

export default function constroiCard(titulo, descricao, url, imagem) {
    const video = document.createElement("li"); 
    //class que usa no li
    //põe um html dentro desse elemento
    video.className = "videos__item"; 
    //usar `` para possibilitar usar ${} com as var dentro
    video.innerHTML = `<iframe width="100%" height="72%" src="${url}" 
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descricao-video">
    <img src="${imagem}" alt="logo canal alura">
    <h3>${titulo}</h3>
    <p>${descricao}</p>
</div>`
//li conteudo

    return video;
}

async function listaVideos() {
    try {
    const listaApi = await conectaApi.listaVideos();
    // vai retornar a lista do json
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))
    } catch {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
    }
}

listaVideos();
//Então a função, o método appendChild, ele vai anexar outros filhos para ela, outros filhos para o pai que é a lista. Os filhos que ele vai anexar, é que vai voltar lá no nosso constroiCard. Então ele vai construir vários lis para colocar dentro do ul, que é a nossa variável lista.

//json-server --watch db.json