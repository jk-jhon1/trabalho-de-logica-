// Catálogo simulado idêntico ao carregado no LivroDatabase do Java
const catalogoLivros = [
    { id: 1, titulo: "O Senhor dos Anéis: A Sociedade do Anel", autor: "J.R.R. Tolkien", genero: "Fantasia", preco: 59.90, capa: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=200", sinopse: "O início da maior jornada fantástica da literatura." },
    { id: 2, titulo: "1984", autor: "George Orwell", genero: "Distopia", preco: 39.90, capa: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?q=80&w=200", sinopse: "O Grande Irmão está de olho em você." },
    { id: 3, titulo: "Dom Casmurro", autor: "Machado de Assis", genero: "Literatura", preco: 24.90, capa: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=200", sinopse: "Capitu tinha ou não olhos de ressaca?" },
    { id: 8, titulo: "Duna", autor: "Frank Herbert", genero: "Ficção Científica", preco: 69.90, capa: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=200", sinopse: "A épica história do planeta desértico Arrakis." }
];

// Estado da aplicação na memória do navegador
let carrinho = [];

// Executa automaticamente ao abrir a página
document.addEventListener("DOMContentLoaded", () => {
    renderizarVitrine(catalogoLivros);
});

// Renderiza os cards de livros na vitrine HTML
function renderizarVitrine(lista) {
    const container = document.getElementById("vitrine-livros");
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = `<p class="text-gray-500 col-span-2">Nenhum livro encontrado para essa busca.</p>`;
        return;
    }

    lista.forEach(livro => {
        const card = `
            <div class="bg-white p-4 rounded-lg shadow hover:shadow-md transition flex flex-col justify-between">
                <div>
                    <div class="h-48 bg-gray-200 rounded mb-4 flex items-center justify-center text-gray-400 font-bold overflow-hidden">
                        <img src="${livro.capa}" alt="${livro.titulo}" class="w-full h-full object-cover">
                    </div>
                    <span class="text-xs font-bold text-blue-600 uppercase tracking-wide">${livro.genero}</span>
                    <h3 class="text-lg font-bold text-gray-800 mt-1 line-clamp-1">${livro.titulo}</h3>
                    <p class="text-sm text-gray-500 mb-2">Por: ${livro.autor}</p>
                    <p class="text-xs text-gray-600 line-clamp-2 mb-4">${livro.sinopse}</p>
                </div>
                <div class="flex items-center justify-between mt-2 border-t border-gray-100 pt-3">
                    <span class="text-xl font-black text-gray-900">R$ ${livro.preco.toFixed(2)}</span>
                    <button onclick="adicionarAoCarrinho(${livro.id})" 
                            class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-1.5 px-3 rounded text-xs transition cursor-pointer">
                        + Adicionar
                    </button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Filtra livros em tempo real pela barra de busca
function filtrarLivros() {
    const termo = document.getElementById("busca-input").value.toLowerCase().trim();
    const filtrados = catalogoLivros.filter(l => 
        l.titulo.toLowerCase().includes(termo) || 
        l.autor.toLowerCase().includes(termo) || 
        l.genero.toLowerCase().includes(termo)
    );
    renderizarVitrine(filtrados);
}

// Adiciona um livro selecionado ao carrinho
function adicionarAoCarrinho(id) {
    const livro = catalogoLivros.find(l => l.id === id);
    if (livro) {
        carrinho.push(livro);
        atualizarCarrinhoHTML();
        
        // Se a caixinha de frete já estiver aberta, força o recálculo dos totais automaticamente
        if (!document.getElementById("resumo-frete").classList.contains("hidden")) {
            calcularFreteEAtualizar();
        }
    }
}

// Remove um livro específico do carrinho pelo índice na lista
function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    atualizarCarrinhoHTML();
    
    if (!document.getElementById("resumo-frete").classList.contains("hidden")) {
        calcularFreteEAtualizar();
    }
}

// Calcula o subtotal puro do carrinho
function calcularSubtotal() {
    return carrinho.reduce((soma, item) => soma + item.preco, 0);
}

// Atualiza a visualização da caixinha do carrinho
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

// O MOTOR DE CÁLCULO DE FRETE (Espelho exato das regras do backend Java)
function calcularFreteEAtualizar() {
    const rua = document.getElementById('input-rua').value;
    const numero = document.getElementById('input-numero').value;
    const bairro = document.getElementById('input-bairro').value;

    // Validação de entrada
    if (!rua || !numero || !bairro) {
        alert("Por favor, informe a rua, o número e escolha o bairro para calcular a entrega!");
        return;
    }

    // Tabela de distâncias base por bairro espelhada do Java (FreteService.java)
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

    // Higienização e padronização da string de busca (Iguala o comportamento do Java)
    const bairroLimpo = bairro.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").trim();
    
    // Obtém a distância cadastrada ou aplica a margem de segurança de 25 KM caso mude o select manualmente
    let distanciaBase = distanciasBairros[bairroLimpo] || 25.0;

    // Simula a variação matemática baseada no hash/tamanho do número para dar centavos dinâmicos reais
    let hashNumero = 0;
    for (let i = 0; i < numero.length; i++) {
        hashNumero = numero.charCodeAt(i) + ((hashNumero << 5) - hashNumero);
    }
    const variacaoNumero = (Math.abs(hashNumero) % 5) * 0.35;
    
    // Distância final calculada
    const distanciaFinal = distanciaBase + variacaoNumero;

    // Constantes de negócio financeiro
    const VALOR_POR_KM = 0.30;
    const META_FRETE_GRATIS = 150.00;
    const TAXA_MINIMA_FRETE = 3.00;

    const subtotalCarrinho = calcularSubtotal();
    let valorFrete = 0.00;

    // Só calcula valor de frete se a compra não atingir a meta corporativa de frete grátis
    if (subtotalCarrinho < META_FRETE_GRATIS) {
        let calculado = distanciaFinal * VALOR_POR_KM;
        valorFrete = Math.max(calculado, TAXA_MINIMA_FRETE);
    }

    const totalGeral = subtotalCarrinho + valorFrete;

    // Injeta os resultados processados de volta no HTML do painel visual
    document.getElementById('txt-distancia').innerText = `${distanciaFinal.toFixed(2)} KM`;
    document.getElementById('txt-valor-frete').innerText = valorFrete === 0 && subtotalCarrinho >= META_FRETE_GRATIS 
        ? "GRÁTIS! 🎉" 
        : `R$ ${valorFrete.toFixed(2)}`;
    document.getElementById('txt-total-geral').innerText = `R$ ${totalGeral.toFixed(2)}`;
    
    // Remove a classe utility do Tailwind que escondia a caixinha de resumo
    document.getElementById('resumo-frete').classList.remove('hidden');
}
