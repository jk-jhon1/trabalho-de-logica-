const catalogoLivros = [
    { 
        id: 1, 
        titulo: "O Senhor dos Anéis: A Sociedade do Anel", 
        autor: "J.R.R. Tolkien", 
        genero: "Fantasia", 
        preco: 59.90, 
        capa: "https://m.media-amazon.com/images/S/pv-target-images/57c834bb94c8fb81db3408daaf5e21e115bc64ffc597ddc6a6eb6c3bbc798caf.jpg", 
        sinopse: "O início da maior jornada fantástica da literatura mundial.",
        ano: 1954,
        paginas: 436,
        estrelas: 5 
    },
    { 
        id: 2, 
        titulo: "1984", 
        autor: "George Orwell", 
        genero: "Distopia", 
        preco: 39.90, 
        capa: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEHkZS6OOzvnxmYi37qpQ1Z80SfXW6DeOSIg&s", 
        sinopse: "O Grande Irmão está de olho em você. Uma crítica severa ao totalitarismo.",
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
        sinopse: "A clássica história psicológica sobre Capitu, Bentinho e os olhos de ressaca.",
        ano: 1899,
        paginas: 256,
        estrelas: 4 
    },
    { 
        id: 4, 
        titulo: "O Hobbit", 
        autor: "J.R.R. Tolkien", 
        genero: "Fantasia", 
        preco: 42.90, 
        capa: "https://m.media-amazon.com/images/I/71jcVMNlaIL._AC_UF1000,1000_QL80_.jpg", 
        sinopse: "A aventura que antecede os eventos de O Senhor dos Anéis.",
        ano: 1937,
        paginas: 310,
        estrelas: 5
    },
    { 
        id: 5, 
        titulo: "Admirável Mundo Novo", 
        autor: "Aldous Huxley", 
        genero: "Distopia", 
        preco: 34.90, 
        capa: "https://http2.mlstatic.com/D_NQ_NP_964069-MLB80051768932_102024-O.webp", 
        sinopse: "Uma sociedade controlada por engenharia genética e condicionamento.",
        ano: 1932,
        paginas: 312,
        estrelas: 4
    },
    { 
        id: 6, 
        titulo: "O Cortiço", 
        autor: "Aluísio Azevedo", 
        genero: "Literatura", 
        preco: 19.90, 
        capa: "https://m.media-amazon.com/images/I/91UuA2jnZDL._UF1000,1000_QL80_.jpg", 
        sinopse: "O retrato naturalista da habitação coletiva e do comportamento humano.",
        ano: 1890,
        paginas: 288,
        estrelas: 3
    },
    { 
        id: 7, 
        titulo: "Fahrenheit 451", 
        autor: "Ray Bradbury", 
        genero: "Distopia", 
        preco: 45.00, 
        capa: "https://m.media-amazon.com/images/I/714dogtM2dL._AC_UF1000,1000_QL80_.jpg", 
        sinopse: "Um futuro sombrio onde os livros são proibidos e queimados pelos bombeiros.",
        ano: 1953,
        paginas: 216,
        estrelas: 5
    },
    { 
        id: 8, 
        titulo: "Duna", 
        autor: "Frank Herbert", 
        genero: "Ficção Científica", 
        preco: 69.90, 
        capa: "https://m.media-amazon.com/images/I/81zN7udGRUL.jpg", 
        sinopse: "A épica jornada de Paul Atreides no planeta desértico Arrakis.",
        ano: 1965,
        paginas: 680,
        estrelas: 5
    }
];

let carrinho = [];

function obterDetalhesLivro(id) {
    return catalogoLivros.find(l => l.id === id);
}

function mostrarDetalhes(id) {
    const livro = obterDetalhesLivro(id);
    if (livro) {
        const estrelasTexto = "★".repeat(livro.estrelas) + "☆".repeat(5 - livro.estrelas);
        alert(
            `📚 DETALHES DO LIVRO\n` +
            `----------------------------------------\n` +
            `Título: ${livro.titulo}\n` +
            `Autor: ${livro.autor}\n` +
            `Gênero: ${livro.genero}\n` +
            `Ano de Lançamento: ${livro.ano}\n` +
            `Total de Páginas: ${livro.paginas} pág.\n` +
            `Avaliação dos Leitores: ${estrelasTexto} (${livro.estrelas}/5)\n` +
            `----------------------------------------\n` +
            `SINOPSE:\n"${livro.sinopse}"`
        );
    }
}

function gerarEstrelasHtml(nota) {
    let html = '<div class="flex text-yellow-500 text-sm my-1" title="Avaliação: ' + nota + ' de 5 estrelas">';
    for (let i = 1; i <= 5; i++) {
        if (i <= nota) {
            html += '★'; // Estrela cheia
        } else {
            html += '☆'; // Estrela vazia
        }
    }
    html += '</div>';
    return html;
}

function contarQuantidadeNoCarrinho(id) {
    return carrinho.filter(item => item.id === id).length;
}

function esvaziarCarrinho() {
    carrinho = [];
    atualizarCarrinhoHTML();
    ocultarPainelFrete();
}

function ocultarPainelFrete() {
    document.getElementById('resumo-frete').classList.add('hidden');
}

document.addEventListener("DOMContentLoaded", () => {
    renderizarVitrine(catalogoLivros);
});

function renderizarVitrine(lista) {
    const container = document.getElementById("vitrine-livros");
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = `<p class="text-gray-500 col-span-2">Nenhum livro encontrado para essa busca.</p>`;
        return;
    }

    lista.forEach(livro => {
        // Gera o HTML das estrelas dinamicamente
        const estrelasHtml = gerarEstrelasHtml(livro.estrelas || 5);

        const card = `
            <div class="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between">
                <div>
                    <div class="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400 font-bold overflow-hidden">
                        <img src="${livro.capa}" alt="${livro.titulo}" class="w-full h-full object-cover">
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-xs font-bold text-blue-600 uppercase tracking-wide">${livro.genero}</span>
                        <span class="text-[10px] text-gray-400">${livro.paginas} pág. | Ano: ${livro.ano}</span>
                    </div>
                    <h3 class="text-lg font-bold text-gray-800 mt-1 line-clamp-1">${livro.titulo}</h3>
                    <p class="text-sm text-gray-500 mb-1">Por: ${livro.autor}</p>
                    
                    ${estrelasHtml}
                    
                    <p class="text-xs text-gray-600 line-clamp-2 mb-4 mt-2">${livro.sinopse}</p>
                </div>
                <div class="flex items-center justify-between mt-2 border-t border-gray-100 pt-3 gap-2">
                    <span class="text-xl font-black text-gray-900">R$ ${livro.preco.toFixed(2)}</span>
                    <div class="flex gap-1.5">
                        <button onclick="mostrarDetalhes(${livro.id})" 
                                class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-1.5 px-2.5 rounded text-xs transition cursor-pointer border border-gray-200">
                            Detalhes
                        </button>
                        <button onclick="adicionarAoCarrinho(${livro.id})" 
                                class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-2.5 rounded text-xs transition cursor-pointer">
                            + Adicionar
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
        ocultarPainelFrete();
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
        container.innerHTML = `<p class="text-gray-500 text-sm py-2">O seu carrinho está vazio.</p>`;
        return;
    }

    container.innerHTML = "";
    carrinho.forEach((item, index) => {
        const itemHtml = `
            <div class="flex justify-between items-center py-2 text-sm">
                <div class="pr-2 max-w-[70%]">
                    <p class="font-semibold text-gray-800 line-clamp-1">${item.titulo}</p>
                    <p class="text-xs text-gray-500">R$ ${item.preco.toFixed(2)}</p>
                </div>
                <button onclick="removerDoCarrinho(${index})" class="text-red-500 hover:text-red-700 text-xs font-bold transition cursor-pointer">
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
