async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos")
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida
}
// Para consumirmos uma API precisamos trabalhar com a assincronicidade, que nesse caso foi tratada com o async await. Em seguida, converter o retorno em JSON para objeto Javascript com o método .json(). Além de chamar a função para ela acontecer.
export const conectaApi = {
    listaVideos
}