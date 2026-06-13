package database;

import model.Avaliacao;
import model.Livro;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class LivroDatabase {
    private static final Map<Integer, Livro> tabelaLivros = new ConcurrentHashMap<>();

    static {
        carregarCatalogoInicial();
    }

    private static void carregarCatalogoInicial() {
        tabelaLivros.put(1, new Livro(1, "O Senhor dos Anéis: A Sociedade do Anel", "J.R.R. Tolkien", "Fantasia", 1954, 436, new BigDecimal("59.90"), "capa1.jpg", "Sinopse do anel..."));
        tabelaLivros.get(1).adicionarAvaliacao(new Avaliacao("João Silva", 5, "Excelente!"));

        tabelaLivros.put(2, new Livro(2, "1984", "George Orwell", "Distopia", 1949, 336, new BigDecimal("39.90"), "capa2.jpg", "Grande irmão..."));
        
        tabelaLivros.put(3, new Livro(3, "Dom Casmurro", "Machado de Assis", "Literatura", 1899, 256, new BigDecimal("24.90"), "capa3.jpg", "Olhos de ressaca..."));
        
        tabelaLivros.put(8, new Livro(8, "Duna", "Frank Herbert", "Ficção Científica", 1965, 680, new BigDecimal("69.90"), "capa8.jpg", "Onde a especiaria flui..."));
    }

    public static List<Livro> obterTodos() {
        return new ArrayList<>(tabelaLivros.values());
    }

    public static Livro obterPorId(int id) {
        return tabelaLivros.get(id);
    }

    public static boolean salvarAvaliacao(int idLivro, Avaliacao avaliacao) {
        Livro livro = tabelaLivros.get(idLivro);
        if (livro != null && avaliacao != null) {
            livro.adicionarAvaliacao(avaliacao);
            return true;
        }
        return false;
    }

    public static List<Livro> buscarPorTermo(String termo) {
        if (termo == null || termo.strip().isEmpty()) { // Otimizado: .strip() é melhor que .trim() no Java moderno
            return obterTodos();
        }
        
        String termoLower = termo.toLowerCase().strip();
        return tabelaLivros.values().stream()
                .filter(l -> l.getTitulo().toLowerCase().contains(termoLower) ||
                             l.getAutor().toLowerCase().contains(termoLower) ||
                             l.getGenero().toLowerCase().contains(termoLower))
                .collect(Collectors.toList());
    }
}
