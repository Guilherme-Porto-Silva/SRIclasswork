# **📚 Trabalho de Implementação: Sistema de Recuperação de Informação (SRI) Simplificado**

## **📌 Visão Geral**

O objetivo deste trabalho é desenvolver um **Sistema de Recuperação de Informação (SRI) simplificado**, dividido nas seguintes etapas principais:

* **Indexação** de artigos científicos;  
* **Armazenamento** estruturado dos dados e metadados;  
* **Recuperação de informações** utilizando os modelos **Booleano** e de **Espaço Vetorial**.

## **🗓️ Cronograma e Entregas**

| Entrega | Data Limite | Descrição |
| :---- | :---- | :---- |
| **1ª Entrega** | 14/09 | Escolha da área de interesse pelo grupo e download de **20 artigos científicos**. Disponibilizar o link dos artigos armazenados e indicar a área escolhida. *(Atividade no portal)* |
| **2ª Entrega** | 20/09 | Entrega parcial do **Módulo 1** (Extração \+ Indexação). *(Atividade no portal)* |
| **Entrega Final** | 06/10 | Envio do pacote completo contendo o **Código Fonte \+ Relatório Escrito**. |
| **Apresentação** | 07/10 | Apresentação prática e teórica em sala de aula. |

> ⚠️ **Observações Importantes sobre as Entregas:**

* O sistema pode ser desenvolvido em **qualquer linguagem de programação**, porém todo o código deve estar **rigorosamente comentado**.  
* **Apenas 1 integrante** do grupo deve realizar o envio do pacote final contendo os códigos.

## **🧩 Estrutura do Sistema**

### **1️⃣ Módulo 1 – Preparação da Base de Documentos & Indexação**

#### **A. Extração de Metadados**

Selecionar **20 artigos científicos** da área escolhida e extrair/armazenar os seguintes campos:

* Título  
* Autor(es)  
* Filiação acadêmica  
* Resumo  
* Palavras-chave

#### **B. Processamento do Texto (Indexação)**

1. Extrair **apenas o resumo** de cada artigo para análise textual.  
2. Separar palavras significativas (considerar o caractere hífen \- como parte da letra/palavra).  
3. **Normalizar:** converter todo o texto para minúsculas, **mantendo a acentuação**.  
4. **Eliminar stop-words:** utilizar a lista padrão fornecida em anexo, podendo expandi-la conforme o domínio da área escolhida.  
5. Gerar a lista de frequência de termos (![][image1] – *Term Frequency*) no formato \<termo, frequência\>, salva em arquivo de texto (.txt).  
6. Enviar os resultados processados para o módulo de armazenamento.

### **2️⃣ Módulo 2 – Armazenamento**

O sistema deve manter, no mínimo, as seguintes estruturas de dados persistentes ou em memória:

* **Dicionário de termos:** com a quantidade total de ocorrências de cada termo na base.  
* **Tabela de documentos:** contendo \<DocId, Título, Autor, Total de termos significativos\>.  
* **Registro de controle:** no formato \<DocId, TotPal\> armazenando o último identificador atribuído e o total de palavras.  
* **Cópia do documento original** devidamente armazenada.

### **3️⃣ Módulo 3 – Recuperação de Informações**

* **Interface Gráfica (GUI):** Desenvolver uma interface (Web ou Desktop).  
* **Entrada de Consulta:** Permitir que o usuário insira termos de busca (palavras-chave ou frases).  
* **Pré-processamento da Consulta:** Processar a consulta exatamente da mesma forma que a etapa de indexação.  
* **Modelos de Recuperação:** O usuário deve poder escolher entre dois modelos:  
  1. **Modelo Booleano:** Suporte a consultas com operadores (AND, OR, NOT), devendo aceitar obrigatoriamente pelo menos um caso de **operadores aninhados** (ex: (termoA AND termoB) NOT termoC).  
  2. **Modelo Espaço Vetorial:** Executar o **cálculo de similaridade** entre o vetor da consulta e os vetores dos documentos.  
* **Exibição dos Resultados:**  
  * Exibir lista ordenada por relevância contendo **Título** e **Autor**.  
  * Permitir visualizar detalhes ao clicar no documento.  
  * O usuário **deve conseguir abrir o documento original** diretamente através da interface.

## **🧪 Conjunto de Testes Obrigatório**

O grupo deve definir prévia e manualmente **5 consultas de teste fixas** com **julgamento prévio de relevância** (*a priori*), anotando quais documentos da base são relevantes para cada consulta antes de rodar o sistema.

O conjunto de testes deve incluir obrigatoriamente:

* \[ \] **1 consulta** com resultado vazio (nenhum documento relevante encontrado).  
* \[ \] **1 consulta booleana** contendo operadores aninhados.  
* \[ \] **1 consulta exemplo** que **expõe uma limitação** de um dos dois modelos (demonstrando casos onde o modelo falha ou não é ideal, e não apenas casos de sucesso).

## **📄 Relatório Final (Estrutura do Documento)**

O documento a ser entregue deve conter as seguintes seções padronizadas:

1. **Capa**  
2. **Sumário**  
3. **Introdução e Objetivos**  
4. **Metodologia e Implementação**  
5. **Resultados:** Exemplos de consultas realizadas, detalhando a avaliação das 5 consultas fixas de teste.  
6. **Discussão:**  
   * Análise crítica dos resultados, benefícios e limitações.  
   * **Comparação dos modelos:** Comparar os resultados obtidos pelo Modelo Booleano *vs.* Modelo de Espaço Vetorial, utilizando métricas formais (**Precisão** e **Revocação**) calculadas com base no conjunto de julgamento de relevância prévio do grupo.  
7. **Conclusão**  
8. **Lições Aprendidas**  
9. **Referências Bibliográficas (Normas ABNT)**  
10. **Uso de Inteligência Artificial Generativa (IAG)**

## **🤖 Política sobre o Uso de IA Generativa (IAG)**

O uso de ferramentas de IA Generativa (como ChatGPT, Claude, Copilot, etc.) é **permitido**, desde que **declarado explicitamente**, em conformidade com o referencial do MEC sobre IA na Educação e com a **Portaria CNPq nº 2.664/2026** *(Política de Integridade na Atividade Científica, de 11/03/2026)*.

Cada grupo **deve incluir um Apêndice** no Item 10 contendo:

* **a)** Quais partes do trabalho (código, escrita do texto, revisão) contaram com apoio de IAG;  
* **b)** Os *prompts* utilizados, formatados e citados de acordo com as recomendações das normas ABNT;  
* **c)** Declaração explícita de que a **responsabilidade intelectual final pelo código e análises é exclusiva dos integrantes**, tratando a IA como ferramenta de suporte e nunca como autora.

> 🚨 **Atenção:** O uso não declarado de IAG ou a entrega de código/relatório cuja autoria não possa ser defendida oralmente pelos integrantes durante a apresentação será considerado **violação de integridade acadêmica**.

## **🎤 Diretrizes para a Apresentação (07/10)**

* **Conteúdo do Slide Deck:** Apresentar todos os tópicos abordados do **Item 4 ao Item 10** do relatório final.  
* **Avaliação Individual:** A nota da apresentação é **individual**. Qualquer integrante pode ser solicitado a explicar qualquer parte do código ou da teoria, independentemente de quem a escreveu.  
* **Demonstração Prática:** Estejam preparados para executar **consultas improvisadas** na hora, além de fornecer a **justificativa oral** para todas as escolhas de projeto (como fórmula de similaridade adotada, expansão da lista de stop-words, forma de normalização do ![][image1], etc.).

[image1]: <data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAaCAYAAACkVDyJAAABmUlEQVR4Xu2UO0vEQBSFE1YrFXzFYF6TBxi2sgh2giAW+gOs7LXWxp9gYyWCjSBipdgKFv4DwdZqQSwstxDXRnA9N5mJkzDJBkvJgQOTk2/uJHMn0bRW/0KMsXW453nea0NvgN+Chw08AJ/I6+kIT33fv4Z9uuYPcQ5/I9rkXAfjNWQvruuuiMnILpF9oeiqyLg6yHZx7w3u5mkQBCYm3URRtCAygDOAHqm44zi2yA3DmER2Zdu2U+J6VEdwQpZlzePeHbyYh7Q9WHBf4ughlgG9w7e4HBM5X+AkjuOpGk43TXOCBrQg5pzRg4oaVGQ7DMOlPNDS7dyBh7h3KOd4sznaJu1321MOPhAMxl34mBi8yDTVF3ylWNY/VV8KUnDUtyMstFcA61TVv7Ikjt6QDsYHH3/Kh2qkUCjBpAEr9a8sFcey7Xyg3pXwarGK/pWl4viCaf8ktFY6Clyw0f1TckmSjIsT2kh/6J/y+2ssVV9UasopRd8gJj7BfVb8B9Kpe6bigvWyfyidSJnrI7/HjszKdVu1atUq1w90eZVtRbHUFAAAAABJRU5ErkJggg==>