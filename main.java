import database;
import model.Avaliacao;
import model.Livro;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("=== TESTANDO BANCO DE DADOS EM JAVA (SEM SQL) ===\n");

        // 1. Buscando todos os livros cadastrados na memória
        List<Livro> catalogoCompleto = LivroDatabase.obterTodos();
        System.out.println("Total de livros carregados: " + catalogoCompleto.size());

        // 2. Simulando uma pesquisa por filtro (como a barra de busca do site)
        System.out.println("\n-> Resultados da busca por 'Tolkien':");
        List<Livro> buscaFiltro = LivroDatabase.buscarPorTermo("Tolkien");
        buscaFiltro.forEach(l -> System.out.println(" - " + l.getTitulo() + " [" + l.getGenero() + "]"));

        // 3. Adicionando uma nova avaliação dinamicamente ao livro de ID 2 (1984)
        System.out.println("\n-> Adicionando avaliação ao livro de ID 2 (1984)...");
        Avaliacao novaNota = new Avaliacao("Carlos Eduardo", 4, "Impactante e assustadoramente atual.");
        LivroDatabase.salvarAvaliacao(2, novaNota);

        // 4. Exibindo os dados atualizados em tempo real do livro modificado
        Livro livroModificado = LivroDatabase.obterPorId(2);
        System.out.println("\nDados atualizados de '1984':");
        System.out.println("Nova Média de Estrelas: " + livroModificado.getMediaAvaliacao() + " ⭐");
        System.out.println("Quantidade total de Comentários: " + livroModificado.getAvaliacoes().size());
        
        System.out.println("\nHistórico de Avaliações impresso do Objeto:");
        livroModificado.getAvaliacoes().forEach(av -> 
            System.out.println(" [" + av.getData() + "] " + av.getUsuario() + " deu " + av.getNota() + " estrelas -> " + av.getComentario())
        );
    }
}
