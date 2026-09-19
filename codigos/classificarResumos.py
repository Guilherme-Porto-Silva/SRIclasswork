def palavrasSignificativas(resumo):
    
    """
    Função que recebe um resumo e retorna uma lista de palavras significativas.
    Palavras significativas são aquelas que não são stopwords e têm mais de 3 caracteres.
    """
    
    import re
    
    from nltk.corpus import stopwords

    # Lista de stopwords em português
    stop_words = set(stopwords.words('portuguese'))

    # Tokenização do resumo
    palavras = re.findall(r'\b\w+\b', resumo.lower())

    # Filtrando palavras significativas
    palavras_significativas = [palavra for palavra in palavras if palavra not in stop_words and len(palavra) > 3]

    return palavras_significativas



resumo1 = ""

resumo2 = ""

resumo3 = ""

resumo4 = ""

resumo5 = ""

resumo6 = ""

resumo7 = ""

resumo8 = ""

resumo9 = ""

resumo10 = ""

resumo11 = ""

resumo12 = ""

resumo13 = ""

resumo14 = ""

resumo15 = ""

resumo16 = ""

resumo17 = ""

resumo18 = ""

resumo19 = ""

resumo20 = ""



resumo1_palavras_significativas = palavrasSignificativas(resumo1)

resumo2_palavras_significativas = palavrasSignificativas(resumo2)

resumo3_palavras_significativas = palavrasSignificativas(resumo3)

resumo4_palavras_significativas = palavrasSignificativas(resumo4)

resumo5_palavras_significativas = palavrasSignificativas(resumo5)

resumo6_palavras_significativas = palavrasSignificativas(resumo6)

resumo7_palavras_significativas = palavrasSignificativas(resumo7)

resumo8_palavras_significativas = palavrasSignificativas(resumo8)

resumo9_palavras_significativas = palavrasSignificativas(resumo9)

resumo10_palavras_significativas = palavrasSignificativas(resumo10)

resumo11_palavras_significativas = palavrasSignificativas(resumo11)

resumo12_palavras_significativas = palavrasSignificativas(resumo12)

resumo13_palavras_significativas = palavrasSignificativas(resumo13)

resumo14_palavras_significativas = palavrasSignificativas(resumo14)

resumo15_palavras_significativas = palavrasSignificativas(resumo15)

resumo16_palavras_significativas = palavrasSignificativas(resumo16)

resumo17_palavras_significativas = palavrasSignificativas(resumo17)

resumo18_palavras_significativas = palavrasSignificativas(resumo18)

resumo19_palavras_significativas = palavrasSignificativas(resumo19)

resumo20_palavras_significativas = palavrasSignificativas(resumo20)



todas_as_palavras_significativas = [resumo1_palavras_significativas, resumo2_palavras_significativas, resumo3_palavras_significativas, resumo4_palavras_significativas, resumo5_palavras_significativas, resumo6_palavras_significativas, resumo7_palavras_significativas, resumo8_palavras_significativas, resumo9_palavras_significativas, resumo10_palavras_significativas, resumo11_palavras_significativas, resumo12_palavras_significativas, resumo13_palavras_significativas, resumo14_palavras_significativas, resumo15_palavras_significativas, resumo16_palavras_significativas, resumo17_palavras_significativas, resumo18_palavras_significativas, resumo19_palavras_significativas, resumo20_palavras_significativas]

resumo_numero = 0

for palavras in todas_as_palavras_significativas:
    
    resumo_numero += 1
    
    with open("palavras_significativas.txt", "a", encoding="utf-8") as f:
        
        f.write(f"\n\nResumo {resumo_numero}:\n\n" + palavras)