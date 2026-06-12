class Avaliacao {
    constructor(usuario, nota, comentario) {
        this.usuario = usuario;
        this.nota = nota; // Esperado um valor de 1 a 5
        this.comentario = comentario;
        this.data = new Date().toLocaleDateString('pt-BR');
    }
}

class Livro {
    constructor(id, titulo, autor) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.avaliacoes = [];
    }

    // Método para adicionar uma nova avaliação
    adicionarAvaliacao(usuario, nota, comentario = "") {
        if (nota < 1 || nota > 5) {
            return console.error("Erro: A nota deve ser entre 1 e 5.");
        }
        
        const novaAvaliacao = new Avaliacao(usuario, nota, comentario);
        this.avaliacoes.push(novaAvaliacao);
        console.log(`Avaliação de ${usuario} adicionada com sucesso!`);
    }

    // Método para calcular a média de estrelas do livro
    obterMediaAvaliacoes() {
        if (this.avaliacoes.length === 0) {
            return "Nenhuma avaliação ainda.";
        }

        const somaNotas = this.avaliacoes.reduce((soma, aval) => soma + aval.nota, 0);
        const media = somaNotas / this.avaliacoes.length;
        
        return media.toFixed(1); // Retorna a média com 1 casa decimal (ex: 4.5)
    }

    // Exibir todas as avaliações
    mostrarAvaliacoes() {
        console.log(`\n--- Avaliações para: ${this.titulo} ---`);
        console.log(`Média Geral: ${this.obterMediaAvaliacoes()} ⭐`);
        this.avaliacoes.forEach(av => {
            console.log(`[${av.data}] ${av.usuario} deu ${av.nota}⭐ - "${av.comentario}"`);
        });
    }
}

// Testando o sistema:
const meuLivro = new Livro(1, "O Senhor dos Anéis", "J.R.R. Tolkien");

meuLivro.adicionarAvaliacao("jhonjk8", 5, "Obra prima da fantasia!");
meuLivro.adicionarAvaliacao("SmoothJhonjk", 4, "Muito bom, mas o começo é um pouco lento.");

meuLivro.mostrarAvaliacoes();
