package model;

import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class Livro {
    private final int id;
    private final String titulo;
    private final String autor;
    private final String genero;
    private final int ano;
    private final int paginas;
    private final BigDecimal preco; // Corrigido para BigDecimal
    private final String capa;
    private final String sinopse;
    
    // CORREÇÃO: Lista thread-safe para evitar quebras em ambientes concorrentes (múltiplos acessos)
    private final List<Avaliacao> avaliacoes = new CopyOnWriteArrayList<>();

    public Livro(int id, String titulo, String autor, String genero, int ano, int paginas, BigDecimal preco, String capa, String sinopse) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.ano = ano;
        this.paginas = paginas;
        this.preco = preco;
        this.capa = capa;
        this.sinopse = sinopse;
    }

    // Otimização da média com Java Streams de forma limpa e arredondamento correto
    public double getMediaAvaliacao() {
        if (avaliacoes.isEmpty()) return 5.0;
        
        double media = avaliacoes.stream()
                .mapToInt(Avaliacao::getNota)
                .average()
                .orElse(5.0);
                
        return BigDecimal.valueOf(media).setScale(1, RoundingMode.HALF_UP).doubleValue();
    }

    public void adicionarAvaliacao(Avaliacao avaliacao) {
        if (avaliacao != null) {
            this.avaliacoes.add(avaliacao);
        }
    }

    public int getId() { return id; }
    public String getTitulo() { return titulo; }
    public String getAutor() { return autor; }
    public String getGenero() { return genero; }
    public int getAno() { return ano; }
    public int getPaginas() { return paginas; }
    public BigDecimal getPreco() { return preco; }
    public String getCapa() { return capa; }
    public String getSinopse() { return sinopse; }
    public List<Avaliacao> getAvaliacoes() { return avaliacoes; }
}
