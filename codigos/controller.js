// COMEÇO DE UM CÓDIGO GERADO PELO CLAUDE AI

import { tokenizar, construirIndice } from "./modelosRecuperadores/indice.js";

import { buscarBooleano } from "./modelosRecuperadores/booleano.js";

import { buscarVetorial } from "./modelosRecuperadores/vetorial.js";

// FIM DO CÓDIGO GERADO PELO CLAUDE AI



// referenciando partes do HTML no código JavaScript

const palavrasChave = document.getElementById("palavrasChave");

const pagina = document.querySelector("body");

const campoResposta = document.querySelector("main");



// COMEÇO DE UM CÓDIGO GERADO PELO CLAUDE AI

let documentos = [];// título, autores, arquivo, tokens... (vêm do indice.json)

let stopwords = new Set();// a mesma lista usada na indexação

let indice = null;// estruturas de busca (item 4)



function mostrarMensagem(texto) {

  const span = document.createElement("span");

  span.textContent = texto;

  campoResposta.replaceChildren(span);
}



async function carregarDados() {

  try {

    const resposta = await fetch("./dados/indice.json");

    if (!resposta.ok) throw new Error(`HTTP ${resposta.status}`); // fetch NÃO rejeita em 404

    const dados = await resposta.json();

    documentos = dados.documentos;

    stopwords = new Set(dados.stopwords);

    indice = construirIndice(documentos);
  }
  
  catch (erro) {

    console.error("Falha ao carregar a base:", erro);
    
    mostrarMensagem("Não foi possível carregar a base de documentos.");
  }
}

carregarDados();



function mostrar(resultados) {// resultados: [{ id, score? }] já ordenados

    if (resultados.length == 0) return mostrarMensagem("Nenhum resultado encontrado. Confira as palavras digitadas.");

    const links = resultados.map(({ id, score }) => {

    const doc = documentos[id];

    const ancora = document.createElement("a");

    ancora.textContent = `${doc.titulo} — ${doc.autores.join(", ")}` + (score ? ` (similaridade ${score.toFixed(3)})` : "");

    ancora.href = doc.arquivo.split("/").map(encodeURIComponent).join("/");// "banco/..." relativo à página; trata espaços e acentos

    ancora.target = "_blank";

    ancora.rel = "noopener";

    ancora.classList.add("contornado");

    return ancora;
  });

  campoResposta.replaceChildren(...links);
}



function pesquisar() {

    if (!indice) return mostrarMensagem("A base ainda não foi carregada.");

    const consulta = palavrasChave.value.trim();

    if (!consulta) return mostrarMensagem("Digite ao menos uma palavra-chave.");

    const modelo = document.querySelector('input[name="selecioneModelo"]:checked').value; // há um rádio 'checked' por padrão

    try {

      mostrar(modelo == "Booleano"?
        
      [...buscarBooleano(consulta, indice, stopwords)].map(id => ({ id })): buscarVetorial(tokenizar(consulta, stopwords), indice));
    }
    
    catch (erro) { mostrarMensagem(`Consulta inválida: ${erro.message}`); }
}

document.getElementById("formBusca").addEventListener("submit", e => { e.preventDefault(); pesquisar(); });



export function construirIndice(documentos) {

    const invertido = new Map();// termo -> Map(idDoc -> frequência do termo no doc)

    documentos.forEach((doc, id) => {

      for (const termo of doc.tokens) {

        if (!invertido.has(termo)) invertido.set(termo, new Map());

        const postings = invertido.get(termo);
        
        postings.set(id, (postings.get(id) ?? 0) + 1);
      }
    });

    const N = documentos.length;
    
    const idf = new Map();// termo -> log2(N / nº de docs que contêm o termo)
    
    const pesos = documentos.map(() => new Map());// pesos[id]: termo -> peso TF-IDF
    
    for (const [termo, postings] of invertido) {
    
        idf.set(termo, Math.log2(N / postings.size));
    
        for (const [id, freq] of postings) pesos[id].set(termo, (1 + Math.log2(freq)) * idf.get(termo));
    }

    const normas = pesos.map(v => Math.sqrt([...v.values()].reduce((s, w) => s + w * w, 0)));
    
    return { N, invertido, idf, pesos, normas, todosIds: new Set(documentos.keys()) };
}

// FIM DO CÓDIGO GERADO PELO CLAUDE AI



//function pesquisar () {

//  pegando os valores do HTML

//    const modeloUtilizado = document.querySelector('input[name="selecioneModelo"]:checked').value;

//    const pesquisa = palavrasChave.value;

//    const palavrasDaPesquisa = pesquisa.split(" ");// split transforma a string num vetor de palavras, separando-as pelos espaços

//  pegando as palavras significativas para cada resumo

//    const todasAsPalavrasSignificativas = pegarTodasAsPalavrasSignificativas();

//  mandando as palavras para o modelo de pesquisa escolhido e devolvendo a resposta dele

//    if (modeloUtilizado == "Booleano") return booleano(palavrasDaPesquisa, todasAsPalavrasSignificativas);

//    if (modeloUtilizado == "Vetorial") return vetorial(palavrasDaPesquisa, todasAsPalavrasSignificativas);
//}



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
