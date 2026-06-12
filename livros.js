// Banco de dados simulado de livros
const livros = [
    {
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        genero: "Fantasia",
        capa: "https://images.unsplash.com/photo-1629992184111-37ea190444b3?w=500&auto=format&fit=crop&q=60",
        disponivel: true
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        genero: "Distopia",
        capa: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60",
        disponivel: true
    },
    {
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        genero: "Clássico",
        capa: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60",
        disponivel: false
    },
    {
        titulo: "Uma Breve História do Tempo",
        autor: "Stephen Hawking",
        genero: "Ciência",
        capa: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60",
        disponivel: true
    }
];

// Função para renderizar os livros na tela
function renderizarLivros(listaDeLivros) {
    const grid = document.getElementById('livros-grid');
    grid.innerHTML = ''; // Limpa o grid

    if (listaDeLivros.length === 0) {
        grid.innerHTML = `<p class="col-span-full text-center text-gray-500 py-8">Nenhum livro encontrado.</p>`;
        return;
    }

    listaDeLivros.forEach(livro => {
        const card = document.createElement('div');
        card.className = "bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col border border-gray-100";
        
        card.innerHTML = `
            <img src="${livro.capa}" alt="${livro.titulo}" class="w-full h-48 object-cover">
            <div class="p-5 flex-col flex-grow flex justify-between">
                <div>
                    <span class="text-xs font-bold uppercase tracking-wide text-indigo-600">${livro.genero}</span>
                    <h3 class="font-bold text-lg text-gray-900 mt-1 leading-tight">${livro.titulo}</h3>
                    <p class="text-sm text-gray-600 mt-1">Por: ${livro.autor}</p>
                </div>
                <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span class="px-2.5 py-1 text-xs font-semibold rounded-full ${livro.disponivel ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}">
                        ${livro.disponivel ? 'Disponível' : 'Emprestado'}
                    </span>
                    <button class="text-sm bg-indigo-50 hover:bg-indigo-100 text-indigo-600 font-medium px-3 py-1.5 rounded-lg transition">
                        Ver detalhes
                    </button>
                </div>
            </div>
        `;
        grid.appendChild(card);
    });
}

// Sistema de Busca
const barraBusca = document.getElementById('search-input');
barraBusca.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    
    const livrosFiltrados = livros.filter(livro => {
        return livro.titulo.toLowerCase().includes(termo) || 
               livro.autor.toLowerCase().includes(termo) || 
               livro.genero.toLowerCase().includes(termo);
    });
    
    renderizarLivros(livrosFiltrados);
});

// Inicializa a página mostrando todos os livros
renderizarLivros(livros);
