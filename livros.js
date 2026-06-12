// Banco de dados imutável e tipado corretamente
const LIVROS = [
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
        sinopse: "Em uma terra fantástica e cheia de magia, um jovem hobbit chamado Frodo Bolseiro recebe a tarefa de destruir o Anel Um, uma arma de poder absolutista criada pelo Senhor Sombrio, Sauron."
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
        sinopse: "Ambientado num futuro distante no planeta desértico Arrakis, a obra acompanha o jovem Paul Atreides e a disputa pela Especiaria."
    }
];

// Estado global do carrinho
let carrinho = [];

// Função auxiliar centralizada para formatar valores monetários
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Renderizar livros no Grid Principal com proteção contra reflows excessivos
function renderizarLivros(listaDeLivros) {
    const grid = document.getElementById('livros-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    if (listaDeLivros.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-12 text-lg">Nenhum livro encontrado.</p>`;
        return;
    }

    // Criação de fragmento de documento para otimizar performance de renderização
    const fragmento = document.createDocumentFragment();

    listaDeLivros.forEach(livro => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition duration-300 flex flex-col border border-gray-100";
        
        card.innerHTML = `
            <div class="relative cursor-pointer overflow-hidden group" onclick="abrirModal(${livro.id})">
                <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" class="w-full h-48 object-cover group-hover:scale-105 transition duration-300" loading="lazy">
                <span class="absolute top-2 right-2 bg-black/75 text-amber-400 text-xs font-bold px-2 py-1 rounded-md">
                    <i class="fas fa-star" aria-hidden="true"></i> ${livro.avaliacao}
                </span>
            </div>
            <div class="p-5 flex flex-col flex-grow justify-between">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wide text-indigo-600">${livro.genero}</span>
                    <h3 onclick="abrirModal(${livro.id})" class="font-bold text-base text-gray-900 mt-0.5 leading-tight hover:text-indigo-600 cursor-pointer line-clamp-2">${livro.titulo}</h3>
                    <p class="text-xs text-gray-500 mt-1">Por: ${livro.autor}</p>
                    <p class="text-xl font-black text-gray-900 mt-3">${formatarMoeda(livro.preco)}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-100 flex gap-2">
                    <button onclick="abrirModal(${livro.id})" class="flex-1 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg transition cursor-pointer">
                        Detalhes
                    </button>
                    <button onclick="adicionarAoCarrinho(${livro.id})" class="flex-1 text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-lg transition shadow-sm flex items-center justify-center gap-1 cursor-pointer">
                        <i class="fas fa-cart-plus" aria-hidden="true"></i> Comprar
                    </button>
                </div>
            </div>
        `;
        fragmento.appendChild(card);
    });

    grid.appendChild(fragmento);
}

// Funções de Controle do Carrinho Lateral
function abrirCarrinho() {
    const fundo = document.getElementById('carrinho-fundo');
    const lateral = document.getElementById('carrinho-lateral');
    
    if (!fundo || !lateral) return;

    fundo.classList.remove('hidden');
    lateral.classList.remove('hidden');
    
    // Pequeno atraso para garantir o gatilho da transição CSS do Tailwind
    setTimeout(() => {
        fundo.style.opacity = "1";
        lateral.classList.remove('translate-x-full');
    }, 20);
}

function fecharCarrinho() {
    const fundo = document.getElementById('carrinho-fundo');
    const lateral = document.getElementById('carrinho-lateral');

    if (!fundo || !lateral) return;

    fundo.style.opacity = "0";
    lateral.classList.add('translate-x-full');
    
    setTimeout(() => {
        fundo.classList.add('hidden');
        lateral.classList.add('hidden');
    }, 300);
}

function adicionarAoCarrinho(id) {
    const livro = LIVROS.find(l => l.id === id);
    if (!livro) return;

    const itemNoCarrinho = carrinho.find(item => item.id === id);

    if (itemNoCarrinho) {
        itemNoCarrinho.quantidade += 1;
    } else {
        carrinho.push({ ...livro, quantidade: 1 });
    }

    atualizarCarrinho();
    abrirCarrinho();
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

// Atualização e cálculos lógicos do carrinho
function atualizarCarrinho() {
    const container = document.getElementById('carrinho-itens');
    const contador = document.getElementById('cart-count');
    const subtotalElemento = document.getElementById('carrinho-subtotal');
    const freteElemento = document.getElementById('carrinho-frete');
    const totalElemento = document.getElementById('carrinho-total');
    
    const freteContainer = document.getElementById('progresso-frete-container');
    const avisoFrete = document.getElementById('aviso-frete');
    const barraFrete = document.getElementById('progresso-frete-barra');

    if (!container || !contador || !subtotalElemento || !freteElemento || !totalElemento) return;

    container.innerHTML = '';
    
    let totalItens = 0;
    let subtotal = 0;

    if (carrinho.length === 0) {
        container.innerHTML = `
            <div class="text-center py-12 text-gray-400 flex flex-col items-center gap-2">
                <i class="fas fa-shopping-basket text-4xl" aria-hidden="true"></i>
                <p>Seu carrinho está vazio.</p>
            </div>`;
        if (freteContainer) freteContainer.classList.add('hidden');
    } else {
        if (freteContainer) freteContainer.classList.remove('hidden');
        
        const fragmento = document.createDocumentFragment();

        carrinho.forEach(item => {
            totalItens += item.quantidade;
            subtotal += item.preco * item.quantidade;

            const div = document.createElement('div');
            div.className = "flex gap-3 bg-gray-50 p-3 rounded-xl border border-gray-100 items-center";
            div.innerHTML = `
                <img src="${item.capa}" alt="Miniatura ${item.titulo}" class="w-12 h-16 object-cover rounded-md shadow-sm">
                <div class="flex-grow min-w-0">
                    <h4 class="font-bold text-sm text-gray-900 truncate">${item.titulo}</h4>
                    <p class="text-xs text-indigo-600 font-semibold">${formatarMoeda(item.preco)}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <button onclick="alterarQuantidade(${item.id}, -1)" class="w-5 h-5 bg-white border border-gray-200 rounded text-xs flex items-center justify-center hover:bg-gray-100 font-bold cursor-pointer" aria-label="Diminuir quantidade">-</button>
                        <span class="text-xs font-bold text-gray-700">${item.quantidade}</span>
                        <button onclick="alterarQuantidade(${item.id}, 1)" class="w-5 h-5 bg-white border border-gray-200 rounded text-xs flex items-center justify-center hover:bg-gray-100 font-bold cursor-pointer" aria-label="Aumentar quantidade">+</button>
                    </div>
                </div>
                <button onclick="removerDoCarrinho(${item.id})" class="text-red-400 hover:text-red-600 p-1 text-sm cursor-pointer" aria-label="Remover item">
                    <i class="fas fa-trash" aria-hidden="true"></i>
                </button>
            `;
            fragmento.appendChild(div);
        });
        container.appendChild(fragmento);
    }

    // Regras de cálculo de frete
    let frete = 0;
    const META_FRETE_GRATIS = 150.00;
    const VALOR_FRETE_PADRAO = 15.00;

    if (subtotal > 0) {
        if (subtotal >= META_FRETE_GRATIS) {
            frete = 0;
            if (avisoFrete) avisoFrete.innerHTML = "🎉 <span class='text-green-600 font-bold'>Você ganhou Frete Grátis!</span>";
            if (barraFrete) {
                barraFrete.style.width = "100%";
                barraFrete.className = "bg-green-500 h-2 rounded-full transition-all duration-500";
            }
        } else {
            frete = VALOR_FRETE_PADRAO;
            const faltam = META_FRETE_GRATIS - subtotal;
            if (avisoFrete) avisoFrete.innerHTML = `Faltam <span class='text-indigo-600 font-bold'>${formatarMoeda(faltam)}</span>`;
            
            if (barraFrete) {
                const porcentagem = (subtotal / META_FRETE_GRATIS) * 100;
                barraFrete.style.width = `${porcentagem}%`;
                barraFrete.className = "bg-indigo-600 h-2 rounded-full transition-all duration-500";
            }
        }
    }

    const valorTotal = subtotal + frete;

    // Injeção de textos formatados com segurança
    contador.innerText = totalItens;
    subtotalElemento.innerText = formatarMoeda(subtotal);
    freteElemento.innerText = (frete === 0 && subtotal > 0) ? "Grátis" : formatarMoeda(frete);
    totalElemento.innerText = formatarMoeda(valorTotal);
}

// Funções do Modal de Detalhes (Refatorado)
function abrirModal(id) {
    const livro = LIVROS.find(l => l.id === id);
    if (!livro) return;

    const modal = document.getElementById('modal-detalhes');
    const conteudo = document.getElementById('modal-conteudo');
    
    if (!modal || !conteudo) return;

    conteudo.innerHTML = `
        <div class="flex flex-col md:flex-row">
            <img src="${livro.capa}" alt="Capa ampliada de ${livro.titulo}" class="w-full md:w-64 h-64 md:h-auto object-cover">
            <div class="p-6 flex flex-col justify-between flex-grow">
                <div>
                    <span class="text-xs font-bold uppercase text-indigo-600 tracking-wider">${livro.genero}</span>
                    <h2 class="text-2xl font-bold text-gray-900 mt-1 mb-1">${livro.titulo}</h2>
                    <p class="text-gray-600 text-xs mb-4">Por: <span class="font-semibold">${livro.autor}</span></p>
                    
                    <div class="grid grid-cols-3 gap-2 bg-gray-50 p-2.5 rounded-xl text-center text-xs font-semibold text-gray-600 mb-4">
                        <div><p class="text-gray-400 font-normal">Ano</p><p class="text-gray-900">${livro.ano}</p></div>
                        <div><p class="text-gray-400 font-normal">Páginas</p><p class="text-gray-900">${livro.paginas}</p></div>
                        <div><p class="text-gray-400 font-normal">Avaliação</p><p class="text-amber-500"><i class="fas fa-star" aria-hidden="true"></i> ${livro.avaliacao}</p></div>
                    </div>

                    <h4 class="text-xs font-bold text-gray-900 uppercase tracking-wider mb-1">Sinopse</h4>
                    <p class="text-gray-600 text-sm leading-relaxed mb-6">${livro.sinopse}</p>
                </div>

                <div class="pt-4 border-t border-gray-100 flex items-center justify-between gap-4">
                    <div>
                        <p class="text-xs text-gray-400 font-medium">Preço</p>
                        <p class="text-2xl font-black text-gray-900">${formatarMoeda(livro.preco)}</p>
                    </div>
                    <button onclick="adicionarAoCarrinho(${livro.id}); fecharModal();" class="bg-indigo-600 hover:bg-indigo-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-md flex items-center gap-2 cursor-pointer">
                        <i class="fas fa-shopping-basket" aria-hidden="true"></i> Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.style.opacity = "1";
        modal.firstElementChild.classList.remove('scale-95');
    }, 20);
}

function fecharModal() {
    const modal = document.getElementById('modal-detalhes');
    if (!modal) return;

    modal.style.opacity = "0";
    modal.firstElementChild.classList.add('scale-95');
    
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

function fecharModalExterno(e) {
    if (e.target === document.getElementById('modal-detalhes')) fecharModal();
}

// Disparador do alerta de finalização simulada
function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    const subtotalStr = document.getElementById('carrinho-subtotal')?.innerText || 'R$ 0,00';
    const freteStr = document.getElementById('carrinho-frete')?.innerText || 'R$ 0,00';
    const totalStr = document.getElementById('carrinho-total')?.innerText || 'R$ 0,00';
    
    alert(`🎉 SIMULAÇÃO DE COMPRA CONCLUÍDA!\n\n📋 Resumo do Pedido:\n🔹 Produtos: ${subtotalStr}\n🚚 Frete: ${freteStr}\n💰 Total Pago: ${totalStr}\n\nObrigado por testar o sistema estruturado da BiblioTech!`);
    
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}

// Tratamento e normalização simples de string para o sistema de busca
const barraBusca = document.getElementById('search-input');
if (barraBusca) {
    barraBusca.addEventListener('input', (e) => {
        const termo = e.target.value.trim().toLowerCase();
        
        const filtrados = LIVROS.filter(l => 
            l.titulo.toLowerCase().includes(termo) || 
            l.autor.toLowerCase().includes(termo) || 
            l.genero.toLowerCase().includes(termo)
        );
        renderizarLivros(filtrados);
    });
}

// Inicialização segura do app
document.addEventListener('DOMContentLoaded', () => {
    renderizarLivros(LIVROS);
});
