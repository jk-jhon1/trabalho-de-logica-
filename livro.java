package model;

import java.util.ArrayList;
import java.util.List;

public class Livro {
    private int id;
    private String titulo;
    private String autor;
    private String genero;
    private int ano;
    private int paginas;
    private double preco;
    private String capa;
    private String sinopse;
    private final List<Avaliacao> avaliacoes;

    public Livro(int id, String titulo, String autor, String genero, int ano, int paginas, double preco, String capa, String sinopse) {
        this.id = id;
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.ano = ano;
        this.paginas = paginas;
        this.preco = preco;
        this.capa = capa;
        this.sinopse = sinopse;
        this.avaliacoes = new ArrayList<>();
    }

    // Método otimizado para calcular a média de estrelas (com 1 casa decimal)
    public double getMediaAvaliacao() {
        if (avaliacoes.isEmpty()) return 5.0;
        
        double soma = avaliacoes.stream()
                                .mapToDouble(Avaliacao::getNota)
                                .sum();
        
        double media = soma / avaliacoes.size();
        return Math.round(media * 10.0) / 10.0;
    }

    public void adicionarAvaliacao(Avaliacao avaliacao) {
        this.avaliacoes.add(avaliacao);
    }

    // Getters essenciais
    public int getId() { return id; }
    public String getTitulo() { return titulo; }
    public String getAutor() { return autor; }
    public String getGenero() { return genero; }
    public int getAno() { return ano; }
    public int getPaginas() { return paginas; }
    public double getPreco() { return preco; }
    public String getCapa() { return capa; }
    public String getSinopse() { return sinopse; }
    public List<Avaliacao> getAvaliacoes() { return avaliacoes; }
}
