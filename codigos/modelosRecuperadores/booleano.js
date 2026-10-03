function AND (conjuntoA, conjuntoB) {

//volta um Set vazio se não receber um dos conjuntos

  if (!conjuntoA || !conjuntoB) return new Set();

//faz um Set filtrando, entre o conjunto A, o que o conjunto B também tem, e devolve ele

  return new Set([...conjuntoA].filter(id => conjuntoB.has(id)));
}



function OR (conjuntoA, conjuntoB) {

// a valerá um Set vazio, se o conjunto A estiver vazio

  const a = conjuntoA || new Set();

// b valerá um Set vazio, se o conjunto B estiver vazio

  const b = conjuntoB || new Set();

// devolve um Set composto pelos dois conjuntos concatenados

  return new Set([...a, ...b]);
}



function NOT (conjuntoNegado, todosOsIds) {

// negados valerá um Set vazio, se o conjunto negado estiver vazio

  const negados = conjuntoNegado || new Set();

// tira o que negados tem de uma lista com todo mundo e devolve o resto

  return new Set([...todosOsIds].filter(id => !negados.has(id)));
}
  


function booleano (pesquisa, significativas) {

  const indices = [];// posições de cada documento na pesquisa

  const desejo = [];// pesquisa com operadoeres aplicados

  const resultado = new Map();// retorno esperado pelo controller.js



  pesquisa.forEach((palavra, indice) => {

// não aplicamos a lógica sobre a palavra NOT

// não aplicamos a lógica sobre a palavra AND ou OR se ela estiver precedida de NOT
    
  if (palavra != "NOT" && pesquisa[indice - 1] != "NOT") {



    if (palavra == "AND") {
      
//    para o caso de AND, se a palavra seguinte for NOT, aplicamos a lógica NAND sobre o conjunto seguinte
    
      if (pesquisa[indice + 1] == "NOT") desejo.push(NOT(AND(pesquisa[indice - 1], pesquisa[indice + 2])));

//    senão, aplicamos a lógica de AND
      
      else desejo.push(AND(pesquisa[indice - 1], pesquisa[indice + 1]));
    }


    
    if (palavra == "OR") {
      
//    para o caso de OR, se a palavra seguinte for NOT, aplicamos a lógica NOR sobre o conjunto seguinte
    
      if (pesquisa[indice + 1] == "NOT") desejo.push(NOT(OR(pesquisa[indice - 1], pesquisa[indice + 2])));
      
//    senão, aplicamos a lógica de OR
      
      else desejo.push(OR(pesquisa[indice - 1], pesquisa[indice + 1]));
    }
  }

  });



  desejo.forEach(pesquisada => {// agora que já aplicamos os operadores, é hora de comparar com as palavras significativas

    significativas.forEach((significativa, indice) => {

      if (significativa == pesquisada) indices.push(indice);

    });

  });



  indices.forEach((indice, posicao) => {// agora que já ordenamos os indices,

     resultado.add(indice, posicao);// precisamos colocá-los em um mapa,

  });// para devolver ao controller.js

  return resultado;
}