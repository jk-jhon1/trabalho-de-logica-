package model;

import service.FreteService;
import java.math.BigDecimal;
import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

public class Pedido {
    // CORREÇÃO: Gerador de ID atômico (à prova de falhas de concorrência)
    private static final AtomicInteger geradorId = new AtomicInteger(1);
    
    private final int idPedido;
    private final List<Livro> itens;
    private final Endereco enderecoEntrega;
    private final BigDecimal subtotal;
    private final BigDecimal valorFrete;
    private final BigDecimal valorTotal;

    public Pedido(List<Livro> itens, Endereco enderecoEntrega) {
        this.idPedido = geradorId.getAndIncrement();
        this.itens = List.copyOf(itens); // Defesa contra modificações pós-fechamento
        this.enderecoEntrega = enderecoEntrega;
        
        // Redução performática de lista com BigDecimal para somar o subtotal
        this.subtotal = itens.stream()
                .map(Livro::getPreco)
                .reduce(BigDecimal.ZERO, BigDecimal::add);
        
        this.valorFrete = FreteService.calcularPrecoFrete(enderecoEntrega, this.subtotal);
        this.valorTotal = this.subtotal.add(this.valorFrete);
    }

    public int getIdPedido() { return idPedido; }
    public List<Livro> getItens() { return itens; }
    public Endereco getEnderecoEntrega() { return enderecoEntrega; }
    public BigDecimal getSubtotal() { return subtotal; }
    public BigDecimal getValorFrete() { return valorFrete; }
    public BigDecimal getValorTotal() { return valorTotal; }
}
