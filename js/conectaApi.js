async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;
}
// Para consumirmos uma API precisamos trabalhar com a assincronicidade, que nesse caso foi tratada com o async await. Em seguida, converter o retorno em JSON para objeto Javascript com o método .json(). Além de chamar a função para ela acontecer.

async function criaVideo(titulo, descricao, url, imagem) { //add videos 
    const conexao = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,// aqui ele vai tornar a var em uma string
            url: url,
            imagem: imagem
        })
    });

    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

async function buscaVideo(termoDeBusca) {
    const conexao = await fetch(`http://localhost:3000/videos?q=${termoDeBusca}`)
    const conexaoConvertida = conexao.json();

    return conexaoConvertida;
}

export const conectaApi = {
    listaVideos,
    criaVideo,
    buscaVideo
}

//Requisições do tipo POST são usadas para enviar dados para a API. Por exemplo, criar um novo registro de usuário com: nome, idade e endereço de e-mail.

//Diferente de requisições do tipo GET, você precisará passar um objeto das opções de configuração como um segundo argumento em requisições POST.