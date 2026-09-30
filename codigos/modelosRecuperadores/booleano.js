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
}