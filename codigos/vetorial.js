// Sim(documento, query) = (soma de todos(peso de cada termo naquele documento)) / (soma de todos(peso de cada termo naquele documento)^2 * soma de todos(peso de cada termo na consulta)^2)

const documento = "Depois eu olho como pega o documento.";



function Sim(dx, q) {}



function calcularTF(termoPesquisa) {

    let frequencia = 0;

    documento.forEach(termoDocumento => {

        if (termoDocumento == termoPesquisa) frequencia++;
    });

    return 1 + Math.log2(frequencia);
}



function calcularMI(termo) {// mi = quantos documentos tem o termo

    let frequencia = 0;

    documento.forEach(termoDocumento => {

        if (termoDocumento == termo) frequencia++;
    });

    return frequencia;
}



function calcularIDF(termo) {

    const N = documento.size;
    
    const mi = calcularMI(termo);

    return Math.log2(N / mi);
}



function trabalharCom (termo) {

    const TF = calcularTF(termo);
    
    const IDF = calcularIDF(termo);

    return (TF * IDF)
}



function vetorial (pesquisa) {

    const pesosNoDocumento = []

    const pesosNaConsulta = []

    pesquisa.forEach(termo => {

        pesosNaConsulta.add(trabalharCom(termo));
    });

    documento.forEach(termo => {

        pesosNoDocumento.add(trabalharCom(termo));
    });

    const posicionamentos = []

    documento.forEach((termo, indice) => {

        posicionamentos.add(Sim(pesosNoDocumento[indice], pesosNaConsulta[indice]));
    });
}