// referenciando partes do HTML no código JavaScript

const palavrasChave = document.getElementById("palavrasChave");

const pagina = document.querySelector("body");

const campoResposta = document.querySelector("main");



// reteferenciando documentos

const indicesDocumentos = [];

const titulos = [];

const autores = [];

const nomesDocumentos = [];



function pegarTodasAsPalavrasSignificativas () {

//  controller.js não consegue pegar as palavras dos arquivos de texto, então, o classificarResumos.py vai mandá-las para ele.

//  Usarei o Flask (um framework web do Python) isso.
        
    const resposta = fetch('/api/mandar_todas_as_palavras_significativas', {// referência presente no classificarResumos.py

        method: 'GET',

        headers: {

            'Content-Type': 'application/json',// avisando que é para usar um JSON para trafegar os dados

        }
    });

    if (resposta == null) return getFallback();
    
    return resposta;

//  Essa "resposta" é aquela "todas_as_palavras_significativas" do classificarResumos.py, um vetor de vetores.
    
//  Cada um dos seus itens é um vetor de string, contendo as palavras significativas de um resumo.
}



function pesquisar () {

//  pegando os valores do HTML

    const modeloUtilizado = document.querySelector('input[name="selecioneModelo"]:checked').value;

    const pesquisa = palavrasChave.value;

    const palavrasDaPesquisa = pesquisa.split(" ");// split transforma a string num vetor de palavras, separando-as pelos espaços

//  pegando as palavras significativas para cada resumo

    const todasAsPalavrasSignificativas = pegarTodasAsPalavrasSignificativas();

//  mandando as palavras para o modelo de pesquisa escolhido e devolvendo a resposta dele

    if (modeloUtilizado == "Booleano") return booleano(palavrasDaPesquisa, todasAsPalavrasSignificativas);

    if (modeloUtilizado == "Vetorial") return vetorial(palavrasDaPesquisa, todasAsPalavrasSignificativas);
}



function mostrar () {

//  pegando a resposta da pesquisa

//  essa constante guarda um mapa do JavaScript

//  cada chave dela é um índice de comumento da nossa base de dados

//  cada valor dela é a posição na qual o documento com aquele índice precisa aparecer na resposta final

    const resultado = pesquisar();

//  mostrando a resposta na tela, quando nenhum PDF combina

    if (resultado == null) {

        campoResposta.innerHTML = `<span>Nenhum resultado encontrado. Confira se as palavras estão corretamente digitadas.</span>`;

        return;
    }

//  mostrando a resposta na tela, quando algum PDF combina

    campoResposta.innerHTML = "";

    resultado.forEach((documento, posicaoDeExibicao) => {

        const ancoraParaPDF = document.createElement("a");

        ancoraParaPDF.textContent = `${titulos[posicaoDeExibicao]} - ${autores[posicaoDeExibicao]}`;

        ancoraParaPDF.href = `../banco/${nomesDocumentos[posicaoDeExibicao]}.pdf`;

        ancoraParaPDF.classList.add("contornado");

        campoResposta.appendChild(ancoraParaPDF);
    });
}

// avisando que é para mostrar a resposta quando o botão de pesquisar for precionado

document.getElementById("pesquisar").addEventListener("click", mostrar);



function mudarTema() {

    const temaSelecionado = document.querySelector('input[name="selecioneTema"]:checked');// botão clicado

    if (temaSelecionado == null) return;// HTML não carregou o botão ou algo do tipo

    pagina.className = "";// limpando o valor antigo

    pagina.classList.add(temaSelecionado.value);// inserrindo o valor novo
}

// avisando que é para mudar o tema quando o botão de selecionar tema for precionado

document.getElementById("selecionarTema").addEventListener("click", mudarTema);