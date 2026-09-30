function soma_de_todos(vetor) {

    let soma = 0;

    vetor.forEach(valor => {

        soma += valor;
    });

    return soma;
}



function ordenar (similaridades) {

    // processo
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



function vetorial (pesquisa, significativas) {

    const pesosNoDocumento = []

    const pesosNaConsulta = []

    pesquisa.forEach(termo => {

        pesosNaConsulta.push(trabalharCom(termo, significativas));
    });

    significativas.forEach(termo => {

        pesosNoDocumento.push(trabalharCom(termo, significativas));
    });

    const similaridades = new Map();

    significativas.forEach((termo, indice) => {

        similaridades.add(indice + 1, Sim(pesosNoDocumento[indice], pesosNaConsulta[indice]));
    });

    const similaridadesOrdenadas = ordenar(similaridades);
}