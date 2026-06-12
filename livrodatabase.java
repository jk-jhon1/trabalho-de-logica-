package database;

import model.Avaliacao;
import model.Livro;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class LivroDatabase {
    // Armazenamento em memória thread-safe (substitui a tabela do banco de dados)
    private static final Map<Integer, Livro> tabelaLivros = new ConcurrentHashMap<>();

    // Bloco estático para popular os dados iniciais assim que o sistema inicia
    static {
        carregarCatalogoInicial();
    }

    private static void carregarCatalogoInicial() {
        Livro l1 = new Livro(1, "O Senhor dos Anéis: A Sociedade do Anel", "J.R.R. Tolkien", "Fantasia", 1954, 436, 59.90, 
            "https://images.unsplash.com/photo-1629992184111-37ea190444b3?w=500&auto=format&fit=crop&q=60", 
            "Em uma terra fantástica e cheia de magia, um jovem hobbit chamado Frodo Bolseiro recebe a tarefa de destruir o Anel Um...");
        l1.adicionarAvaliacao(new Avaliacao("João Silva", 5, "Uma obra-prima absoluta da fantasia medieval!"));
        l1.adicionarAvaliacao(new Avaliacao("Mariana Costa", 5, "O melhor livro que já li."));
        tabelaLivros.put(l1.getId(), l1);

        Livro l2 = new Livro(2, "1984", "George Orwell", "Distopia", 1949, 336, 39.90, 
            "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60", 
            "Winston Smith vive aprisionado na engrenagem totalitária de uma sociedade dominada pelo Grande Irmão.");
        l2.adicionarAvaliacao(new Avaliacao("Ricardo Alves", 5, "Uma crítica genial e atemporal."));
        tabelaLivros.put(l2.getId(), l2);

        Livro l3 = new Livro(3, "Dom Casmurro", "Machado de Assis", "Literatura", 1899, 256, 24.90, 
            "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60", 
            "Bento Santiago narra suas memórias e reconta sua história de amor com a enigmática Capitu.");
        l3.adicionarAvaliacao(new Avaliacao("Fernanda Dias", 4, "Clássico nacional. Capitu traiu ou não traiu?"));
        tabelaLivros.put(l3.getId(), l3);

        Livro l4 = new Livro(4, "Uma Breve História do Tempo", "Stephen Hawking", "Ciência", 1988, 256, 45.00, 
            "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60", 
            "Uma das mentes mais brilhantes do nosso tempo guia o leitor leigo através das perguntas mais profundas.");
        l4.adicionarAvaliacao(new Avaliacao("Lucas Mendes", 5, "Conceitos complexos explicados de forma muito acessível."));
        tabelaLivros.put(l4.getId(), l4);

        Livro l5 = new Livro(5, "Hábitos Atômicos", "James Clear", "Desenvolvimento", 2018, 320, 52.80, 
            "https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=500&auto=format&fit=crop&q=60", 
            "Um guia prático e científico sobre como pequenas mudanças diárias podem gerar resultados extraordinários.");
        l5.adicionarAvaliacao(new Avaliacao("Juliana Frota", 5, "Mudou completamente a minha rotina diária."));
        tabelaLivros.put(l5.getId(), l5);

        Livro l6 = new Livro(6, "Sapiens: Uma Breve História", "Yuval Noah Harari", "História", 2011, 464, 64.90, 
            "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=500&auto=format&fit=crop&q=60", 
            "O autor repassa a história da humanidade desde a evolução dos primeiros humanos.");
        l6.adicionarAvaliacao(new Avaliacao("Gabriela Nunes", 4, "Fascinante panorama sobre a evolução da nossa espécie."));
        tabelaLivros.put(l6.getId(), l6);

        Livro l7 = new Livro(7, "O Hobbit", "J.R.R. Tolkien", "Fantasia", 1937, 328, 49.90, 
            "https://images.unsplash.com/photo-1610116306796-6fea9f4fae38?w=500&auto=format&fit=crop&q=60", 
            "Bilbo Bolseiro era um hobbit de vida pacata até que o mago Gandalf o contrata para uma jornada.");
        l7.adicionarAvaliacao(new Avaliacao("Rodrigo Santos", 5, "Leitura leve, divertida e muito encantadora."));
        tabelaLivros.put(l7.getId(), l7);

        Livro l8 = new Livro(8, "Duna", "Frank Herbert", "Ficção Científica", 1965, 680, 69.90, 
            "https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500&auto=format&fit=crop&q=60", 
            "Ambientado num futuro distante num planeta desértico Arrakis, a obra acompanha o jovem Paul Atreides.");
        l8.adicionarAvaliacao(new Avaliacao("Felipe Melo", 5, "O ápice da ficção científica política e planetária."));
        tabelaLivros.put(l8.getId(), l8);
    }

    // OPERAÇÕES DO BANCO DE DADOS (Substitutos de Queries SQL)

    // Substitui: SELECT * FROM livros
    public static List<Livro> obterTodos() {
        return new ArrayList<>(tabelaLivros.values());
    }

    // Substitui: SELECT * FROM livros WHERE id = ?
    public static Livro obterPorId(int id) {
        return tabelaLivros.get(id);
    }

    // Substitui: INSERT INTO avaliacoes (livro_id, ...) VALUES (?, ...)
    public static boolean salvarAvaliacao(int idLivro, Avaliacao avaliacao) {
        Livro livro = tabelaLivros.get(idLivro);
        if (livro != null) {
            livro.adicionarAvaliacao(avaliacao);
            return true;
        }
        return false;
    }

    // Substitui: SELECT * FROM livros WHERE titulo LIKE %termo% OR autor LIKE %termo% OR genero LIKE %termo%
    public static List<Livro> buscarPorTermo(String termo) {
        if (termo == null || termo.trim().isEmpty()) {
            return obterTodos();
        }
        
        String termoLower = termo.toLowerCase().trim();
        return tabelaLivros.values().stream()
                .filter(l -> l.getTitulo().toLowerCase().contains(termoLower) ||
                             l.getAutor().toLowerCase().contains(termoLower) ||
                             l.getGenero().toLowerCase().contains(termoLower))
                .collect(Collectors.toList());
    }
}
