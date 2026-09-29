const modelForm = document.getElementById("modelForm");

const themeForm = document.getElementById("themeForm");

const queryInput = document.getElementById("queryInput");

const pagina = document.querySelector("body");

const campoResposta = document.querySelector("main");

function pegarTodasAsPalavrasSignificativas () {
}

function pesquisar () {

    const modeloUtilizado = modelForm.value;

    const pesquisa = queryInput.value;

    const palavrasDaPesquisa = pesquisa.split(" ");

    const todasAsPalavrasSignificativas = pegarTodasAsPalavrasSignificativas();

    if (modeloUtilizado == "Booleano") return booleano(palavrasDaPesquisa, todasAsPalavrasSignificativas);

    if (modeloUtilizado == "Vetorial") return vetorial(palavrasDaPesquisa, todasAsPalavrasSignificativas);
}

function mostrar () {

    const resultado = pesquisar();

    if (resultado == null) {

        campoResposta.innerHTML = `<span>Nenhum resultado encontrado. Confira se as palavras estão corretamente digitadas.</span>`;

        return;
    }

    campoResposta.innerHTML = resultado;
}

document.getElementById("pesquisar").addEventListener("click", mostrar);

function mudarTema () {

    pagina.className = "";

    pagina.classList.add(themeForm.value);
}

document.getElementById("selecionarTema").addEventListener("click", mudarTema);