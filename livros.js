// Banco de dados com preços adicionados (preco)
const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        autor: "J.R.R. Tolkien",
        genero: "Fantasia",
        ano: 1954,
        paginas: 436,
        avaliacao: 4.9,
        preco: 59.90,
        capa: "https://images.unsplash.com/photo-1629992184111-37ea190444b3?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Em uma terra fantástica e cheia de magia, um jovem hobbit chamado Frodo Bolseiro recebe a tarefa de destruir o Anel Um, uma arma de poder absoluto criada pelo Senhor Sombrio, Sauron."
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        genero: "Distopia",
        ano: 1949,
        paginas: 336,
        avaliacao: 4.8,
        preco: 39.90,
        capa: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Winston Smith vive aprisionado na engrenagem totalitária de uma sociedade dominada pelo Grande Irmão. Uma crítica feroz ao autoritarismo."
    },
    {
        id: 3,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        genero: "Literatura",
        ano: 1899,
        paginas: 256,
        avaliacao: 4.6,
        preco: 24.90,
        capa: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Bento Santiago narra suas memórias e reconta sua história de amor com a enigmática Capitu. Capitu traiu ou não traiu Bentinho?"
    },
    {
        id: 4,
        titulo: "Uma Breve História do Tempo",
        autor: "Stephen Hawking",
        genero: "Ciência",
        ano: 1988,
        paginas: 256,
        avaliacao: 4.7,
        preco: 45.00,
        capa: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Uma das mentes mais brilhantes do nosso tempo guia o leitor leigo através das perguntas mais profundas sobre o universo."
    },
    {
        id: 5,
        titulo: "Hábitos Atômicos",
        autor: "James Clear",
        genero: "Desenvolvimento",
        ano: 2018,
        paginas: 320,
        avaliacao: 4.9,
        preco: 52.80,
        capa: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Um guia prático e científico sobre como pequenas mudanças diárias podem gerar resultados extraordinários a longo prazo."
    },
    {
        id: 6,
        titulo: "Sapiens: Uma Breve História",
        autor: "Yuval Noah Harari",
        genero: "História",
        ano: 2011,
        paginas: 464,
        avaliacao: 4.8,
        preco: 64.90,
        capa: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "O autor repassa a história da humanidade desde a evolução dos primeiros humanos até as revoluções do século XXI."
    },
    {
        id: 7,
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        genero: "Fantasia",
        ano: 1937,
        paginas: 328,
        avaliacao: 4.8,
        preco: 49.90,
        capa: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Bilbo Bolseiro era um hobbit de vida pacata até que o mago Gandalf o contrata para uma jornada perigosa atrás de um tesouro."
    },
    {
        id: 8,
        titulo: "Duna",
        autor: "Frank Herbert",
        genero: "Ficção Científica",
        ano: 1965,
        paginas: 680,
        avaliacao: 4.7,
        preco: 69.90,
        capa: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Ambientado num futuro distante no planeta desértico Arrakis, a obra acompanha o jovem Paul Atreides e a disputa pela Especiaria."
    }
];

// Estado do Carrinho de Compras
let carrinho = [];

// Renderizar Livros no Catálogo Principal
function renderizarLivros(listaDeLivros) {
    const grid = document.getElementById('livros-grid');
    grid.innerHTML = '';

    if (listaDeLivros.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-12">Nenhum livro encontrado.</p>`;
        return;
    }

    listaDeLivros.forEach(livro => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition duration-300 flex flex-col border border-gray-100";
        
        card.innerHTML = `
            <div class="relative cursor-pointer" onclick="abrirModal(${livro.id})">
                <img src="${livro.capa}" alt="${livro.titulo}" class="w-full h-48 object-cover">
                <span class="absolute top-2 right-2 bg-black/70 text-amber-400 text-xs font-bold px-2 py-1 rounded-md"><i class="fas fa-star"></i> ${livro.avaliacao}</span>
            </div>
            <div class="p-5 flex-col flex-grow flex justify-between">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wide text-indigo-600">${livro.genero}</span>
                    <h3 onclick="abrirModal(${livro.id})" class="font-bold text-base text-gray-900 mt-0.5 leading-tight hover:text-indigo-600 cursor-pointer line-clamp-2">${livro.titulo}</h3>
                    <p class="text-xs text-gray-500 mt-1">Por: ${livro.autor}</p>
                    <p class="text-xl font-black text-gray-900 mt-3">R$ ${livro.preco.toFixed(2).replace('.', ',')}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-100 flex gap-2">
                    <button onclick="abrirModal(${livro.id})" class="flex-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg transition cursor-pointer">
                        Detalhes
                    </button>
                    <button onclick="adicionarAoCarrinho(${livro.id})" class="flex-1 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition shadow-sm flex items-center justify-center gap-1 cursor-pointer">
                        <i class="fas fa-cart-plus"></i> Comprar
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Funções do Carrinho de Compras
function abrirCarrinho() {
    document.getElementById('carrinho-fundo').classList.remove('hidden');
    const lateral = document.getElementById('carrinho-lateral');
    lateral.classList.remove('hidden');
    setTimeout(() => {
        document.getElementById('carrinho-fundo').classList.remove('opacity-0');
        lateral.classList.remove('translate-x-full');
    }, 10);
}

function fecharCarrinho() {
    document.getElementById('carrinho-fundo').classList.add('opacity-0');
    document.getElementById('carrinho-lateral').classList.add('translate-x-full');
    setTimeout(() => {
        document.getElementById('carrinho-fundo').classList.add('hidden');
    }, 300);
}

function adicionarAoCarrinho(id) {
    const livro = livros.find(l => l.id === id);
    if (!livro) return;

    // Verifica se já está no carrinho
    const itemNoCarrinho = carrinho.find(item => item.id === id);

    if (itemNoCarrinho) {
        itemNoCarrinho.quantidade += 1;
    } else {
        carrinho.push({ ...livro, quantidade: 1 });
    }

    atualizarCarrinho();
    abrirCarrinho(); // Abre a gaveta para dar feedback visual
}

function removerDoCarrinho(id) {
    carrinho = carrinho.filter(item => item.id !== id);
    atualizarCarrinho();
}

function alterarQuantidade(id, delta) {
    const item = carrinho.find(item => item.id === id);
    if (!item) return;

    item.quantidade += delta;
    if (item.quantidade <= 0) {
        removerDoCarrinho(id);
    } else {
        atualizarCarrinho();
    }
}

function atualizarCarrinho() {
    const container = document.getElementById('carrinho-itens');
    const contador = document.getElementById('cart-count');
    const totalElemento = document.getElementById('carrinho-total');

    container.innerHTML = '';
    
    let totalItens = 0;
    let valorTotal = 0;

    if (carrinho.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-gray-400 flex flex-col items-center gap-2">
                <i class="fas fa-shopping-basket text-4xl"></i>
                <p>Seu carrinho está vazio.</p>
            </div>`;
    } else {
        carrinho.forEach(item => {
            totalItens += item.quantidade;
            valorTotal += item.preco * item.quantidade;

            const div = document.createElement('div');
            div.className = "flex gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 items-center animate-fade-in";
            div.innerHTML = `
                <img src="${item.capa}" alt="${item.titulo}" class="w-12 h-16 object-cover rounded-md shadow-sm">
                <div class="flex-grow min-w-0">
                    <h4 class="font-bold text-sm text-gray-900 truncate">${item.titulo}</h4>
                    <p class="text-xs text-indigo-600 font-semibold">R$ ${item.preco.toFixed(2).replace('.', ',')}</p>
                    
                    <div class="flex items-center gap-2 mt-1">
                        <button onclick="alterarQuantidade(${item.id}, -1)" class="w-5 h-5 bg-white border border-gray-200 rounded text-xs flex items-center justify-center hover:bg-gray-100 font-bold cursor-pointer">-</button>
                        <span class="text-xs font-bold text-gray-700">${item.quantidade}</span>
                        <button onclick="alterarQuantidade(${item.id}, 1)" class="w-5 h-5 bg-white border border-gray-200 rounded text-xs flex items-center justify-center hover:bg-gray-100 font-bold cursor-pointer">+</button>
                    </div>
                </div>
                <button onclick="removerDoCarrinho(${item.id})" class="text-red-400 hover:text-red-600 p-1 text-sm cursor-pointer" title="Remover item">
                    <i class="fas fa-trash"></i>
                </button>
            `;
            container.appendChild(div);
        });
    }

    contador.innerText = totalItens;
    totalElemento.innerText = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
}

// Modal de Detalhes Expandido com Preço e Botão de Compra
function abrirModal(id) {
    const livro = livros.find(l => l.id === id);
    if (!livro) return;

    const modal = document.getElementById('modal-detalhes');
    const conteudo = document.getElementById('modal-conteudo');

    conteudo.innerHTML = `
        <div class="flex flex-col md:flex-row">
            <img src="${livro.capa}" alt="${livro.titulo}" class="w-full md:w-64 h-64 md:h-auto object-cover">
            <div class="p-6 flex flex-col justify-between flex-grow">
                <div>
                    <span class="text-xs font-bold uppercase text-indigo-600 tracking-wider">${livro.genero}</span>
                    <h2 class="text-2xl font-bold text-gray-900 mt-1 mb-1">${livro.titulo}</h2>
                    <p class="text-gray-600 text-xs mb-4">Por: <span class="font-semibold">${livro.autor}</span></p>
                    
                    <div class="grid grid-cols-3 gap-2 bg-gray-50 p-2.5 rounded-xl text-center text-xs font-semibold text-gray-600 mb-4">
                        <div><p class="text-gray-400 font-normal">Ano</p><p class="text-gray-900">${livro.ano}</p></div>
                        <div><p class="text-gray-400 font-normal">Páginas</p><p class="text-gray-900">${livro.paginas}</p></div>
                        <div><p class="text-gray-400 font-normal">Avaliação</p><p class="text-amber-500"><i class="fas fa-star"></i> ${livro.avaliacao}</p></div>
                    </div>

                    <h4 class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Sinopse</h4>
                    <p class="text-gray-600 text-sm leading-relaxed mb-6">${livro.sinopse}</p>
                </div>

                <div class="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                    <div>
                        <p class="text-xs text-gray-400 font-medium">Preço de Venda</p>
                        <p class="text-2xl font-black text-gray-900">R$ ${livro.preco.toFixed(2).replace('.', ',')}</p>
                    </div>
                    <button onclick="adicionarAoCarrinho(${livro.id}); fecharModal();" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-md flex items-center gap-2 cursor-pointer">
                        <i class="fas fa-shopping-basket"></i> Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.firstElementChild.classList.remove('scale-95');
    }, 10);
}

function fecharModal() {
    const modal = document.getElementById('modal-detalhes');
    modal.classList.add('opacity-0');
    modal.firstElementChild.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function fecharModalExterno(e) {
    if (e.target === document.getElementById('modal-detalhes')) fecharModal();
}

// Simulação de Finalização de Compra
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio! Adicione algum livro antes de finalizar.");
        return;
    }

    const valorTotalStr = document.getElementById('carrinho-total').innerText;
    
    // Mensagem bonita simulando sucesso
    alert(`🎉 SIMULAÇÃO DE COMPRA CONCLUÍDA!\n\n🛍️ Obrigado por comprar na BiblioTech!\n💰 Valor Total do Pedido: ${valorTotalStr}\n\nIsso é uma simulação estática. Nenhum valor real foi cobrado.`);
    
    // Limpa o carrinho após fechar
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}

// Barra de Busca
const barraBusca = document.getElementById('search-input');
barraBusca.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const filtrados = livros.filter(l => 
        l.titulo.toLowerCase().includes(termo) || 
        l.autor.toLowerCase().includes(termo) || 
        l.genero.toLowerCase().includes(termo)
    );
    renderizarLivros(filtrados);
});

// Inicialização
renderizarLivros(livros);
