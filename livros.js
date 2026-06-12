const LIVROS = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        autor: "J.R.R. Tolkien",
        genero: "Fantasia",
        ano: 1954,
        paginas: 436,
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
        preco: 69.90,
        capa: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60",
        sinopse: "Ambientado num futuro distante num planeta desértico Arrakis, a obra acompanha o jovem Paul Atreides e a disputa pela Especiaria."
    }
];

// Base de dados inicial de comentários padrão
const AVALIACOES_PADRAO = {
    1: [
        { usuario: "João Silva", nota: 5, comentario: "Uma obra-prima absoluta da fantasia medieval!", data: "10/05/2026" },
        { usuario: "Mariana Costa", nota: 5, comentario: "O melhor livro que já li. A jornada de Frodo é incrível.", data: "22/05/2026" }
    ],
    2: [
        { usuario: "Ricardo Alves", nota: 5, comentario: "Uma crítica genial e atemporal ao totalitarismo.", data: "14/04/2026" }
    ],
    3: [
        { usuario: "Fernanda Dias", nota: 4, comentario: "Clássico nacional. Capitu traiu ou não traiu?", data: "18/03/2026" }
    ],
    4: [
        { usuario: "Lucas Mendes", nota: 5, comentario: "Conceitos complexos explicados de forma muito acessível.", data: "12/02/2026" }
    ],
    5: [
        { usuario: "Juliana Frota", nota: 5, comentario: "Mudou completamente a minha rotina diária.", data: "01/05/2026" }
    ],
    6: [
        { usuario: "Gabriela Nunes", nota: 4, comentario: "Fascinante panorama sobre a evolução da nossa espécie.", data: "20/01/2026" }
    ],
    7: [
        { usuario: "Rodrigo Santos", nota: 5, comentario: "Leitura leve, divertida e muito encantadora.", data: "03/03/2026" }
    ],
    8: [
        { usuario: "Felipe Melo", nota: 5, comentario: "O ápice da ficção científica política e planetária.", data: "09/05/2026" }
    ]
};

// Gerenciamento de Estado Global com LocalStorage
let carrinho = [];
let bancoAvaliacoes = JSON.parse(localStorage.getItem('bibliotech_avaliacoes')) || AVALIACOES_PADRAO;
let notaSelecionadaNoForm = 5;

function salvarAvaliacoesNoStorage() {
    localStorage.setItem('bibliotech_avaliacoes', JSON.stringify(bancoAvaliacoes));
}

function obterMediaAvaliacao(idLivro) {
    const lista = bancoAvaliacoes[idLivro] || [];
    if (lista.length === 0) return "5.0";
    const soma = lista.reduce((acc, curr) => acc + curr.nota, 0);
    return (soma / lista.length).toFixed(1);
}

function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

// Renderização Principal do Catálogo
function renderizarLivros(listaDeLivros) {
    const grid = document.getElementById('livros-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    if (listaDeLivros.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-black py-12 text-lg font-medium">Nenhum livro encontrado.</p>`;
        return;
    }

    const fragmento = document.createDocumentFragment();

    listaDeLivros.forEach(livro => {
        const mediaEstrelas = obterMediaAvaliacao(livro.id);
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition duration-300 flex flex-col border border-gray-200";
        
        card.innerHTML = `
            <div class="relative cursor-pointer overflow-hidden group" onclick="abrirModal(${livro.id})">
                <img src="${livro.capa}" alt="Capa do livro ${livro.titulo}" class="w-full h-48 object-cover group-hover:scale-105 transition duration-300" loading="lazy">
                <span class="absolute top-2 right-2 bg-black text-white text-xs font-bold px-2 py-1 rounded-md">
                    <i class="fas fa-star text-white" aria-hidden="true"></i> ${mediaEstrelas}
                </span>
            </div>
            <div class="p-5 flex flex-col flex-grow justify-between">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wide text-black underline">${livro.genero}</span>
                    <h3 onclick="abrirModal(${livro.id})" class="font-bold text-base text-black mt-0.5 leading-tight hover:underline cursor-pointer line-clamp-2">${livro.titulo}</h3>
                    <p class="text-xs text-black mt-1 font-medium">Por: ${livro.autor}</p>
                    <p class="text-xl font-black text-black mt-3">${formatarMoeda(livro.preco)}</p>
                </div>
                <div class="mt-4 pt-3 border-t border-gray-200 flex gap-2">
                    <button onclick="abrirModal(${livro.id})" class="flex-1 text-xs bg-gray-100 hover:bg-gray-200 text-black font-bold py-2 rounded-lg transition cursor-pointer border border-gray-300">
                        Detalhes
                    </button>
                    <button onclick="adicionarAoCarrinho(${livro.id})" class="flex-1 text-xs bg-black hover:bg-gray-800 text-white font-bold py-2 rounded-lg transition shadow-sm flex items-center justify-center gap-1 cursor-pointer">
                        <i class="fas fa-cart-plus" aria-hidden="true"></i> Comprar
                    </button>
                </div>
            </div>
        `;
        fragmento.appendChild(card);
    });

    grid.appendChild(fragmento);
}

// Controle do Carrinho
function abrirCarrinho() {
    const fundo = document.getElementById('carrinho-fundo');
    const lateral = document.getElementById('carrinho-lateral');
    if (!fundo || !lateral) return;

    fundo.classList.remove('hidden');
    lateral.classList.remove('hidden');
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
        // CORRIGIDO: Removido o bug estrutural 'House: 1' presente anteriormente
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
            <div class="text-center py-12 text-black font-medium flex flex-col items-center gap-2">
                <i class="fas fa-shopping-basket text-4xl text-black" aria-hidden="true"></i>
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
            div.className = "flex gap-3 bg-gray-50 p-3 rounded-xl border border-gray-200 items-center";
            div.innerHTML = `
                <img src="${item.capa}" alt="Miniatura ${item.titulo}" class="w-12 h-16 object-cover rounded-md shadow-sm">
                <div class="flex-grow min-w-0">
                    <h4 class="font-bold text-sm text-black truncate">${item.titulo}</h4>
                    <p class="text-xs text-black font-bold">${formatarMoeda(item.preco)}</p>
                    <div class="flex items-center gap-2 mt-1">
                        <button onclick="alterarQuantidade(${item.id}, -1)" class="w-5 h-5 bg-white border border-gray-300 rounded text-xs flex items-center justify-center hover:bg-gray-100 font-bold cursor-pointer text-black" aria-label="Diminuir quantidade">-</button>
                        <span class="text-xs font-bold text-black">${item.quantidade}</span>
                        <button onclick="alterarQuantidade(${item.id}, 1)" class="w-5 h-5 bg-white border border-gray-300 rounded text-xs flex items-center justify-center hover:bg-gray-100 font-bold cursor-pointer text-black" aria-label="Aumentar quantidade">+</button>
                    </div>
                </div>
                <button onclick="removerDoCarrinho(${item.id})" class="text-black hover:text-gray-600 p-1 text-sm cursor-pointer" aria-label="Remover item">
                    <i class="fas fa-trash text-black" aria-hidden="true"></i>
                </button>
            `;
            fragmento.appendChild(div);
        });
        container.appendChild(fragmento);
    }

    let frete = 0;
    const META_FRETE_GRATIS = 150.00;
    const VALOR_FRETE_PADRAO = 15.00;

    if (subtotal > 0) {
        if (subtotal >= META_FRETE_GRATIS) {
            frete = 0;
            if (avisoFrete) avisoFrete.innerHTML = "🎉 <span class='text-black font-black underline'>Você ganhou Frete Grátis!</span>";
            if (barraFrete) {
                barraFrete.style.width = "100%";
                barraFrete.className = "bg-black h-2 rounded-full transition-all duration-500";
            }
        } else {
            frete = VALOR_FRETE_PADRAO;
            const faltam = META_FRETE_GRATIS - subtotal;
            if (avisoFrete) avisoFrete.innerHTML = `Faltam <span class='text-black font-bold underline'>${formatarMoeda(faltam)}</span>`;
            
            if (barraFrete) {
                const porcentagem = (subtotal / META_FRETE_GRATIS) * 100;
                barraFrete.style.width = `${porcentagem}%`;
                barraFrete.className = "bg-black h-2 rounded-full transition-all duration-500";
            }
        }
    }

    const valorTotal = subtotal + frete;

    contador.innerText = totalItens;
    subtotalElemento.innerText = formatarMoeda(subtotal);
    freteElemento.innerText = (frete === 0 && subtotal > 0) ? "Grátis" : formatarMoeda(frete);
    totalElemento.innerText = formatarMoeda(valorTotal);
}

// Modal de Detalhes com Aba de Comentários Integrada
function abrirModal(id) {
    const livro = LIVROS.find(l => l.id === id);
    if (!livro) return;

    const modal = document.getElementById('modal-detalhes');
    const conteudo = document.getElementById('modal-conteudo');
    if (!modal || !conteudo) return;

    const mediaEstrelas = obterMediaAvaliacao(livro.id);
    const avaliacoesDoLivro = bancoAvaliacoes[id] || [];

    // OTIMIZAÇÃO: Geração limpa e sem reflow da lista de comentários
    let comentariosHtml = "";
    if (avaliacoesDoLivro.length === 0) {
        comentariosHtml = `<p class="text-sm text-black opacity-60 italic">Nenhuma avaliação enviada para este livro ainda.</p>`;
    } else {
        avaliacoesDoLivro.forEach(av => {
            let estrelasHtml = "";
            for (let i = 1; i <= 5; i++) {
                estrelasHtml += i <= av.nota 
                    ? `<i class="fas fa-star text-black text-xs"></i>` 
                    : `<i class="far fa-star text-black text-xs"></i>`;
            }
            comentariosHtml += `
                <div class="border-b border-gray-200 pb-3 mb-3 last:border-b-0 last:pb-0 last:mb-0">
                    <div class="flex justify-between items-center mb-0.5">
                        <span class="font-bold text-sm text-black">${av.usuario}</span>
                        <span class="text-xs text-black opacity-50 font-medium">${av.data}</span>
                    </div>
                    <div class="flex gap-0.5 mb-1">${estrelasHtml}</div>
                    <p class="text-sm text-black leading-relaxed">${av.comentario}</p>
                </div>
            `;
        });
    }

    conteudo.innerHTML = `
        <div class="flex flex-col md:flex-row">
            <img src="${livro.capa}" alt="Capa de ${livro.titulo}" class="w-full md:w-64 h-64 md:h-auto object-cover">
            <div class="p-6 flex flex-col justify-between flex-grow text-black">
                <div>
                    <span class="text-xs font-bold uppercase text-black tracking-wider underline">${livro.genero}</span>
                    <h2 class="text-2xl font-bold text-black mt-1 mb-1">${livro.titulo}</h2>
                    <p class="text-black text-xs mb-4 font-medium">Por: <span class="font-bold">${livro.autor}</span></p>
                    
                    <div class="grid grid-cols-3 gap-2 bg-gray-100 p-2.5 rounded-xl text-center text-xs font-bold text-black mb-4 border border-gray-200">
                        <div><p class="text-black font-normal opacity-70">Ano</p><p class="text-black">${livro.ano}</p></div>
                        <div><p class="text-black font-normal opacity-70">Páginas</p><p class="text-black">${livro.paginas}</p></div>
                        <div><p class="text-black font-normal opacity-70">Avaliação</p><p class="text-black"><i class="fas fa-star text-black" aria-hidden="true"></i> ${mediaEstrelas}</p></div>
                    </div>

                    <h4 class="text-xs font-bold text-black uppercase tracking-wider mb-1">Sinopse</h4>
                    <p class="text-black text-sm leading-relaxed mb-6">${livro.sinopse}</p>

                    <div class="pt-4 border-t border-gray-200 mb-6">
                        <h4 class="text-xs font-bold text-black uppercase tracking-wider mb-3">Avaliações dos Leitores (${avaliacoesDoLivro.length})</h4>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-200 max-h-48 overflow-y-auto space-y-3">
                            ${comentariosHtml}
                        </div>
                    </div>

                    <div class="pt-4 border-t border-gray-200 mb-2">
                        <h4 class="text-xs font-bold text-black uppercase tracking-wider mb-3">Deixe seu Comentário</h4>
                        <form onsubmit="salvarNovaAvaliacaoForm(event, ${livro.id})" class="space-y-3">
                            <input type="text" id="form-usuario" placeholder="Seu nome completo" required class="w-full text-sm px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black bg-white text-black">
                            
                            <div class="flex items-center gap-2">
                                <span class="text-xs font-bold text-black uppercase tracking-wider">Sua Nota:</span>
                                <div class="flex gap-1">
                                    <i id="star-input-1" onclick="definirNotaNoForm(1)" class="fas fa-star text-black cursor-pointer text-base"></i>
                                    <i id="star-input-2" onclick="definirNotaNoForm(2)" class="fas fa-star text-black cursor-pointer text-base"></i>
                                    <i id="star-input-3" onclick="definirNotaNoForm(3)" class="fas fa-star text-black cursor-pointer text-base"></i>
                                    <i id="star-input-4" onclick="definirNotaNoForm(4)" class="fas fa-star text-black cursor-pointer text-base"></i>
                                    <i id="star-input-5" onclick="definirNotaNoForm(5)" class="fas fa-star text-black cursor-pointer text-base"></i>
                                </div>
                            </div>

                            <textarea id="form-comentario" placeholder="O que você achou desta obra?" rows="2" required class="w-full text-sm px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-1 focus:ring-black bg-white text-black resize-none"></textarea>
                            <button type="submit" class="text-xs bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-lg transition cursor-pointer shadow-sm">
                                Publicar Avaliação
                            </button>
                        </form>
                    </div>
                </div>

                <div class="pt-4 border-t border-gray-200 flex items-center justify-between gap-4 mt-4">
                    <div>
                        <p class="text-xs text-black font-medium opacity-70">Preço</p>
                        <p class="text-2xl font-black text-black">${formatarMoeda(livro.preco)}</p>
                    </div>
                    <button onclick="adicionarAoCarrinho(${livro.id}); fecharModal();" class="bg-black hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-xl transition shadow-md flex items-center gap-2 cursor-pointer">
                        <i class="fas fa-shopping-basket" aria-hidden="true"></i> Adicionar ao Carrinho
                    </button>
                </div>
            </div>
        </div>
    `;

    notaSelecionadaNoForm = 5;
    definirNotaNoForm(5);

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.style.opacity = "1";
        modal.firstElementChild.classList.remove('scale-95');
    }, 20);
}

// Manipulação do Formulário Dinâmico de Estrelas
function definirNotaNoForm(nota) {
    notaSelecionadaNoForm = nota;
    for (let i = 1; i <= 5; i++) {
        const estrela = document.getElementById(`star-input-${i}`);
        if (estrela) {
            estrela.className = i <= nota 
                ? "fas fa-star text-black cursor-pointer text-base" 
                : "far fa-star text-black cursor-pointer text-base";
        }
    }
}

function salvarNovaAvaliacaoForm(event, idLivro) {
    event.preventDefault();
    
    const usuarioInput = document.getElementById('form-usuario');
    const comentarioInput = document.getElementById('form-comentario');
    
    if (!usuarioInput || !comentarioInput) return;

    const novaAvaliacao = {
        usuario: usuarioInput.value.trim(),
        nota: notaSelecionadaNoForm,
        comentario: comentarioInput.value.trim(),
        data: new Date().toLocaleDateString('pt-BR')
    };

    if (!bancoAvaliacoes[idLivro]) {
        bancoAvaliacoes[idLivro] = [];
    }

    bancoAvaliacoes[idLivro].push(novaAvaliacao);
    salvarAvaliacoesNoStorage();

    // Feedback visual
    alert("Sua avaliação foi publicada e processada com sucesso!");

    // Atualiza o grid principal para refletir a nova média imediatamente
    const barraBusca = document.getElementById('search-input');
    const termo = barraBusca ? barraBusca.value.trim().toLowerCase() : "";
    const filtrados = LIVROS.filter(l => 
        l.titulo.toLowerCase().includes(termo) || 
        l.autor.toLowerCase().includes(termo) || 
        l.genero.toLowerCase().includes(termo)
    );
    renderizarLivros(filtrados);

    // Reabre o próprio modal atualizado com o novo comentário listado
    abrirModal(idLivro);
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

function finalizarCompra() {
    if (carrinho.length === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    const subtotalStr = document.getElementById('carrinho-subtotal')?.innerText || 'R$ 0,00';
    const freteStr = document.getElementById('carrinho-frete')?.innerText || 'R$ 0,00';
    const totalStr = document.getElementById('carrinho-total')?.innerText || 'R$ 0,00';
    
    alert(`🎉 COMPRA CONCLUÍDA OBRIGADO!\n\n📋 Resumo do Pedido:\n🔹 Produtos: ${subtotalStr}\n🚚 Frete: ${freteStr}\n💰 Total Pago: ${totalStr}\n\nObrigado por testar o sistema minimalista da Livraria para Baiho!`);
    
    carrinho = [];
    atualizarCarrinho();
    fecharCarrinho();
}

// Sistema de Busca Integrado
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

document.addEventListener('DOMContentLoaded', () => {
    renderizarLivros(LIVROS);
});
