package model;

import service.FreteService;
import java.util.List;

public class Pedido {
    private static int geradorId = 1;
    
    private final int idPedido;
    private final List<Livro> itens;
    private final Endereco enderecoEntrega;
    private final double subtotal;
    private final double valorFrete;
    private final double valorTotal;

    public Pedido(List<Livro> itens, Endereco enderecoEntrega) {
        this.idPedido = geradorId++;
        this.itens = itens;
        this.enderecoEntrega = enderecoEntrega;
        
        // Calcula o subtotal somando o preço dos livros no carrinho
        this.subtotal = itens.stream().mapToDouble(Livro::getPreco).sum();
        
        // Aplica o novo sistema de frete por KM rodado a partir da sede
        this.valorFrete = FreteService.calcularPrecoFrete(enderecoEntrega, this.subtotal);
        this.valorTotal = this.subtotal + this.valorFrete;
    }

    // Getters para a nota fiscal / resumo do pedido
    public int getIdPedido() { return idPedido; }
    public List<Livro> getItens() { return itens; }
    public Endereco getEnderecoEntrega() { return enderecoEntrega; }
    public double getSubtotal() { return subtotal; }
    public double getValorFrete() { return valorFrete; }
    public double getValorTotal() { return valorTotal; }
}
