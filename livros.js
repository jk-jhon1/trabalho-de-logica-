// Banco de dados expandido com muito mais detalhes por livro
const livros = [
    {
        id: 1,
        titulo: "O Senhor dos Anéis: A Sociedade do Anel",
        autor: "J.R.R. Tolkien",
        genero: "Fantasia",
        ano: 1954,
        paginas: 436,
        avaliacao: 4.9,
        capa: "https://images.unsplash.com/photo-1629992184111-37ea190444b3?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Em uma terra fantástica e cheia de magia, um jovem hobbit chamado Frodo Bolseiro recebe a tarefa de destruir o Anel Um, uma arma de poder absoluto criada pelo Senhor Sombrio, Sauron. Para isso, ele contará com a ajuda de guerreiros, elfos, anões e magos."
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        genero: "Ficção Científica / Distopia",
        ano: 1949,
        paginas: 336,
        avaliacao: 4.8,
        capa: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Winston Smith vive aprisionado na engrenagem totalitária de uma sociedade dominada pelo Grande Irmão. Lá, pensar diferente é um crime de morte. Uma crítica feroz ao autoritarismo e à vigilância governamental constante."
    },
    {
        id: 3,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        genero: "Literatura Brasileira",
        ano: 1899,
        paginas: 256,
        avaliacao: 4.6,
        capa: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60",
        disponivel: false,
        sinopse: "Bento Santiago, o Dom Casmurro, narra suas memórias e reconta sua história de amor desde a infância com a enigmática Capitu. A obra gira em torno de um dos maiores mistérios da literatura: Capitu traiu ou não traiu Bentinho?"
    },
    {
        id: 4,
        titulo: "Uma Breve História do Tempo",
        autor: "Stephen Hawking",
        genero: "Ciência / Astrofísica",
        ano: 1988,
        paginas: 256,
        avaliacao: 4.7,
        capa: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Uma das mentes mais brilhantes do nosso tempo guia o leitor leigo através das perguntas mais profundas sobre o universo: Como ele começou? O tempo pode correr para trás? O que são buracos negros?"
    },
    {
        id: 5,
        titulo: "Hábitos Atômicos",
        autor: "James Clear",
        genero: "Desenvolvimento Pessoal",
        ano: 2018,
        paginas: 320,
        avaliacao: 4.9,
        capa: "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Um guia prático e científico sobre como pequenas mudanças diárias (os hábitos atômicos) podem gerar resultados extraordinários a longo prazo na sua carreira, saúde e relacionamentos."
    },
    {
        id: 6,
        titulo: "Sapiens: Uma Breve História da Humanidade",
        autor: "Yuval Noah Harari",
        genero: "História / Antropologia",
        ano: 2011,
        paginas: 464,
        avaliacao: 4.8,
        capa: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "O autor repassa a história da humanidade desde a evolução dos primeiros humanos na Idade da Pedra até as revoluções política, científica e tecnológica do século XXI, questionando como nos tornamos os donos do planeta."
    },
    {
        id: 7,
        titulo: "O Hobbit",
        autor: "J.R.R. Tolkien",
        genero: "Fantasia",
        ano: 1937,
        paginas: 328,
        avaliacao: 4.8,
        capa: "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Bilbo Bolseiro era um hobbit de vida calma e pacata. Tudo muda quando o mago Gandalf e uma companhia de treze anões o contratam para uma jornada perigosa para recuperar um tesouro guardado pelo temível dragão Smaug."
    },
    {
        id: 8,
        titulo: "O Alquimista",
        autor: "Paulo Coelho",
        genero: "Ficção / Filosofia",
        ano: 1888,
        paginas: 172,
        avaliacao: 4.5,
        capa: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60",
        disponivel: false,
        sinopse: "A mística história de Santiago, um jovem pastor andaluz que viaja de sua terra natal em busca de um tesouro escondido nas pirâmides do Egito. Uma fábula sobre seguir seus sonhos e ouvir seu coração."
    },
    {
        id: 9,
        titulo: "Duna",
        autor: "Frank Herbert",
        genero: "Ficção Científica",
        ano: 1965,
        paginas: 680,
        avaliacao: 4.7,
        capa: "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "Ambientado num futuro distante no planeta desértico Arrakis, a obra acompanha o jovem Paul Atreides cuja família aceita o controle do planeta, a única fonte da substância mais valiosa do universo: a Especiaria."
    },
    {
        id: 10,
        titulo: "Pai Rico, Pai Pobre",
        autor: "Robert Kiyosaki",
        genero: "Finanças / Negócios",
        ano: 1997,
        paginas: 336,
        avaliacao: 4.6,
        capa: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?w=500&auto=format&fit=crop&q=60",
        disponivel: true,
        sinopse: "O livro discute a mentalidade financeira que diferencia os ricos dos demais. Kiyosaki usa sua própria infância para mostrar como os pais devem ensinar os filhos sobre dinheiro para que alcancem a independência financeira."
    }
];

// Renderizar livros no Grid principal
function renderizarLivros(listaDeLivros) {
    const grid = document.getElementById('livros-grid');
    grid.innerHTML = '';

    if (listaDeLivros.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-12 text-lg">Nenhum livro corresponde à busca.</p>`;
        return;
    }

    listaDeLivros.forEach(livro => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition duration-300 flex flex-col border border-gray-100";
        
        card.innerHTML = `
            <img src="${livro.capa}" alt="${livro.titulo}" class="w-full h-48 object-cover">
            <div class="p-5 flex-col flex-grow flex justify-between">
                <div>
                    <div class="flex justify-between items-center mb-1">
                        <span class="text-xs font-bold uppercase tracking-wide text-indigo-600">${livro.genero.split(' / ')[0]}</span>
                        <span class="text-xs text-amber-500 font-semibold"><i class="fas fa-star"></i> ${livro.avaliacao}</span>
                    </div>
                    <h3 class="font-bold text-base text-gray-900 leading-tight line-clamp-2">${livro.titulo}</h3>
                    <p class="text-xs text-gray-500 mt-1">Por: ${livro.autor}</p>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span class="px-2.5 py-1 text-xs font-semibold rounded-full ${livro.disponivel ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                        ${livro.disponivel ? 'Disponível' : 'Emprestado'}
                    </span>
                    <button onclick="abrirModal(${livro.id})" class="text-xs bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-3 py-2 rounded-lg transition shadow-sm">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Funções do Modal de Detalhes
function abrirModal(id) {
    const livro = livros.find(l => l.id === id);
    if (!livro) return;

    const modal = document.getElementById('modal-detalhes');
    const conteudo = document.getElementById('modal-conteudo');

    conteudo.innerHTML = `
        <div class="flex flex-col md:flex-row">
            <!-- Imagem lateral do modal -->
            <img src="${livro.capa}" alt="${livro.titulo}" class="w-full md:w-64 h-64 md:h-auto object-cover">
            <!-- Texto informativo -->
            <div class="p-6 flex flex-col justify-between">
                <div>
                    <span class="text-xs font-bold uppercase text-indigo-600 tracking-wider">${livro.genero}</span>
                    <h2 class="text-2xl font-bold text-gray-900 mt-1 mb-2">${livro.titulo}</h2>
                    <p class="text-gray-700 font-medium text-sm mb-4">Autor: <span class="text-gray-600 font-normal">${livro.autor}</span></p>
                    
                    <div class="grid grid-cols-3 gap-2 bg-gray-50 p-3 rounded-xl text-center text-xs font-semibold text-gray-600 mb-4">
                        <div><p class="text-gray-400 font-normal">Ano</p><p class="text-gray-900 text-sm">${livro.ano}</p></div>
                        <div><p class="text-gray-400 font-normal">Páginas</p><p class="text-gray-900 text-sm">${livro.paginas}</p></div>
                        <div><p class="text-gray-400 font-normal">Avaliação</p><p class="text-amber-500 text-sm"><i class="fas fa-star"></i> ${livro.avaliacao}</p></div>
                    </div>

                    <h4 class="text-sm font-bold text-gray-900 mb-1">Sinopse:</h4>
                    <p class="text-gray-600 text-sm leading-relaxed mb-4">${livro.sinopse}</p>
                </div>

                <div class="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span class="px-3 py-1 text-sm font-semibold rounded-full ${livro.disponivel ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                        Status: ${livro.disponivel ? 'Disponível para leitura' : 'Indisponível no momento'}
                    </span>
                </div>
            </div>
        </div>
    `;

    // Transição visual do Modal
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

// Fechar modal ao clicar fora da caixa branca
document.getElementById('modal-detalhes').addEventListener('click', function(e) {
    if (e.target === this) fecharModal();
});

// Sistema de Busca Inteligente (Busca por título, autor, gênero ou ano)
const barraBusca = document.getElementById('search-input');
barraBusca.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    
    const livrosFiltrados = livros.filter(livro => {
        return livro.titulo.toLowerCase().includes(termo) || 
               livro.autor.toLowerCase().includes(termo) || 
               livro.genero.toLowerCase().includes(termo) ||
               livro.ano.toString().includes(termo);
    });
    
    renderizarLivros(livrosFiltrados);
});

// Inicia o app
renderizarLivros(livros);
