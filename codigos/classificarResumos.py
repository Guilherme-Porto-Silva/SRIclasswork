stop_words = []

with open("stopwords.txt", "r", encoding="ANSI") as f:
    
    for linha in f:
        
        stop_words.append(linha.strip())



def palavrasSignificativas (resumo):
    
    """
    Recebe um resumo e retorna uma lista de palavras significativas.
    
    Palavras significativas são aquelas que não são stopwords e têm mais de 3 caracteres.
    """

    palavras = resumo.lower().split()

    palavras_significativas = [palavra for palavra in palavras if palavra not in stop_words and len(palavra) > 3]

    return palavras_significativas



def contabilizar (palavras_significativas):
    
    """
    Recebe uma lista de palavras significativas e retorna um dicionário com a contagem de cada palavra.
    """
    
    chaves = []
    
    ja_trabalhados = []
    
    for termo_trabalhado in palavras_significativas:
        
        quantas = 0
        
        for palavra in palavras_significativas:
            
            if palavra == termo_trabalhado:
                
                quantas += 1
        
        if termo_trabalhado not in ja_trabalhados:
            
            chaves.append(f"<{termo_trabalhado}, {quantas}>")
            
            ja_trabalhados.append(termo_trabalhado)

    return chaves



def escrever (numero, chaves):
    
    """
    Escreve um arquivo com a contagem de cada palavra.
    """
    
    titulo = f"\n\nResumo {numero}:\n\n"
    
    with open(f"resumos/resumo_{numero}_palavras_significativas.txt", "w", encoding="utf-8") as f:
        
        f.write(titulo)
        
        f.write(f"<resumo{numero}, {len(chaves)}>\n\n")
        
        for chave in chaves:
            
            f.write(chave + "\n\n")



resumo1 = "Este artigo apresenta algumas vantagens das metodologias ágeis para desenvolver software em relação às metodologias tradicionais. Em particular são apresentadas as principais características e as práticas das metodologias ágeis Extreme Programming e Scrum. Também são feitas comparações com as metodologias tradicionais, procurando enfatizar que as metodologias ágeis são baseadas em pessoas e não em processos e planejamentos. Finalmente são apresentadas as principais vantagens e desvantagens da Extreme Programming e da Scrum. Também são apresentados alguns resultados empíricos do uso de metodologias ágeis."

resumo2 = "O desenvolvimento de software é uma atividade muito complexa. Devido a essa complexidade a Engenharia de Software foi criada. Ela tem por objetivo aumentar a produtividade no desenvolvimento e melhorar a qualidade do produto gerado. Diversas metodologias e práticas surgiram com a intenção de direcionar o desenvolvimento. Inicialmente vieram as metodologias chamadas tradicionais: cascata, prototipação, incremental. Elas traziam junto consigo muita rigidez e cada passo delas gerava diversos artefatos e documentações, mesmo assim os resultados entregues pelos projetos geravam resultados abaixo do esperado. Com isso, metodologias ágeis surgiram com a proposta de fornecer agilidade de resposta e flexibilidade de adaptação no desenvolvimento trazendo um diferencial competitivo através de velocidade e qualidade dos resultados. Esta revisão técnica tem como objetivo apresentar um mecanismo para desenvolvimento ágil de software de modo a atender com mais rapidez e qualidade, reduzindo dessa forma o consumo desnecessário de recursos, auxiliando na promoção de um sistema sustentável. Compreendeu-se que essas técnicas ágeis trouxeram uma grande evolução na troca de experiência, comunicação, transmissão de conhecimento, confiança das pessoas, confiança do cliente. E isso faz com que a produtividade da equipe cresça e também faz com que a satisfação do cliente seja maior."

resumo3 = "Este artigo faz uma comparação entre as metodologias tradicionais para desenvolvimento de software e as metodologias ágeis. Em particular é feita a comparação da Extreme Programming (XP), uma metodologia ágil muito usada, e o modelo Clássico ou Sequencial. As práticas da XP são apresentadas, enfatizando que suas características são ideais para projetos que devem ter um desenvolvimento rápido e que podem ter requisitos alterados constantemente pelos clientes."

resumo4 = "Este artigo foi fomentado em estudos bibliográficos sobre metodologias ágil e tradicional. Com objetivo de apresentar os principais problemas encontrados no século XXI, no que diz respeito ao desenvolvimento de projetos de software e as metodologias disponíveis. Serão apresentadas as formas de trabalho das metodologias tradicional e  a  ferramenta SCRUM, onde  seus valores e práticas serão apresentados de modo a identificar e justificar suas principais diferenças. Demonstrar um quadro comparativo entre algumas metodologias de desenvolvimento ágil e tradicional, os quais serão comparados e analisados entre os processos das metodologias ágeis em relação às metodologias tradicionais. Com intuito de proporcionar condições favoráveis para avaliação e escolha da  metodologia que atenda as necessidades dos clientes no desenvolvimento de software."

resumo5 = "Este trabalho apresenta um caso de uso de implantação das metodologias ágeis de desenvolvimento, Scrum e Extreme Programming (XP), e ressalta tal abordagem como uma alternativa para pequenas empresas de Tecnologia da Informação (TI). Tal abordagem se faz necessária em função da falta de processos formais de desenvolvimento em empresas deste perfil, o que acarreta certos problemas à construção de softwares. O objetivo é viabilizar a solução para a falta de um modelo de desenvolvimento através da implantação das referidas metodologias. Este propósito será conseguido mediante o levantamento dos conceitos a volta do tema e a apresentação de como implantar estas metodologias. Ao final, este estudo evidencia que Scrum e XP podem contribuir para a organização e a formalização do processo de desenvolvimento de software utilizado em pequenas empresas de TI, além de favorecê-las com um ganho de produtividade."

resumo6 = "O objetivo principal deste estudo é o desenvolvimento de um modelo de avaliação do grau de favorabilidade na adoção de práticas de metodologias ágeis em organizações onde predomina o uso de práticas de metodologias tradicionais no desenvolvimento de seus softwares. Para alcançar esse objetivo foram revisados os conceitos teóricos relacionados às metodologias ágeis, destacando as suas práticas em confronto com aquelas das metodologias tradicionais. A partir dessa revisão, elaborou-se um instrumento de pesquisa submetido sob a estratégia de pesquisa survey junto aos especialistas em desenvolvimento de software de um banco de varejo brasileiro, reconhecido pela expressividade do seu volume de ativos e operações e, também, pela sua abrangência transnacional de atuação. Os dados quantitativos oriundos das questões fechadas do instrumento de pesquisa foram analisados por meio de duas técnicas estatísticas. A primeira, a técnica multivariada de análise fatorial exploratória, aplicada na validação da estrutura das perspectivas relacionadas às práticas ágeis do modelo de avaliação proposto. A segunda, a técnica univariada de análise de frequência das respostas, conforme distribuição das mesmas. Os dados qualitativos oriundos da questão aberta do instrumento de pesquisa foram analisados por meio da técnica de análise de conteúdo qualitativa temática, quando foram evidenciadas as perspectivas das práticas ágeis do modelo e a distribuição das frequências das respostas, oriundas da análise quantitativa. Como resultados do estudo destacam-se o desenvolvimento do modelo de avaliação do grau de favorabilidade na adoção de práticas de metodologias ágeis no contexto de estudo proposto, sua validação estatística e avaliação daquele grau de favorabilidade na organização sob estudo. Uma limitação deste estudo reside no fato desse modelo ter sido desenvolvido com base numa única organização bancária, não permitindo generalização externa dos resultados da análise das frequências das respostas, embora propicie a generalização teórica presente no modelo, que poderá ser aplicado em outras organizações com predomínio do uso de práticas de metodologias tradicionais no desenvolvimento de software."

resumo7 = "Em virtude da competividade no mercado de desenvolvimento de software, ao longo das últimas décadas, os métodos de desenvolvimento de software vêm a cada nova geração se especializando e tornando os processos cada vez mais eficientes. Entretanto, nenhuma metodologia foca explicitamente no Design Centrado no Usuário, o que implica em insatisfação do cliente pela falta de adequação as suas necessidades, retrabalho, deficiência de requisitos que atendam ao projeto e outros problemas, que acabam afetando os custos e cronograma das equipes de desenvolvimento. Em decorrência dessas vulnerabilidades o presente artigo tem como finalidade correlacionar os modelos ágeis com técnicas de usabilidade e Design Centrado no usuário para gerar satisfação aos clientes. A revisão bibliográfica sistemática abordada neste artigo propõe-se a abordar artigos e teses acadêmicas referentes ao Design Centrado no Usuário, Metodologias Ágeis e Usabilidade, fazendo a convergência dos benefícios dessas metodologias, assim como a correlação entre elas. Como resultados foram encontradas vulnerabilidades nas metodologias ágeis em relação a comunicação entre usuários e as partes interessadas do projeto e que podem ser sanadas com a utilização de uma eficiente análise de requisitos aliado ao uso de outras ferramentas direcionadas ao design centrado no usuário."

resumo8 = "O desenvolvimento de objetos de aprendizagem exige modelos instrucionais e de esenvolvimento flexíveis, por se tratar de uma categoria de software com um conjunto de requisitos bastante específicos e demandas tecnológicas singulares. O uso de metodologias ágeis para o desenvolvimento de objetos de aprendizagem pode facilitar esse processo permitindo a modelagem das funcionalidades baseados nos requisitos de comportamento do aluno. O presente artigo tem como objetivo discorrer sobre uma experiência no de desenvolvimento de objetos de aprendizagem, baseado em metodologias ágeis e interface baseada em scaffoldings."

resumo9 = " Metodologias ágeis são utilizadas em todos os tipos de empresas de desenvolvimento de software, incluindo startups. As startups não seguem processos de forma rigorosa ou de maneira completa. Desta forma, é necessário analisar como as startups definem e executam as práticas descritas nas metodologias ágeis. Este trabalho de conclusão de curso visa analisar como membros de startups utilizam as metodologias ágeis na prática. Para isso, realizou-se uma pesquisa de opinião (survey) que obteve 26 respostas válidas avaliadas de pessoas que atuam ou atuaram no ramo de startups, junto com a realização de seis entrevistas com pessoas do meio. Os resultados de ambos foram analisados e relacionados e mostram que startups não seguem recomendações das metodologias ágeis de forma rigorosa, utilizam metodologias ágeis em conjunto e possuem algumas condições favoráveis que influenciam se vão seguir as práticas das metodologias ágeis ou não. Também identificou-se que essas organizações não se preocupam com a etapa de documentação e realizam garantia de qualidade do produto através de conversas com os clientes e feedbacks fornecidos pelos mesmos."

resumo10 = "A UML é um modelo de documentação bastante estudado nos cursos superiores da área de computação, mas as metodologias ágeis ocupam grande parte do mercado atual e elas em seu manifesto pregam por simplicidade, rapidez, entre outras características que vão contra processos minuciosos de documentação. Esse trabalho apresenta os resultados obtidos ao se aplicar um questionário em várias empresas de desenvolvimento de software no estado de Minas Gerias com intenção de descobrir a aplicação da UML no contexto dos processos ágeis de desenvolvimento de software. Os resultados estatísticos obtidos apontam a necessidade de revisão em vários paradigmas da Engenharia de Software."

resumo11 = "A crescente demanda por infraestrutura hospitalar de qualidade, aliada a desafios como prazos reduzidos, restrições orçamentárias e situações emergenciais, impulsiona a busca por métodos mais eficazes de gerenciamento de projetos no setor da saúde. Nesse contexto, as metodologias ágeis, originadas no desenvolvimento de software e fundamentadas no Manifesto Ágil, vêm se destacando pela capacidade de promover entregas incrementais, flexibilidade e comunicação contínua entre equipes multidisciplinares. Práticas como Scrum, Kanban e Lean se mostram adequadas para atender às constantes mudanças de requisitos e às necessidades específicas dos ambientes hospitalares, oferecendo respostas rápidas e eficientes frente a imprevistos, como os observados durante a pandemia de COVID-19. O presente estudo analisou, por meio de revisão integrativa, a aplicação dessas metodologias no gerenciamento de projetos hospitalares. Como resultado, demonstrou que sua adoção pode otimizar a execução de obras, reduzir custos, agilizar prazos e garantir maior qualidade nas entregas, evidenciando que as metodologias ágeis promovem maior eficiência na execução de projetos hospitalares. Conclui-se que essas abordagens representam uma alternativa inovadora e estratégica para a modernização da gestão da infraestrutura em saúde pública."

resumo12 = "A proposta desse artigo é analisar criticamente as metodologias ágeis, presentes na produção de software. Com este objetivo, nos questionamos em que medida tal produção e formas de organização do trabalho reproduzem antigas formas de organização do trabalho, sobretudo, as taylor-fordistas e as toyotistas. Contrariamente as teses que apresentam a emergência do trabalho imaterial como um momento paradigmático de ruptura com a produção industrial, temos por objetivo debater em que medida o “novo”, presente nessas formas de organização do trabalho no século XXI, se configurariam como adaptações do taylor-fordismo e do toyotismo a uma nova fronteira produtiva pouco ou nada explorada pelo capital nos séculos XIX e XX, a produção imaterial."

resumo13 = "A implementação das metodologias ágeis tem sido um diferencial para as empresas que as adotam. Trata-se de metodologias que reduzem os custos de uma empresa, melhoram a comunicação entre as equipes de desenvolvimento e gestão, aceleram os resultados e as entregas de produtos, e promovem benefícios como aumento da produtividade das equipes, maior transparência nos processos, redução de retrabalho, entregas contínuas de valor ao cliente, além de fortalecerem a colaboração e a capacidade de adaptação às mudanças. No entanto, pequenas empresas podem enfrentar muitos desafios ao tentar implementá-las, pois possuem limitações, como recursos escassos e dificuldade no treinamento e capacitação das equipes. Este artigo tem como objetivo analisar as vantagens dessas metodologias e quais são as dificuldades enfrentadas pelas pequenas empresas de software quando estão implementando-as nas fases iniciais e benefícios quando implementadas com sucesso. A metodologia adotada para a realização deste artigo foi a pesquisa bibliográfica. A partir do material estudado, observou-se que as metodologias ágeis representam ferramentas altamente eficazes para promover a flexibilidade e a inovação nos processos organizacionais. Conclui-se que, quando corretamente implementadas e seguidas conforme os princípios do Manifesto Ágil citado neste artigo, as metodologias possibilitam às organizações se destacarem no âmbito competitivo."

resumo14 = "Esta Revisão Sistemática da Literatura (RSL) teve como objetivo identificar, recuperar e analisar as boas práticas descritas na produção científica relacionadas à gestão e ao desenvolvimento ágil de tecnologias, inovações e novos produtos de Tecnologia da Informação (TI). O panorama construído busca subsidiar gestores públicos de TI na tomada de decisão e no direcionamento estratégico do setor na utilização de metodologias ágeis. A motivação para o estudo está centrada nos desafios enfrentados pelos setores de TI na capacidade de manter, inovar e otimizar os processos internos. Este cenário de complexidade gerencial resulta no comprometimento da qualidade e na melhor alocação de recursos, em especial da equipe de TI. Tais desafios são particularmente críticos na área de TI. A adoção de metodologias ágeis é considerada um fator que favorece a realização de entregas em menor tempo e a geração de valor ao longo do processo. Além disso, o uso ágil proporciona maior capacidade de adaptação a requisitos em constante mudança e promove a qualidade dos sistemas entregues, principalmente em aspectos como facilidade de testes e rapidez na correção de falhas. Esta revisão contextualiza critérios de adoção utilizados para aplicação das metodologias ágeis sendo fatores essenciais para sustentar a execução eficaz dos processos ágeis e ainda observa se há adoção de critérios para utilização de ferramentas de IA na gestão e desenvolvimento de produtos de TI."

resumo15 = "O desenvolvimento de software tem evoluído significativamente nas últimas décadas, impulsionado pela necessidade de entregas mais rápidas, flexíveis e centradas no cliente. Nesse contexto, as metodologias ágeis emergem como alternativas aos modelos tradicionais de desenvolvimento, oferecendo abordagens interativas e colaborativas. Este artigo tem como objetivo analisar, por meio de uma revisão da literatura, o uso da metodologia ágil Scrum como uma alternativa eficiente no desenvolvimento de software. Para isso, foram selecionadas obras de referência em uma biblioteca virtual, utilizando os termos “Engenharia de Software”, “Metodologias para Desenvolvimento de Software” e “Scrum”. A fundamentação teórica contempla a evolução da engenharia de software, os princípios do Manifesto Ágil e o detalhamento dos papéis, artefatos e cerimônias do framework Scrum. Os resultados apontam que o Scrum contribui para uma maior organização das equipes, entrega contínua de valor e melhor gestão de projetos em ambientes dinâmicos. Conclui-se que sua adoção depende da compreensão de seus fundamentos e do preparo das equipes para mudanças culturais e estruturais e que, quando bem implementado, o Scrum proporciona maior controle sobre prazos, qualidade da entrega e alinhamento com os objetivos do cliente, sendo uma alternativa viável e cada vez mais adotada pelas equipes de desenvolvimento de software."

resumo16 = "Este artigo investiga a eficácia das metodologias ágeis em projetos de desenvolvimento de software e sua relação com o sucesso. O estudo aprofunda a compreensão das práticas e princípios fundamentais das metodologias ágeis, como o Manifesto Ágil e os 12 Princípios Ágeis. Além disso, a pesquisa analisa como diversos fatores, como o apoio executivo, a maturidade emocional das equipes, o envolvimento dos usuários, a otimização de recursos, a qualificação dos membros da equipe e outros elementos, impactam a taxa de sucesso de projetos ágeis. Também são investigados os obstáculos e desafios comuns que as organizações enfrentam ao implementar essas metodologias, incluindo a resistência à mudança e conflitos culturais. O trabalho enfatiza a relevância das metodologias ágeis na melhoria do desempenho em projetos de software e fornece diretrizes valiosas para organizações que buscam adotar ou aprimorar suas práticas ágeis. O estudo oferece uma visão abrangente do universo ágil, abordando suas vantagens e desafios, e apresenta recomendações práticas para aprimorar a implementação de abordagens ágeis nas empresas de desenvolvimento de software."

resumo17 = "O estudo em questão analisou os desafios e estratégias relacionadas à gestão de equipes ágeis em contextos remotos e híbridos na Engenharia de Software, considerando as dimensões humanas, gerenciais e técnicas. A pesquisa teve como propósito identificar e categorizar as principais dificuldades enfrentadas por equipes distribuídas, avaliar as estratégias propostas na literatura recente e compreender o impacto gerado pela cultura digital, da automação e da inteligência artificial (IA) sobre a prática da agilidade contemporânea. A metodologia utilizada baseou-se em uma Revisão Sistemática da Literatura (RSL), conduzida segundo o protocolo PRISMA adaptado, com busca nas bases Scopus, Scielo e Web of Science, abrangendo o período de 2015 a 2025. Foram selecionados trinta e cinco estudos que atenderam aos critérios de inclusão, contemplando tanto aspectos humanos (comunicação, liderança e engajamento) quanto técnicos (qualidade de software, DevOps, Integração e Entrega Contínuas — CI/CD). Os resultados evidenciaram que, na dimensão humana, os principais desafios estão associados à perda das interações presenciais, à dificuldade de manutenção da coesão e ao aumento do risco de esgotamento emocional (Burnout). Já na dimensão técnica, destacam-se as falhas nos pipelines (conjuntos de processos automatizados) de CI/CD, a morosidade em revisões assíncronas de código e a falta de maturidade na automação dos processos. As estratégias mais eficientes identificadas envolvem a implementação de uma cultura de confiança, a redefinição do papel da liderança com ênfase em autonomia e empatia, e a incorporação de tecnologias de automação e IA para otimização da gestão ágil. Conclui-se que a eficácia da gestão ágil em ambientes distribuídos depende de uma articulação equilibrada entre cultura organizacional, maturidade técnica e liderança empática."

resumo18 = "Esse artigo propõe uma abordagem de boas práticas utilizando métodos ágeis para gerenciar o procedimento de aquisição no contexto de empresas de desenvolvimento de software, baseado na área de processo Supplier Agreeement Management do CMMI-DEV e no processo de Aquisição do MRMPS-SW."

resumo19 = "Com o avanço das discussões sobre sustentabilidade na transição do século XX para o XXI, tornou-se essencial compreender como esses temas impactam a estratégia organizacional. Este estudo tem como objetivo analisar a aplicação da Matriz SWOT no campo da engenharia de sustentabilidade, destacando seu papel na identificação de oportunidades, ameaças, pontos fortes e pontos fracos em projetos sustentáveis. Para isso, realizou-se uma revisão sistemática e bibliométrica de publicações científicas no período de 2002 a 2022, abrangendo bases de dados como Web of Science, Scopus, SciELO e Google Acadêmico. Os resultados quantitativos evidenciam um crescimento significativo nas publicações sobre o tema, especialmente a partir de 2019. A análise qualitativa demonstrou a versatilidade da Matriz SWOT, frequentemente combinada com outras metodologias, para consolidar fatores críticos em diferentes áreas de pesquisa. A ferramenta mostrou-se relevante tanto em estudos qualitativos quanto quantitativos, sendo amplamente utilizada para embasar a formulação de estratégias voltadas à sustentabilidade. Conclui-se que a Matriz SWOT contribui de maneira significativa para a promoção de práticas sustentáveis, auxiliando empresas e instituições na adaptação de modelos econômicos e produtivos mais ecológicos e alinhados às demandas contemporâneas."

resumo20 = "Com o mundo da tecnologia em constante mudança, novos requisitos e alterações no modelo de negócio das empresas são solicitadas às equipes de desenvolvimento de software a cada instante, necessitando muita interação entre as pessoas e respostas rápidas para estas mudanças. Isto propiciou uma crescente adoção das metodologias ágeis de desenvolvimento de software, dentre elas destacando-se o framework Scrum, que tem como principais características, indivíduos e interações sobre processos e ferramentas, software funcionando sobre extensa documentação, colaboração dos clientes sobre negociação em contratos, respostas às mudanças sobre seguir um plano, características fundamentais para as organizações que buscam excelência no mercado da tecnologia da informação. Entretanto existem poucos softwares para desenvolvimento ágil no mercado e isso motivou o desenvolvimento de uma ferramenta customizada para a utilização do framework Scrum sendo denominada Software Colaborativo para Projetos Ágeis (SCPA). A ferramenta é voltada para equipes de desenvolvimento de softwares que buscam otimizar o tempo de gerenciamento e melhorar a qualidade dos produtos desenvolvidos. O SCPA permite fazer o controle efetivo de requisitos, chamados de histórias no contexto das metodologias ágeis, para o desenvolvimento de novos projetos de software e realizar suas devidas priorizações para cada iteração. Também inclui outros facilitadores, como a possibilidade de adicionar comentários, anexar arquivos, cadastrar e documentar testes de maneira individual para cada história, possibilitando ainda a opção de geração do gráfico de burndown, que é um indicador indispensável para equipes de desenvolvimento para monitoramento da produtividade, que poderá ser gerado a qualquer momento durante cada ciclo de desenvolvimento."



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
    
    escrever(resumo_numero, contabilizar(palavras))
