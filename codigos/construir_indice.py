"""Módulo 1 (extração + indexação): lê dados/documentos.json e gera os .txt de frequência e o dados/indice.json."""

import json

import re

import unicodedata

from collections import Counter

from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent# raiz do projeto, não importa de onde o script é chamado

TOKEN = re.compile(r"[^\W_]+(?:-[^\W_]+)*")# letras/dígitos; hífen interno faz parte da palavra (enunciado)

def carregar_stopwords(caminho):
    
    """Lê a lista (ANSI) e devolve um set: busca em set é O(1), em lista é O(n)."""
    
    return {l.strip().lower() for l in caminho.read_text(encoding="ANSI").splitlines() if l.strip()}

def tokenizar(texto, stopwords):
    
    """Mesma regra do tokenizar() do JavaScript: NFC -> minúsculas -> tokens -> sem stop-words."""
    
    texto = unicodedata.normalize("NFC", texto).lower()
    
    return [t for t in TOKEN.findall(texto) if t not in stopwords]



def main():
    
    stop = carregar_stopwords(RAIZ / "codigos" / "stopwords.txt")
    
    docs = json.loads((RAIZ / "dados" / "documentos.json").read_text(encoding="ANSI"))
    
    pasta = RAIZ / "resumos"
    
    pasta.mkdir(exist_ok=True)# a pasta não existe no repositório
    
    for i, doc in enumerate(docs):
        
        doc["id"] = i
        
        doc["tokens"] = tokenizar(doc["resumo"], stop)
        
        linhas = [f"<{t}, {n}>" for t, n in Counter(doc["tokens"]).most_common()]# formato <termo, frequência>
        
        (pasta / f"resumo_{i + 1}_palavras_significativas.txt").write_text("\n".join(linhas), encoding="ANSI")
        
    saida = {"stopwords": sorted(stop), "documentos": docs}
    
    (RAIZ / "dados" / "indice.json").write_text(json.dumps(saida, ensure_ascii=False), encoding="ANSI")
    
    print(f"{len(docs)} documentos indexados")



if __name__ == "__main__":
    
    main()