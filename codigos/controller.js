// referenciando partes do HTML no código JavaScript

const modelForm = document.getElementById("modelForm");

const themeForm = document.getElementById("themeForm");

const queryInput = document.getElementById("queryInput");

const pagina = document.querySelector("body");

const campoResposta = document.querySelector("main");



function pegarTodasAsPalavrasSignificativas () {

//  controller.js não consegue pegar as palavras dos arquivos de texto, então, o classificarResumos.py vai mandá-las para ele.

//  Usarei o Flask (um framework web do Python) isso.
        
    const resposta = fetch('/api/mandar_todas_as_palavras_significativas', {// referência presente no classificarResumos.py

        method: 'GET',

        headers: {

            'Content-Type': 'application/json',// avisando que é para usar um JSON para trafegar os dados

        }
    });

    if (resposta == null) {// tratando erro

        campoResposta.innerHTML = `<span>Estamos tendo algumas dificuldades técnicas. Por favor, tente novamente mais tarde.</span>`;

        return;
    }
    
    return resposta;

//  Essa "resposta" é aquela "todas_as_palavras_significativas" do classificarResumos.py, um vetor de vetores.
    
//  Cada um dos seus itens é um vetor de string, contendo as palavras significativas de um resumo.
}



function pesquisar () {

//  pegando os valores do HTML

    const modeloUtilizado = modelForm.value;

    const pesquisa = queryInput.value;

    const palavrasDaPesquisa = pesquisa.split(" ");// split transforma a string num vetor de palavras, separando-as pelos espaços

//  pegando as palavras significativas para cada resumo

    const todasAsPalavrasSignificativas = pegarTodasAsPalavrasSignificativas();

//  mandando as palavras para o modelo de pesquisa escolhido e devolvendo a resposta dele

    if (modeloUtilizado == "Booleano") return booleano(palavrasDaPesquisa, todasAsPalavrasSignificativas);

    if (modeloUtilizado == "Vetorial") return vetorial(palavrasDaPesquisa, todasAsPalavrasSignificativas);
}



function mostrar () {

//  pegando a resposta da pesquisa

    const resultado = pesquisar();

//  mostrando a resposta na tela, quando nenhum PDF combina

    if (resultado == null) {

        campoResposta.innerHTML = `<span>Nenhum resultado encontrado. Confira se as palavras estão corretamente digitadas.</span>`;

        return;
    }

//  mostrando a resposta na tela, quando algum PDF combina

    campoResposta.innerHTML = resultado;
}

// avisando que é para mostrar a resposta quando o botão de pesquisar for precionado

document.getElementById("pesquisar").addEventListener("click", mostrar);



function mudarTema () {

    pagina.className = "";

    pagina.classList.add(themeForm.value);
}

// avisando que é para mudar o tema quando o botão de selecionar tema for precionado

document.getElementById("selecionarTema").addEventListener("click", mudarTema);