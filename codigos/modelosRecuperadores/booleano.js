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

  const indices = [];

  const desejo = [];



  pesquisa.forEach((palavra, indice) => {
    
    if (palavra != "NOT" && pesquisa[indice - 1] != "NOT") {

      if (palavra == "AND") {
    
      if (pesquisa[indice + 1] == "NOT") desejo.push(NOT(AND(pesquisa[indice - 1], pesquisa[indice + 2])));
      
      else desejo.push(AND(pesquisa[indice - 1], pesquisa[indice + 1]));
    }
    
    if (palavra == "OR") {
    
      if (pesquisa[indice + 1] == "NOT") desejo.push(NOT(OR(pesquisa[indice - 1], pesquisa[indice + 2])));
      
      else desejo.push(OR(pesquisa[indice - 1], pesquisa[indice + 1]));
    }
  }

  });



  desejo.forEach((palavra, indice) => {
    
    if (significativas[indice] == palavra) indices.push(indice + 1);

  });
}