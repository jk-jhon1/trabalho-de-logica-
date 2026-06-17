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
        capa: "bhttps://m.media-amazon.com/images/I/91OvTwFvWKL._SL1500_.jpg",
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
];

let carrinho = [];
let livroSelecionadoId = null;

document.addEventListener("DOMContentLoaded", () => {
    renderizarVitrine(catalogoLivros);
});

function obterDetalhesLivro(id) {
    return catalogoLivros.find(l => l.id === id);
}

function mostrarDetalhes(id) {
    livroSelecionadoId = id;
    const livro = obterDetalhesLivro(id);
    if (!livro) return;

  
    document.getElementById("modal-capa").src = livro.capa;
    document.getElementById("modal-capa").alt = livro.titulo;
    document.getElementById("modal-genero").innerText = livro.genero;
    document.getElementById("modal-titulo").innerText = livro.titulo;
    document.getElementById("modal-autor").innerText = `Por: ${livro.autor}`;
    document.getElementById("modal-meta").innerText = `${livro.paginas} pág. | Ano: ${livro.ano}`;
    document.getElementById("modal-sinopse").innerText = livro.sinopse;
    document.getElementById("modal-preco").innerText = `R$ ${livro.preco.toFixed(2)}`;

 
    const btnAdicionar = document.getElementById("modal-btn-adicionar");
    btnAdicionar.onclick = () => {
        adicionarAoCarrinho(id);
    };
    
    renderizarEstrelasInterativas(livro.estrelas);

    document.getElementById("modal-detalhes").classList.remove("hidden");
}

function fecharModal() {
    document.getElementById("modal-detalhes").classList.add("hidden");
    livroSelecionadoId = null;
}

function renderizarEstrelasInterativas(notaAtual) {
    const container = document.getElementById("modal-estrelas-interativas");
    container.innerHTML = "";

    for (let i = 1; i <= 5; i++) {
        const estrelaBtn = document.createElement("button");
        estrelaBtn.innerHTML = i <= notaAtual ? "★" : "☆";
        estrelaBtn.className = `transition duration-150 transform active:scale-95 cursor-pointer ${
            i <= notaAtual ? 'text-yellow-500 font-bold' : 'text-gray-300'
        }`;
        
        estrelaBtn.onclick = () => avaliarLivro(livroSelecionadoId, i);
        container.appendChild(estrelaBtn);
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
    for (let i = 1; i <= 5; i++) {
        html += i <= nota ? '★' : '☆';
    }
    html += '</div>';
    return html;
}

function renderizarVitrine(lista) {
    const container = document.getElementById("vitrine-livros");
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = `<p class="text-gray-500 text-xs py-4 text-center">Nenhum livro encontrado.</p>`;
        return;
    }

    lista.forEach(livro => {
        const estrelasHtml = gerarEstrelasHtml(livro.estrelas || 5);

        const card = `
            <div class="bg-white p-4 rounded-lg shadow border border-gray-100 flex flex-col justify-between">
                <div>
                    <div class="h-44 bg-gray-200 rounded mb-3 flex items-center justify-center text-gray-400 font-bold overflow-hidden">
                        <img src="${livro.capa}" alt="${livro.titulo}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-[10px] font-bold text-blue-600 uppercase tracking-wide">${livro.genero}</span>
                        <span class="text-[9px] text-gray-400">${livro.paginas} pág.</span>
                    </div>
                    <h3 class="text-base font-bold text-gray-800 mt-0.5 line-clamp-1">${livro.titulo}</h3>
                    <p class="text-xs text-gray-500 mb-1">Por: ${livro.autor}</p>
                    
                    ${estrelasHtml}
                    
                    <p class="text-[11px] text-gray-600 line-clamp-2 mb-3 mt-1.5">${livro.sinopse}</p>
                </div>
                <div class="flex items-center justify-between mt-1 border-t border-gray-100 pt-2.5 gap-2">
                    <span class="text-lg font-black text-gray-900">R$ ${livro.preco.toFixed(2)}</span>
                    <div class="flex gap-1">
                        <button onclick="mostrarDetalhes(${livro.id})" 
                                class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-1 px-2 rounded text-[11px] transition cursor-pointer border border-gray-200">
                            Detalhes
                        </button>
                        <button onclick="adicionarAoCarrinho(${livro.id})" 
                                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded text-[11px] transition cursor-pointer">
                            + Add
                        </button>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

function filtrarLivros() {
    const termo = document.getElementById("busca-input").value.toLowerCase().trim();
    const filtrados = catalogoLivros.filter(l => 
        l.titulo.toLowerCase().includes(termo) || 
        l.autor.toLowerCase().includes(termo) || 
        l.genero.toLowerCase().includes(termo)
    );
    renderizarVitrine(filtrados);
}

// ============================================================================
// COMPONENTE 4: OPERAÇÕES DO CARRINHO DE COMPRAS
// ============================================================================

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
    } else if (!document.getElementById("resumo-frete").classList.contains("hidden")) {
        calcularFreteEAtualizar();
    }
}

function calcularSubtotal() {
    return carrinho.reduce((soma, item) => soma + item.preco, 0);
}

function atualizarCarrinhoHTML() {
    const container = document.getElementById("itens-carrinho");
    const subtotalTxt = document.getElementById("subtotal-carrinho");
    
    const subtotal = calcularSubtotal();
    subtotalTxt.innerText = `R$ ${subtotal.toFixed(2)}`;

    if (carrinho.length === 0) {
        container.innerHTML = `<p class="text-gray-500 text-xs py-1">O seu carrinho está vazio.</p>`;
        return;
    }

    container.innerHTML = "";
    carrinho.forEach((item, index) => {
        const itemHtml = `
            <div class="flex justify-between items-center py-1.5 text-xs">
                <div class="pr-2 max-w-[75%]">
                    <p class="font-semibold text-gray-800 line-clamp-1">${item.titulo}</p>
                    <p class="text-[10px] text-gray-500">R$ ${item.preco.toFixed(2)}</p>
                </div>
                <button onclick="removerDoCarrinho(${index})" class="text-red-500 hover:text-red-700 font-bold text-[10px] transition cursor-pointer">
                    Remover
                </button>
            </div>
        `;
        container.innerHTML += itemHtml;
    });
}

function calcularFreteEAtualizar() {
    const rua = document.getElementById('input-rua').value;
    const numero = document.getElementById('input-numero').value;
    const bairro = document.getElementById('input-bairro').value;

    if (!rua || !numero || !bairro) {
        alert("Por favor, informe a rua, o número e escolha o bairro para calcular a entrega!");
        return;
    }

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
    let distanciaBase = distanciasBairros[bairroLimpo] || 25.0;

    let hashNumero = 0;
    for (let i = 0; i < numero.length; i++) {
        hashNumero = numero.charCodeAt(i) + ((hashNumero << 5) - hashNumero);
    }
    const variacaoNumero = (Math.abs(hashNumero) % 5) * 0.35;
    const distanciaFinal = distanciaBase + variacaoNumero;

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
    document.getElementById('txt-valor-frete').innerText = valorFrete === 0 && subtotalCarrinho >= META_FRETE_GRATIS 
        ? "GRÁTIS! 🎉" 
        : `R$ ${valorFrete.toFixed(2)}`;
    document.getElementById('txt-total-geral').innerText = `R$ ${totalGeral.toFixed(2)}`;
    
    document.getElementById('resumo-frete').classList.remove('hidden');
}
