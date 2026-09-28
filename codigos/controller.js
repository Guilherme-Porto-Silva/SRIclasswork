const modelForm = document.getElementById("modelForm");

const themeForm = document.getElementById("themeForm");

const queryInput = document.getElementById("queryInput");

const pagina = document.querySelector("body");

const campoResposta = document.querySelector("main");

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

document.getElementById("selecionarModelo").addEventListener("click", mostrar);

function mudarTema () {

    pagina.className = "";

    pagina.classList.add(themeForm.value);
}

document.getElementById("selecionarTema").addEventListener("click", mudarTema);