const modelForm = document.getElementById("modelForm");

const queryInput = document.getElementById("queryInput");

const campoResposta = document.getElementById("response");

function pesquisar () {

    const modeloUtilizado = modelForm.value;

    const pesquisa = queryInput.value;

    const palavrasDaPesquisa = pesquisa.split(" ");

    if (modeloUtilizado == 1) return booleano(palavrasDaPesquisa);

    if (modeloUtilizado == 2) return vetorial(palavrasDaPesquisa);
}

function mostrar () {

    const resultado = pesquisar();

    if (resultado == null) {

        campoResposta.innerHTML = `<span>Nenhum resultado encontrado. Confira se as palavras estão corretamente digitadas.</span>`;

        return;
    }

    campoResposta.innerHTML = resultado;
}

document.getElementById("send").addEventListener("click", mostrar);