function soma_de_todos (vetor) {

    let soma = 0;

    vetor.forEach(valor => {

        soma += valor;
    });

    return soma;
}



function ordenar (vetor) {

    vetor.sort((primeiroTermo, segundoTermo) => segundoTermo - primeiroTermo);

    return vetor;
}



function Sim(dx, q) { return soma_de_todos(dx) / (soma_de_todos(dx) ** 2 * soma_de_todos(q) ** 2); }



function calcularTF(termoPesquisa, documento) {

    let frequencia = 0;

    documento.forEach(termoDocumento => {

        if (termoDocumento == termoPesquisa) frequencia++;
    });

    return 1 + Math.log2(frequencia);
}



function calcularMI(termo, colecaoDeDocumentos) { 

//  Função que recebe a coleção de documentos (ex: um array de arrays de palavras) e o termo a ser buscado, e calcula o mi.

    let mi = 0;

    colecaoDeDocumentos.forEach(documento => {

 // Verifica se o termo existe pelo menos uma vez neste documento

        if (documento.includes(termo))  mi++;
    });

    return mi;
}



function calcularIDF(termo, colecaoDeDocumentos) {

//  Usamos .length se for um array e .size se for um Set/Map

    const N = colecaoDeDocumentos.length || colecaoDeDocumentos.size; 
    
    const mi = calcularMI(termo, colecaoDeDocumentos);

//  Tratamento de segurança para evitar divisão por zero

    if (!(mi > 0)) return 0;

    return Math.log2(N / mi);
}



function trabalharCom (termo, documento) {

    const TF = calcularTF(termo, documento);
    
    const IDF = calcularIDF(termo, documento);

    return (TF * IDF)
}



// COMEÇO DE UM CÓDIGO GERADO PELO CLAUDE AI

export function buscarVetorial(termos, indice) {

    const consulta = new Map();// termo -> frequência na consulta

    for (const t of termos) consulta.set(t, (consulta.get(t) ?? 0) + 1);
  
    const produto = new Map(); // idDoc -> produto escalar (consulta · documento)

    let somaQuadrados = 0;

    for (const [t, freq] of consulta) {

      const wq = (1 + Math.log2(freq)) * (indice.idf.get(t) ?? 0);// peso TF-IDF do termo na consulta

      somaQuadrados += wq * wq;

      for (const id of indice.invertido.get(t)?.keys() ?? [])// só percorre docs que contêm o termo

        produto.set(id, (produto.get(id) ?? 0) + wq * indice.pesos[id].get(t));
    }

    const normaConsulta = Math.sqrt(somaQuadrados);

    return [...produto].filter(([, dot]) => dot > 0)// descarta score 0
      .map(([id, dot]) => ({ id, score: dot / (indice.normas[id] * normaConsulta) }))// similaridade do cosseno
      .sort((a, b) => b.score - a.score);// mais relevante primeiro
}

// FIM DO CÓDIGO GERADO PELO CLAUDE AI



//   --- CÓDIGO DESCARTADO --- //

// function vetorial (pesquisa, significativas) {

//     const pesosNoDocumento = []

//     const pesosNaConsulta = []

//     pesquisa.forEach(termo => {

//         pesosNaConsulta.push(trabalharCom(termo, significativas));
//     });

//     significativas.forEach(termo => {

//         pesosNoDocumento.push(trabalharCom(termo, significativas));
//     });

//     const similaridades = new Map();

//     significativas.forEach((termo, indice) => {

//         similaridades.add(indice, Sim(pesosNoDocumento[indice], pesosNaConsulta[indice]));
//     });

//     const similaridadesOrdenadas = ordenar(similaridades.values);

//     const mapaOrdenado = new Map();

//     similaridadesOrdenadas.forEach((similaridade, indice) => {

//         similaridades.forEach((similaridadeAnalisada, indice) => {

//             if (similaridadeAnalisada == similaridadesOrdenadas[indice]) mapaOrdenado.add(similaridades.keys[indice], similaridades.values[indice]);
//         });
//     });

//     return mapaOrdenado;
// }