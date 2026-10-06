// COMEÇO DE UM CÓDIGO GERADO PELO CLAUDE AI

export function buscarBooleano(consulta, indice, stopwords) {

// 1) Quebra a consulta em parênteses e palavras. Operadores só valem em MAIÚSCULAS.
  
  const brutos = consulta.match(/\(|\)|[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*/gu) ?? [];
  
  const toks = brutos.map(t => ["AND", "OR", "NOT", "(", ")"].includes(t) ? t : t.toLowerCase());
  
  let i = 0;       // posição atual na lista de tokens
  
  const docsDo = t => new Set(indice.invertido.get(t)?.keys() ?? []);

// 2) Gramática (precedência NOT > AND > OR):
  
//    ou := e ( OR e )*      e := nao ( [AND] nao )*      nao := NOT nao | "(" ou ")" | termo
  
  const nao = () => {

    const t = toks[i++];

    if (t === "NOT") { const x = nao(); return new Set([...indice.todosIds].filter(id => !x.has(id))); }

    if (t === "(") { const r = ou(); if (toks[i++] !== ")") throw new Error("Parêntese não fechado"); return r; }

    if (t === undefined || [")", "AND", "OR"].includes(t)) throw new Error("Consulta incompleta");

    return stopwords.has(t) ? new Set(indice.todosIds) : docsDo(t);// stopword não restringe
  };

  const e = () => {// "A NOT B" vale como "A AND NOT B" (exemplo do enunciado)

    let r = nao();

    while (i < toks.length && toks[i] !== "OR" && toks[i] !== ")") {
    
      if (toks[i] === "AND") i++;
    
      const x = nao();
    
      r = new Set([...r].filter(id => x.has(id)));// interseção
    }

    return r;
  };

  const ou = () => {
  
    let r = e();
  
    while (toks[i] === "OR") { i++; r = new Set([...r, ...e()]); }// união
  
    return r;
  };

  const resultado = ou();
  
  if (i < toks.length) throw new Error("Parêntese inesperado");
  
  return resultado;// Set de ids de documentos
}

// FIM DO CÓDIGO GERADO PELO CLAUDE AI



//   --- CÓDIGO DESCARTADO --- //

// function AND (conjuntoA, conjuntoB) {

// //volta um Set vazio se não receber um dos conjuntos

//   if (!conjuntoA || !conjuntoB) return new Set();

// //faz um Set filtrando, entre o conjunto A, o que o conjunto B também tem, e devolve ele

//   return new Set([...conjuntoA].filter(id => conjuntoB.has(id)));
// }



// function OR (conjuntoA, conjuntoB) {

// // a valerá um Set vazio, se o conjunto A estiver vazio

//   const a = conjuntoA || new Set();

// // b valerá um Set vazio, se o conjunto B estiver vazio

//   const b = conjuntoB || new Set();

// // devolve um Set composto pelos dois conjuntos concatenados

//   return new Set([...a, ...b]);
// }



// function NOT (conjuntoNegado, todosOsIds) {

// // negados valerá um Set vazio, se o conjunto negado estiver vazio

//   const negados = conjuntoNegado || new Set();

// // tira o que negados tem de uma lista com todo mundo e devolve o resto

//   return new Set([...todosOsIds].filter(id => !negados.has(id)));
// }
  


// function booleano (pesquisa, significativas) {

//   const indices = [];// posições de cada documento na pesquisa

//   const desejo = [];// pesquisa com operadoeres aplicados

//   const resultado = new Map();// retorno esperado pelo controller.js



//   pesquisa.forEach((palavra, indice) => {

// // não aplicamos a lógica sobre a palavra NOT

// // não aplicamos a lógica sobre a palavra AND ou OR se ela estiver precedida de NOT
    
//   if (palavra != "NOT" && pesquisa[indice - 1] != "NOT") {



//     if (palavra == "AND") {
      
// //    para o caso de AND, se a palavra seguinte for NOT, aplicamos a lógica NAND sobre o conjunto seguinte
    
//       if (pesquisa[indice + 1] == "NOT") desejo.push(NOT(AND(pesquisa[indice - 1], pesquisa[indice + 2])));

// //    senão, aplicamos a lógica de AND
      
//       else desejo.push(AND(pesquisa[indice - 1], pesquisa[indice + 1]));
//     }


    
//     if (palavra == "OR") {
      
// //    para o caso de OR, se a palavra seguinte for NOT, aplicamos a lógica NOR sobre o conjunto seguinte
    
//       if (pesquisa[indice + 1] == "NOT") desejo.push(NOT(OR(pesquisa[indice - 1], pesquisa[indice + 2])));
      
// //    senão, aplicamos a lógica de OR
      
//       else desejo.push(OR(pesquisa[indice - 1], pesquisa[indice + 1]));
//     }
//   }

//   });



//   desejo.forEach(pesquisada => {// agora que já aplicamos os operadores, é hora de comparar com as palavras significativas

//     significativas.forEach((significativa, indice) => {

//       if (significativa == pesquisada) indices.push(indice);

//     });

//   });



//   indices.forEach((indice, posicao) => {// agora que já ordenamos os indices,

//      resultado.add(indice, posicao);// precisamos colocá-los em um mapa,

//   });// para devolver ao controller.js

//   return resultado;
// }