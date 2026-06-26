const catalogoLivros = [
    { 
        id: 1, 
        titulo: "O Senhor dos Anéis: A Sociedade do Anel", 
        autor: "J.R.R. Tolkien", 
        genero: "Fantasia", 
        preco: 74.90, 
        capa: "https://m.media-amazon.com/images/S/pv-target-images/57c834bb94c8fb81db3408daaf5e21e115bc64ffc597ddc6a6eb6c3bbc798caf.jpg", 
        sinopse: "O volume inicial de O Senhor dos Anéis, lançado originalmente em julho de 1954, foi o primeiro grande épico de fantasia moderno, conquistando milhões de leitores e se tornando o padrão de referência para todas as outras obras do gênero até hoje.",
        ano: 1954,
        paginas: 436,
        estrelas: 5
    },
    { 
        id: 2, 
        titulo: "1984", 
        autor: "George Orwell", 
        genero: "Distopia", 
        preco: 34.90, 
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHkZS6OOzvnxmYi37qpQ1Z80SfXW6DeOSIg&s", 
        sinopse: "Publicado em 1949, o texto de Orwell nasceu destinado à polêmica. Traduzido em mais de sessenta países, virou minissérie, filmes, quadrinhos, mangás e até uma ópera.",
        ano: 1949,
        paginas: 336,
        estrelas: 4
    },
    { 
        id: 3, 
        titulo: "Dom Casmurro", 
        autor: "Machado de Assis", 
        genero: "Literatura", 
        preco: 24.90, 
        capa: "https://images.tcdn.com.br/img/img_prod/1271663/dom_casmurro_edicao_de_luxo_almofadada_89_1_038fb70c564eb50f71ea49f6027e827a.jpg", 
        sinopse: "Em Dom Casmurro, o narrador Bento Santiago retoma a infância que passou na Rua de Matacavalos e conta a história do amor",
        ano: 1899,
        paginas: 256,
        estrelas: 4 
    },
    { 
        id: 4, 
        titulo: "O Hobbit", 
        autor: "J.R.R. Tolkien", 
        genero: "Fantasia", 
        preco: 99.90, 
        capa: "https://m.media-amazon.com/images/I/71jcVMNlaIL._AC_UF1000,1000_QL80_.jpg", 
        sinopse: "Lançado em 1937, O Hobbit é um divisor de águas na literatura fantástica mundial. Quase 85 anos após a sua publicação, o livro que antecede os ocorridos em O Senhor dos Anéis continua arrebatando fãs de todas as idades.",
        ano: 1937,
        paginas: 310,
        estrelas: 5
    },
    { 
        id: 5, 
        titulo: "Admirável Mundo Novo", 
        autor: "Aldous Huxley", 
        genero: "Distopia", 
        preco: 69.90, 
        capa: "https://http2.mlstatic.com/D_NQ_NP_964069-MLB80051768932_102024-O.webp", 
        sinopse: "Uma sociedade inteiramente organizada segundo princípios científicos, na qual a mera menção das antiquadas palavras “pai” e “mãe” produzem repugnância.",
        ano: 1932,
        paginas: 312,
        estrelas: 4
    },
    { 
        id: 6, 
        titulo: "O Cortiço", 
        autor: "Aluísio Azevedo", 
        genero: "Literatura", 
        preco: 29.90, 
        capa: "https://m.media-amazon.com/images/I/91UuA2jnZDL._UF1000,1000_QL80_.jpg", 
        sinopse: "Pobreza, corrupção, injustiça, traição são elementos integram O cortiço, principal obra do Naturalismo brasileiro.",
        ano: 1890,
        paginas: 288,
        estrelas: 3
    },
    { 
        id: 7, 
        titulo: "Fahrenheit 451", 
        autor: "Ray Bradbury", 
        genero: "Distopia", 
        preco: 64.90, 
        capa: "https://m.media-amazon.com/images/I/714dogtM2dL._AC_UF1000,1000_QL80_.jpg", 
        sinopse: "Guy Montag é um bombeiro. Sua profissão é atear fogo nos livros. Em um mundo onde as pessoas vivem em função das telas e a literatura está ameaçada de extinção, os livros são objetos proibidos, e seus portadores são considerados criminosos.",
        ano: 1953,
        paginas: 216,
        estrelas: 5
    },
    { 
        id: 8, 
        titulo: "Duna", 
        autor: "Frank Herbert", 
        genero: "Ficção Científica", 
        preco: 72.13, 
        capa: "https://m.media-amazon.com/images/I/81zN7udGRUL.jpg", 
        sinopse: "A épica jornada de Paul Atreides no planeta desértico Arrakis.",
        ano: 1965,
        paginas: 680,
        estrelas: 5
    },
    {
        id: 9,
        titulo: "Authenticgames: A batalha da Torre",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 49.90,
        capa: "https://m.media-amazon.com/images/I/81D5LriGuWL._SL1500_.jpg",
        sinopse: "Um sequestro misterioso coloca o nosso herói AUTHENTICGAMES em uma grande enrascada, e ele vai precisar de ajuda para sair dessa.",
        ano: 2016,
        paginas: 112,
        estrelas: 5
    },
    {
        id: 10,
        titulo: "Authenticgames: A batalha contra Herobrine",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 49.90,
        capa: "https://m.media-amazon.com/images/I/91y8WC8ACTL._SL1500_.jpg",
        sinopse: "Depois de ser resgatado de um terrível sequestro, AUTHENTICGAMES está de volta para proteger a Vila Farmer. Mas antes ele precisará encarar uma nova aventura para recuperar sua espada de diamante.",
        ano: 2016,
        paginas: 112,
        estrelas: 5
    },
    {
        id: 11,
        titulo: "Authenticgames: A batalha Contra o Ender Dragon",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 49.90,
        capa: "https://m.media-amazon.com/images/I/81SEuYohRXL._SL1500_.jpg",
        sinopse: "No último livro da trilogia AuthenticGames, Builder, Nina e Authentic vão até a sombria dimensão do The End para enfrentar novos desafios e salvar o mundo da superfície das terríveis ameaças do Ender Dragon.",
        ano: 2017,
        paginas: 112,
        estrelas: 5
    },
    {
        id: 12,
        titulo: "Viagem à Alma Tricolor em 7 Epopeias",
        autor: "Léo Gerchmann",
        genero: "Crônica Esportiva",
        preco: 35.00,
        capa: "https://m.media-amazon.com/images/I/81qapBfiIwL._SL1500_.jpg",
        sinopse: "O livro que você tem em mãos é uma assumida ousadia. Pretende desvendar os escaninhos de uma paixão.",
        ano: 2016,
        paginas: 125,
        estrelas: 5
    },
    {
        id: 13,
        titulo: "Kit 2 Livros Dom Quixote - Tomo 1 e 2 - Edição Integral",
        autor: "Miguel de Cervantes",
        genero: "Romance",
        preco: 74.90,
        capa: "https://m.media-amazon.com/images/I/71Pdb+CCMVL._SL1500_.jpg",
        sinopse: "Dom Quixote é uma das maiores obras da literatura universal, um romance que transcende séculos e continua a encantar gerações. ",
        ano: 2024,
        paginas: 1152,
        estrelas: 4
    },
    {
        id: 14,
        titulo: "o rei de amarelo",
        autor: "Robert W. Chambers",
        genero: "Terror, Fantasia e Ficção",
        preco: 54.00,
        capa: "https://m.media-amazon.com/images/I/81ykCXocSOL._SL1500_.jpg",
        sinopse: "Obra-prima de Robert W. Chambers, O Rei de Amarelo é uma coletânea de contos de terror fantástico publicada originalmente em 1895 e considerada um marco do gênero.",
        ano: 2014,
        paginas: 256,
        estrelas: 4
    },
    {
        id: 15,
        titulo: "I Have No Mouth and I Must Scream: Stories",
        autor: "Harlan Ellison",
        genero: "Ficção Cientifica e Terror Psicológico",
        preco: 2064.32,
        capa: "https://m.media-amazon.com/images/I/91ew3HlZmXL._SL1500_.jpg",
        sinopse: "A história-título pós-apocalíptica, vencedora do prêmio Hugo, desta coletânea de sete contos e a história que encerra o volume, 'Pretty Maggie Moneyeyes.",
        ano: 2014,
        paginas: 162,
        estrelas: 4
    },
    {
        id: 16,
        titulo: "O diário perdido de Gravity falls",
        autor: "Alex Hirsch",
        genero: "Ficção",
        preco: 60.86,
        capa: "https://m.media-amazon.com/images/I/91OvTwFvWKL._SL1500_.jpg",
        sinopse: "Você possui em suas mãos o cobiçado diário do autor da série Gravity Falls , um tesouro de 288 páginas coloridas e sem dono, com segredos nunca antes revelados, monstros e mistérios da pacata cidade do Tivô Stan.",
        ano: 2020,
        paginas: 288,
        estrelas: 5
    },
    {
        id: 17,
        titulo: "Authenticgames: vivendo uma vida autêntica",
        autor: "Marco Túlio",
        genero: "Autobiografia",
        preco: 49.90,
        capa: "https://m.media-amazon.com/images/I/81qSgdApcTL._SL1500_.jpg",
        sinopse: "O mineiro Marco Túlio sempre foi apaixonado por games. Tão apaixonado que decidiu enfrentar a timidez e criar um canal no YouTube para falar dos jogos de que gostava. Com seu jeito simples e engraçado, Marco Túlio transformou o AuthenticGames em ponto de encontro para quase 4 milhões de crianças e adolescentes. É lá que eles trocam ideias, aprendem estratégias secretas sobre Minecraft e acompanham as séries exclusivas. Neste livro, os fãs vão saber como surgiu o projeto do canal, quem são os amigos da internet que o Authentic levou para a vida real e muito mais! Um dos youtubers mais amados do Brasil conta todos os seus segredos. Mais de 1 bilhão de visualizações!",
        ano: 2016,
        paginas: 160,
        estrelas: 5
    },
    {
        id: 18,
        titulo: "Authenticgames: vivendo uma vida autêntica 2",
        autor: "Marco Túlio",
        genero: "Autobiografia",
        preco: 49.90,
        capa: "https://m.media-amazon.com/images/I/91uJJGRyt3L._SL1500_.jpg",
        sinopse: "Marco Túlio está de volta para compartilhar com os maninhos e as maninhas mais um pouco de suas histórias e aventuras. Sim, porque a vida autêntica continua... E como continua! Com uma vida completamente diferente e cheia de mudanças",
        ano: 2018,
        paginas: 160,
        estrelas: 5
    },
    {
        id: 19,
        titulo: "Como Conversar com Seu Cachorro Sobre Homossexualidade e Comunismo",
        autor: "Alexander Blythe",
        genero: "Ficção Humorística e Sátira",
        preco: 5.99,
        capa: "https://m.media-amazon.com/images/I/71hTp3F2VQL._SL1500_.jpg",
        sinopse: "Você será guiado por um percurso singular, onde os diálogos habituais entre tutor e pet são transformados em conversas significativas sobre temas contemporâneos e sociais.",
        ano: 2024,
        paginas: 38,
        estrelas: 4
    },
    {
        id: 20,
        titulo: "Noites Brancas",
        autor: "Fiódor Dostoiévski",
        genero: "Romance",
        preco: 10.50,
        capa: "https://m.media-amazon.com/images/I/71F-Uf20+UL._SY425_.jpg",
        sinopse: "Noites Brancas é um romance de Fiódor Dostoiévski publicado em 1848. A obra é uma narrativa curta, mas intensa, que explora temas como solidão, amor e a busca por conexão humana.",
        ano: 1848,
        paginas: 80,
        estrelas: 5
    
    },
    {
        id: 21,
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        genero: "Fábula e Filosofia",
        preco: 13.0,
        capa: "https://m.media-amazon.com/images/I/81QluJ4QXyL._SY425_.jpg",
        sinopse: "O Pequeno Príncipe é uma obra literária escrita por Antoine de Saint-Exupéry, publicada pela primeira vez em 1943. A história é narrada por um piloto que encontra um pequeno príncipe em um deserto, e juntos eles exploram temas profundos sobre a vida, o amor e a natureza humana.",
        ano: 1943,
        paginas: 96,
        estrelas: 5 
    },
    {
        id: 22,
        titulo: "Fundamentos do xadrez",
        autor: "José Raul Capablanca",
        genero: "Esporte e Estratégia",
        preco: 59.90,
        capa: "https://m.media-amazon.com/images/I/71eTThl+2oL._SY466_.jpg",
        sinopse: "Um guia completo para aprender os fundamentos do xadrez.",
        ano: 1921,
        paginas: 224,
        estrelas: 4
     },
     {
        id: 23,
        titulo: "Minecraft: Guia Oficial de Construção",
        autor: "Mojang AB",
        genero: "Jogo e Criatividade",
        preco: 50.50,
        capa: "https://m.media-amazon.com/images/I/91e3bHYjzVL._SL1500_.jpg",
        sinopse: "Um guia completo para criar e construir em Minecraft.",
        ano: 2015,
        paginas: 98,
        estrelas: 5
     },
     {
        id: 24,
        titulo: "Minecraft: Guia de sobrevivência",
        autor: "Mojang AB",
        genero: "Jogo e Criatividade",
        preco: 50.50,
        capa: "https://m.media-amazon.com/images/I/81gxOMBz6yL._SY342_.jpg",
        sinopse: "Um guia completo para sobreviver e prosperar em Minecraft.",
        ano: 2015,
        paginas: 96,
        estrelas: 5
     },
     {
        id: 25,
        titulo: "Minecraft: Guia de Redstone",
        autor: "Mojang AB",
        genero: "Jogo e Criatividade",
        preco: 50.50,
        capa: "https://m.media-amazon.com/images/I/81CiAC6o7kL._SL1500_.jpg",
        sinopse: "Um guia completo para dominar a Redstone em Minecraft.",
        ano: 2015,
        paginas: 96,
        estrelas: 5
     },
     {
        id: 26,
        titulo: "Minecraft: Guia de combate",
        autor: "Mojang AB",
        genero: "Jogo e Criatividade",
        preco: 50.50,
        capa: "https://m.media-amazon.com/images/I/91WDsyUPUQL._SY425_.jpg",
        sinopse: "Um guia completo para explorar o mundo de Minecraft.",
        ano: 2015,
        paginas: 96,
        estrelas: 5
     },
     {
        id: 27,
        titulo: "Authenticgames:Namorada perfeita",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 33.90,
        capa: "https://m.media-amazon.com/images/I/61AS+uj5HdS._SY425_.jpg",
        sinopse: "Authentic, Lydia, Spok, Jazz e Cauê estão muito animados para a viagem que a escola organizou naquele ano. Eles vão para uma ilha fazer um estudo de campo do que estavam aprendendo nas aulas. Eles nem imaginam, porém, que vão viver uma das maiores aventuras de suas vidas! No momento em que o Shake, o cachorro de estimação do Authentic, sai correndo para dentro da floresta, ele e a Lydia vão atrás para salvá-lo. Como eles conseguirão sair dessa?",
        ano: 2016,
        paginas: 80,
        estrelas: 5
     },
     {
        id: 28,
        titulo: "Authenticgames: Duelo reverso",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 33.90,
        capa: "https://m.media-amazon.com/images/I/71dS4TagWPL._SL1500_.jpg",
        sinopse: "O AuthenticGames e seus amigos estão de volta para mais uma aventura! Dessa vez, eles vão enfrentar um desafio ainda maior: um duelo reverso que vai testar suas habilidades e coragem. Prepare-se para muita ação, diversão e surpresas nesse novo livro da série AuthenticGames!",
        ano: 2020,
        paginas: 48,
        estrelas: 5
     },
     {
        id: 29,
        titulo: "Authenticgames: Aventura Jurássica",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 33.90,
        capa: "https://m.media-amazon.com/images/I/71vwlJfSLCL._SY425_.jpg",
        sinopse: "O AuthenticGames e seus amigos estão de volta para mais uma aventura! Dessa vez, eles vão enfrentar um desafio ainda maior: uma aventura jurássica que vai testar suas habilidades e coragem. Prepare-se para muita ação, diversão e surpresas nesse novo livro da série AuthenticGames!",
        ano: 2020,
        paginas: 48,
        estrelas: 5
     },
     {
        id: 30,
        titulo: "Authenticgames: Authenticgames: Um show muito louco",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 33.90,
        capa: "https://m.media-amazon.com/images/I/71P-XfVmUYL._SL1500_.jpg",
        sinopse: "O AuthenticGames e seus amigos estão de volta para mais uma aventura! Dessa vez, eles vão enfrentar um desafio ainda maior: um show muito louco que vai testar suas habilidades e coragem. Prepare-se para muita ação, diversão e surpresas nesse novo livro da série AuthenticGames!",
        ano: 2020,
        paginas: 48,
        estrelas: 5
     },
     {
        id: 31,
        titulo: "Authenticgames: Operação resgate",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 33.90,
        capa: "https://m.media-amazon.com/images/I/71y9x8QfHSL._SY425_.jpg",
        sinopse: "O AuthenticGames e seus amigos estão de volta para mais uma aventura! Dessa vez, eles vão enfrentar um desafio ainda maior: uma operação de resgate que vai testar suas habilidades e coragem. Prepare-se para muita ação, diversão e surpresas nesse novo livro da série AuthenticGames!",
        ano: 2020,
        paginas: 48,
        estrelas: 5
     },
     {
        id: 32,
        titulo: "Authenticgames: Aventura no espaço",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 33.90,
        capa: "https://m.media-amazon.com/images/I/81zSimJfSZL._SY466_.jpg",
        sinopse: "O AuthenticGames e seus amigos estão de volta para mais uma aventura! Dessa vez, eles vão enfrentar um desafio ainda maior: uma aventura no espaço que vai testar suas habilidades e coragem. Prepare-se para muita ação, diversão e surpresas nesse novo livro da série AuthenticGames!",
        ano: 2020,
        paginas: 48,
        estrelas: 5
     },
     {
        id: 33,
        titulo: "Authenticgames: Lendas de acampamento",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 33.90,
        capa: "https://m.media-amazon.com/images/I/81jy4xNWBIL._SY466_.jpg",
        sinopse: "O AuthenticGames e seus amigos estão de volta para mais uma aventura! Dessa vez, eles vão enfrentar um desafio ainda maior: lendas de acampamento que vão testar suas habilidades e coragem. Prepare-se para muita ação, diversão e surpresas nesse novo livro da série AuthenticGames!",
        ano: 2020,
        paginas: 48,
        estrelas: 5
    },
    {
        id: 34,
        titulo: "Authenticgames:O gol da vitória",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 33.90,
        capa: "https://m.media-amazon.com/images/I/810BKO+Sf9L._SY466_.jpg",
        sinopse: "O AuthenticGames e seus amigos estão de volta para mais uma aventura! Dessa vez, eles vão enfrentar um desafio ainda maior: o gol da vitória que vai testar suas habilidades e coragem. Prepare-se para muita ação, diversão e surpresas nesse novo livro da série AuthenticGames!",
        ano: 2020,
        paginas: 48,
        estrelas: 5
    },
    {
        id: 35,
        titulo: "Authenticgames- Tesouro Perdido",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 33.90,
        capa: "https://m.media-amazon.com/images/I/81jJ9sdyblL._SY466_.jpg",
        sinopse: "O AuthenticGames e seus amigos estão de volta para mais uma aventura! Dessa vez, eles vão enfrentar um desafio ainda maior: o tesouro perdido que vai testar suas habilidades e coragem. Prepare-se para muita ação, diversão e surpresas nesse novo livro da série AuthenticGames!",
        ano: 2020,
        paginas: 48,
        estrelas: 5
    },
    {
        id: 36,
        titulo: "Authenticgames: Super-heróis de verdade",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 33.90,
        capa: "https://m.media-amazon.com/images/I/81sgypBKSOL._SL1500_.jpg",
        sinopse: "O AuthenticGames e seus amigos estão de volta para mais uma aventura! Dessa vez, eles vão enfrentar um desafio ainda maior: os super-heróis de verdade que vão testar suas habilidades e coragem. Prepare-se para muita ação, diversão e surpresas nesse novo livro da série AuthenticGames!",
        ano: 2020,
        paginas: 48,
        estrelas: 5
    },
    {
        id: 37,
        titulo: "Authenticgames: Duelo sobre rodas",
        autor: "Marco Túlio",
        genero: "ficção de ação e aventura",
        preco: 33.90,
        capa: "https://m.media-amazon.com/images/I/816aoaoDOrL._SY466_.jpg",
        sinopse: "O AuthenticGames e seus amigos estão de volta para mais uma aventura! Dessa vez, eles vão enfrentar um desafio ainda maior: o duelo sobre rodas que vai testar suas habilidades e coragem. Prepare-se para muita ação, diversão e surpresas nesse novo livro da série AuthenticGames!",
        ano: 2020,
        paginas: 48,
        estrelas: 5
    },
    {
        id: 38,
        titulo: "A fúria dos mobs: 1",
        autor: "Spok",
        genero: "ficção de ação e aventura",
        preco: 25.90,
        capa: "https://m.media-amazon.com/images/I/81OSY3bKtvL._SY466_.jpg",
        sinopse: "Spok acordou no mundo fantástico de Minecraft. O susto de estar numa dimensão toda quadrada e esquisita não é tudo… Logo Spok irá encontrar um bando de monstros terríveis que querem acabar com ele. Mas ele não está só. Neste surpreendente “A fúria dos Mobs” ele conta com seus amigos Pac, Mike, Authentic, Toddynho, Moonkase, Cauê, Likea, Nofaxu, Malena, Jabuti e Jazz. Todos são personagens e todos correm dos inimigos Pedro e Maya, a aranha, entre outros seres aterrorizantes. E tem uma coisa ainda pior! Algo muito estranho está acontecendo com esses monstros, que sempre foram meio abobalhados… Eles não querer acabar só com Spok e seus amigos, e com uns poucos aldeões indefesos. Eles querem aprisionar todos os seus migos numa fortaleza sombria do Nether. Para sempre! Eles querem o mundo de Minecraft só para eles. Mas os Mobs não vão conseguir isso tão fácil. Numa pequena aldeia, onde todos os amigos de Spok moram, eles vão resistir e lutar contra esse terrível exército. É tudo ou nada! Embarque nessa aventura eletrizante",
        ano: 2016,
        paginas: 148,
        estrelas: 5
    },
    {
        id: 39,
        titulo: "A fúria dos mobs 2: A grande batalha no Nether",
        autor: "Spok",
        genero: "ficção de ação e aventura",
        preco: 25.90,
        capa: "https://m.media-amazon.com/images/I/91OMIDAvrWL._SY466_.jpg",
        sinopse: "Spok acordou no mundo fantástico de Minecraft. O susto de estar numa dimensão toda quadrada e esquisita não é tudo… Logo Spok irá encontrar um bando de monstros terríveis que querem acabar com ele. Mas ele não está só. Neste surpreendente “A fúria dos Mobs” ele conta com seus amigos Pac, Mike, Authentic, Toddynho, Moonkase, Cauê, Likea, Nofaxu, Malena, Jabuti e Jazz. Todos são personagens e todos correm dos inimigos Pedro e Maya, a aranha, entre outros seres aterrorizantes. E tem uma coisa ainda pior! Algo muito estranho está acontecendo com esses monstros, que sempre foram meio abobalhados… Eles não querer acabar só com Spok e seus amigos, e com uns poucos aldeões indefesos. Eles querem aprisionar todos os seus migos numa fortaleza sombria do Nether. Para sempre! Eles querem o mundo de Minecraft só para eles. Mas os Mobs não vão conseguir isso tão fácil. Numa pequena aldeia, onde todos os amigos de Spok moram, eles vão resistir e lutar contra esse terrível exército. É tudo ou nada! Embarque nessa aventura eletrizante",
        ano: 2018,
        paginas: 148,
        estrelas: 5
    },
    {
        id: 40,
        titulo: "Spok: Em busca do tesouro perdido",
        autor: "Spok",
        genero: "ficção de ação e aventura",
        preco: 25.90,
        capa: "https://m.media-amazon.com/images/I/51iFlRXO5rL._SY445_SX342_ML2_.jpg",
        sinopse: "  Era mais um dia tranquilo na vida de Spok até que ele descobriu uma novidade irada: a profecia da Armadura Sagrada. De acordo com a lenda, somente um herói cheio de virtudes é capaz de vesti-la. Com a ajuda do mapa embaralhado, que apenas nosso herói Spok consegue decifrar, ele decide partir em busca da armadura e derrotar o malvado bruxo Baltazar que deseja dominar o mundo. EM BUSCA DO TESOURO PERDIDO é primeiro livro da trilogia A profecia de Spok. A história é cheia de aventuras, desafios e surpresas que vão prender a atenção do leitor do início ao fim. Com uma narrativa envolvente e personagens cativantes, este livro é perfeito para quem gosta de ação, fantasia e emoção. Prepare-se para embarcar em uma jornada épica com Spok e seus amigos em busca do tesouro perdido!",
        ano: 2017,
        paginas: 96,
        estrelas: 5
    },
    {
        id: 41,
        titulo: "De volta ao jogo: Uma Aventura Não Oficial De Minecraft",
        autor: "RezendeEvil",
        genero: "ficção de ação e aventura",
        preco: 25.90,
        capa: "https://m.media-amazon.com/images/I/81d8WWA0PfS._SL1500_.jpg",
        sinopse: "De volta ao jogo é uma aventura não oficial de Minecraft, escrita por RezendeEvil. A história segue o personagem principal, que é transportado para o mundo de Minecraft e deve enfrentar desafios e inimigos para sobreviver e encontrar uma maneira de voltar para casa.",
        ano: 2016,
        paginas: 128,
        estrelas: 5
    },
    {
        id: 42,
        titulo: "Dois Mundos, Um Herói: Uma Aventura não Oficial de Minecraft",
        autor: "RezendeEvil",
        genero: "ficção de ação e aventura",
        preco: 25.90,
        capa: "https://m.media-amazon.com/images/I/81ro4gHt3hL._SY466_.jpg",
        sinopse: "Dois Mundos, Um Herói é uma aventura não oficial de Minecraft, escrita por RezendeEvil. A história segue o personagem principal, que é transportado para o mundo de Minecraft e deve enfrentar desafios e inimigos para sobreviver e encontrar uma maneira de voltar para casa.",
        ano: 2015,
        paginas: 144,
        estrelas: 5
    },
    {
        id: 43,
        titulo: "Jogada final: Uma aventura não oficial de Minecraft",
        autor: "RezendeEvil",
        genero: "ficção de ação e aventura",
        preco: 25.90,
        capa: "https://m.media-amazon.com/images/I/81JFMtY4iPL._SY466_.jpg",
        sinopse: "Jogada final é uma aventura não oficial de Minecraft, escrita por RezendeEvil. A história segue o personagem principal, que é transportado para o mundo de Minecraft e deve enfrentar desafios e inimigos para sobreviver e encontrar uma maneira de voltar para casa.",
        ano: 2016,
        paginas: 168,
        estrelas: 5
    }
];
let carrinho = [];
let livroSelecionadoId = null;
let usuarioLogado = null; 

document.addEventListener("DOMContentLoaded", () => {
    renderizarVitrine(catalogoLivros);
});

function mostrarDetalhes(id) {
    livroSelecionadoId = id;
    const livro = catalogoLivros.find(l => l.id === id);
    if (!livro) return;

    document.getElementById("modal-capa").src = livro.capa;
    document.getElementById("modal-genero").innerText = livro.genero;
    document.getElementById("modal-titulo").innerText = livro.titulo;
    document.getElementById("modal-autor").innerText = `Por: ${livro.autor}`;
    document.getElementById("modal-sinopse").innerText = livro.sinopse;
    document.getElementById("modal-preco").innerText = `R$ ${livro.preco.toFixed(2)}`;

    document.getElementById("modal-btn-adicionar").onclick = () => { adicionarAoCarrinho(id); };
    renderizarEstrelasInterativas(livro.estrelas);
    document.getElementById("modal-detalhes").classList.remove("hidden");
}

function fecharModal() {
    document.getElementById("modal-detalhes").classList.add("hidden");
}

function renderizarEstrelasInterativas(notaAtual) {
    const container = document.getElementById("modal-estrelas-interativas");
    container.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        const btn = document.createElement("button");
        btn.innerHTML = i <= notaAtual ? "★" : "☆";
        btn.className = `transition duration-150 transform active:scale-95 cursor-pointer ${i <= notaAtual ? 'text-yellow-500 font-bold' : 'text-gray-300'}`;
        btn.onclick = () => avaliarLivro(livroSelecionadoId, i);
        container.appendChild(btn);
    }
}

function avaliarLivro(id, novaNota) {
    const livro = catalogoLivros.find(l => l.id === id);
    if (livro) {
        livro.estrelas = novaNota;
        renderizarEstrelasInterativas(novaNota);
        renderizarVitrine(catalogoLivros);
    }
}

function gerarEstrelasHtml(nota) {
    let html = '<div class="flex text-yellow-500 text-xs my-1">';
    for (let i = 1; i <= 5; i++) { html += i <= nota ? '★' : '☆'; }
    return html + '</div>';
}

function renderizarVitrine(lista) {
    const container = document.getElementById("vitrine-livros");
    container.innerHTML = "";
    if (lista.length === 0) {
        container.innerHTML = `<p class="text-gray-500 text-xs text-center">Nenhum livro encontrado.</p>`;
        return;
    }
    lista.forEach(livro => {
        container.innerHTML += `
            <div class="bg-white p-4 rounded-lg shadow border border-gray-100 flex flex-col justify-between">
                <div>
                    <div class="h-44 bg-gray-200 rounded mb-3 flex items-center justify-center overflow-hidden">
                        <img src="${livro.capa}" class="w-full h-full object-cover">
                    </div>
                    <span class="text-[10px] font-bold text-blue-600 uppercase">${livro.genero}</span>
                    <h3 class="text-base font-bold text-gray-800 mt-0.5 line-clamp-1">${livro.titulo}</h3>
                    <p class="text-xs text-gray-500 mb-1">${livro.autor}</p>
                    ${gerarEstrelasHtml(livro.estrelas || 5)}
                </div>
                <div class="flex items-center justify-between mt-2 pt-2 border-t border-gray-100 gap-2">
                    <span class="text-lg font-black text-gray-900">R$ ${livro.preco.toFixed(2)}</span>
                    <div class="flex gap-1">
                        <button onclick="mostrarDetalhes(${livro.id})" class="bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-2 rounded text-[11px] cursor-pointer border border-gray-200">Detalhes</button>
                        <button onclick="adicionarAoCarrinho(${livro.id})" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-[11px] cursor-pointer">+ Add</button>
                    </div>
                </div>
            </div>`;
    });
}

function filtrarLivros() {
    const termo = document.getElementById("busca-input").value.toLowerCase().trim();
    renderizarVitrine(catalogoLivros.filter(l => l.titulo.toLowerCase().includes(termo) || l.autor.toLowerCase().includes(termo)));
}

function adicionarAoCarrinho(id) {
    const livro = catalogoLivros.find(l => l.id === id);
    if (livro) {
        carrinho.push(livro);
        atualizarCarrinhoHTML();
        if (!document.getElementById("resumo-frete").classList.contains("hidden")) {
            calcularFreteEAtualizar();
        }
    }
}

function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinhoHTML();
    
    if (carrinho.length === 0) {
        document.getElementById('resumo-frete').classList.add('hidden');
        document.getElementById('resumo-frete').classList.remove('flex');
    } else if (!document.getElementById("resumo-frete").classList.contains("hidden")) {
        calcularFreteEAtualizar();
    }
}

function calcularSubtotal() { return carrinho.reduce((soma, item) => soma + item.preco, 0); }

function atualizarCarrinhoHTML() {
    const container = document.getElementById("itens-carrinho");
    document.getElementById("subtotal-carrinho").innerText = `R$ ${calcularSubtotal().toFixed(2)}`;
    
    const badge = document.getElementById("badge-carrinho");
    if (carrinho.length > 0) {
        badge.innerText = carrinho.length;
        badge.classList.remove("hidden");
    } else {
        badge.classList.add("hidden");
    }

    if (carrinho.length === 0) {
        container.innerHTML = `<p class="text-gray-500 text-xs py-1">O seu carrinho está vazio.</p>`;
        return;
    }
    
    container.innerHTML = carrinho.map((item, index) => `
        <div class="flex justify-between items-center py-1.5 text-xs">
            <div class="pr-2 max-w-[75%]"><p class="font-semibold text-gray-800 line-clamp-1">${item.titulo}</p><p class="text-[10px] text-gray-500">R$ ${item.preco.toFixed(2)}</p></div>
            <button onclick="removerDoCarrinho(${index})" class="text-red-500 hover:text-red-700 font-bold text-[10px] cursor-pointer">Remover</button>
        </div>`).join('');
}

function calcularFreteEAtualizar() {
    if (carrinho.length === 0) return alert("Adicione itens ao carrinho primeiro.");
    
    const rua = document.getElementById('input-rua').value;
    const num = document.getElementById('input-numero').value;
    const bairro = document.getElementById('input-bairro').value;
    
    if (!rua || !num || !bairro) return alert("Preencha a rua, número e bairro para calcular a entrega.");

    const distanciasBairros = {
        "tindiquera": 1.2,
        "centro": 3.5,
        "fazenda velha": 5.8,
        "estacao": 7.4,
        "costeira": 9.1,
        "iguacu": 11.3,
        "capela velha": 14.6,
        "cachoeira": 19.2
    };

    const bairroLimpo = bairro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    let distanciaBase = distanciasBairros[bairroLimpo] || 15.0; 

    let hashNumero = 0;
    for (let i = 0; i < num.length; i++) hashNumero = num.charCodeAt(i) + ((hashNumero << 5) - hashNumero);
    const distanciaFinal = distanciaBase + ((Math.abs(hashNumero) % 5) * 0.35);

    const VALOR_POR_KM = 0.30;
    const META_FRETE_GRATIS = 150.00;
    const TAXA_MINIMA_FRETE = 3.00;

    const subtotalCarrinho = calcularSubtotal();
    let valorFrete = 0.00;

    if (subtotalCarrinho < META_FRETE_GRATIS) {
        let calculado = distanciaFinal * VALOR_POR_KM;
        valorFrete = Math.max(calculado, TAXA_MINIMA_FRETE); 
    }

    const totalGeral = subtotalCarrinho + valorFrete;

    document.getElementById('txt-distancia').innerText = `${distanciaFinal.toFixed(2)} KM`;
    
    const freteElemento = document.getElementById('txt-valor-frete');
    if (valorFrete === 0 && subtotalCarrinho >= META_FRETE_GRATIS) {
        freteElemento.innerText = "GRÁTIS! 🎉";
        freteElemento.className = "font-black text-green-600";
    } else {
        freteElemento.innerText = `R$ ${valorFrete.toFixed(2)}`;
        freteElemento.className = "font-bold text-gray-700";
    }

    document.getElementById('txt-total-geral').innerText = `R$ ${totalGeral.toFixed(2)}`;
    
    document.getElementById('resumo-frete').classList.remove('hidden');
    document.getElementById('resumo-frete').classList.add('flex');
}

function iniciarCheckout() {
    if (carrinho.length === 0) {
        alert("O seu carrinho está vazio!");
        return;
    }

    if (!usuarioLogado) {
        document.getElementById("modal-login").classList.remove("hidden");
    } else {
        concluirCompraSucesso();
    }
}

function fecharModalLogin() {
    document.getElementById("modal-login").classList.add("hidden");
}

function processarLogin() {
    const nome = document.getElementById("login-nome").value;
    const cpf = document.getElementById("login-cpf").value;
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;

    if(nome && cpf && email && senha) {
        usuarioLogado = { nome, cpf, email }; 
        fecharModalLogin(); 
        concluirCompraSucesso(); 
    }
}

function concluirCompraSucesso() {
    const nomeCliente = usuarioLogado ? usuarioLogado.nome : "Cliente";
    alert(`🎉 Pedido Concluído com Sucesso!\nObrigado por comprar na Livraria Para Baicho.\nObriogado por ajudar os Guinomos!, ${nomeCliente}.`);
    
    carrinho = [];
    atualizarCarrinhoHTML();
    
    document.getElementById('input-rua').value = '';
    document.getElementById('input-numero').value = '';
    document.getElementById('input-bairro').value = '';
    
    document.getElementById('resumo-frete').classList.add('hidden');
    document.getElementById('resumo-frete').classList.remove('flex');
}
