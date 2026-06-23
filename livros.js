// ============================================================================
// COMPONENTE 1: BASE DE DADOS DO CATÁLOGO
// ============================================================================
const catalogoLivros = [
    { id: 1, titulo: "O Senhor dos Anéis: A Sociedade do Anel", autor: "J.R.R. Tolkien", genero: "Fantasia", preco: 59.90, capa: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=200", sinopse: "O início da maior jornada fantástica da literatura mundial.", ano: 1954, paginas: 436, estrelas: 5 },
    { id: 2, titulo: "1984", autor: "George Orwell", genero: "Distopia", preco: 39.90, capa: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=200", sinopse: "O Grande Irmão está de olho em você. Uma crítica severa ao totalitarismo.", ano: 1949, paginas: 336, estrelas: 4 },
    { id: 3, titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Literatura", preco: 24.90, capa: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=200", sinopse: "A clássica história psicológica sobre Capitu, Bentinho e os olhos de ressaca.", ano: 1899, paginas: 256, estrelas: 4 },
    { id: 4, titulo: "O Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasia", preco: 42.90, capa: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=200", sinopse: "A aventura que antecede os eventos de O Senhor dos Anéis.", ano: 1937, paginas: 310, estrelas: 5 },
    { id: 5, titulo: "Admirável Mundo Novo", autor: "Aldous Huxley", genero: "Distopia", preco: 34.90, capa: "https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?q=80&w=200", sinopse: "Uma sociedade controlada por engenharia genética e condicionamento.", ano: 1932, paginas: 312, estrelas: 4 },
    { id: 6, titulo: "O Cortiço", autor: "Aluísio Azevedo", genero: "Literatura", preco: 19.90, capa: "https://images.unsplash.com/photo-1476275466078-4007374efbbe?q=80&w=200", sinopse: "O retrato naturalista da habitação coletiva e do comportamento humano.", ano: 1890, paginas: 288, estrelas: 3 }
];

// Estado global
let carrinho = [];
let livroSelecionadoId = null;
let usuarioLogado = false; // Novo controle de Autenticação

document.addEventListener("DOMContentLoaded", () => {
    renderizarVitrine(catalogoLivros);
});

// ============================================================================
// COMPONENTE 2: MODAL DE DETALHES E AVALIAÇÃO
// ============================================================================
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

// ============================================================================
// COMPONENTE 3: VITRINE E FILTRO
// ============================================================================
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

// ============================================================================
// COMPONENTE 4: CARRINHO E FRETE
// ============================================================================
function adicionarAoCarrinho(id) {
    const livro = catalogoLivros.find(l => l.id === id);
    if (livro) {
        carrinho.push(livro);
        atualizarCarrinhoHTML();
        if (!document.getElementById("resumo-frete").classList.contains("hidden")) calcularFreteEAtualizar();
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
    const rua = document.getElementById('input-rua').value, num = document.getElementById('input-numero').value, bairro = document.getElementById('input-bairro').value;
    if (!rua || !num || !bairro) return alert("Preencha todos os dados de entrega.");

    let valorFrete = (carrinho.length * 2.5) + (bairro.length * 0.5); // Lógica fictícia simplificada
    const totalGeral = calcularSubtotal() + valorFrete;

    document.getElementById('txt-distancia').innerText = `~${(valorFrete/0.3).toFixed(1)} KM`;
    document.getElementById('txt-valor-frete').innerText = `R$ ${valorFrete.toFixed(2)}`;
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
   
    const email = document.getElementById("login-email").value;
    const senha = document.getElementById("login-senha").value;

    if(email && senha) {
        usuarioLogado = true; 
        fecharModalLogin(); 
        concluirCompraSucesso(); 
    }
}

function concluirCompraSucesso() {
    alert("🎉 Pagamento e Pedido Concluídos com Sucesso!\nObrigado por comprar na BiblioTech.");
    
    carrinho = [];
    atualizarCarrinhoHTML();
    
    document.getElementById('input-rua').value = '';
    document.getElementById('input-numero').value = '';
    document.getElementById('input-bairro').value = '';
    
    document.getElementById('resumo-frete').classList.add('hidden');
    document.getElementById('resumo-frete').classList.remove('flex');
}
