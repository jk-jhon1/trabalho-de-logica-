import database.LivroDatabase;
import model.Endereco;
import model.Livro;
import model.Pedido;
import service.FreteService;

import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
        System.out.println("==================================================");
        System.out.println("   LIVRARIA PARA BAICHO - MOTOR DE LOGÍSTICA VERIFICADO     ");
        System.out.println("==================================================");
        System.out.println("Sede Operacional: " + FreteService.SEDE_LOJA + "\n");

        // Carrega livros simulados do banco em memória
        Livro l1 = LivroDatabase.obterPorId(1); // R$ 59.90
        Livro l2 = LivroDatabase.obterPorId(3); // R$ 24.90
        Livro l3 = LivroDatabase.obterPorId(8); // R$ 69.90

        // ----------------------------------------------------------------------
        // TESTE 1: Cliente no Centro (Distância curta -> Frete dinâmico baixo)
        // ----------------------------------------------------------------------
        System.out.println("--- PROCESSANDO PEDIDO #1 (Bairro: Centro) ---");
        Endereco entregaCentro = new Endereco("Rua Victor do Amaral", "500", "Centro", "Araucária", "83702-000");
        List<Livro> carrinho1 = new ArrayList<>();
        if (l1 != null) carrinho1.add(l1);
        
        Pedido pedido1 = new Pedido(carrinho1, entregaCentro);
        imprimirNotaFiscal(pedido1);

        // ----------------------------------------------------------------------
        // TESTE 2: Cliente no Capela Velha (Distância longa -> Frete maior)
        // ----------------------------------------------------------------------
        System.out.println("\n--- PROCESSANDO PEDIDO #2 (Bairro: Capela Velha) ---");
        Endereco entregaCapela = new Endereco("Avenida das Nações", "1520", "Capela Velha", "Araucária", "83705-000");
        List<Livro> carrinho2 = new ArrayList<>();
        if (l2 != null) carrinho2.add(l2);
        
        Pedido pedido2 = new Pedido(carrinho2, entregaCapela);
        imprimirNotaFiscal(pedido2);

        // ----------------------------------------------------------------------
        // TESTE 3: Compra de alto valor (Subtotal > R$ 150.00 -> Frete Grátis)
        // ----------------------------------------------------------------------
        System.out.println("\n--- PROCESSANDO PEDIDO #3 (Elegível a Frete Grátis) ---");
        Endereco entregaCosteira = new Endereco("Rua Ceará", "45", "Costeira", "Araucária", "83709-210");
        List<Livro> carrinho3 = new ArrayList<>();
        if (l1 != null) carrinho3.add(l1);
        if (l2 != null) carrinho3.add(l2);
        if (l3 != null) carrinho3.add(l3);
        
        Pedido pedido3 = new Pedido(carrinho3, entregaCosteira);
        imprimirNotaFiscal(pedido3);
    }

    private static void imprimirNotaFiscal(Pedido pedido) {
        double km = FreteService.calcularDistanciaEmKm(pedido.getEnderecoEntrega());
        System.out.println("ID Localizador: #" + pedido.getIdPedido());
        System.out.println("Destino Final : " + pedido.getEnderecoEntrega());
        System.out.printf("Rota Traçada  : %.2f KM medidos da sede.\n", km);
        System.out.println("Produtos:");
        pedido.getItens().forEach(i -> System.out.println(" * " + i.getTitulo() + " -> R$ " + i.getPreco()));
        
        System.out.println("Subtotal      : R$ " + pedido.getSubtotal());
        if (pedido.getValorFrete().signum() == 0) {
            System.out.println("Frete Logíst. : R$ 0,00 (PROMOÇÃO: FRETE GRÁTIS! 🎉)");
        } else {
            System.out.println("Frete Logíst. : R$ " + pedido.getValorFrete() + " (Calculado a R$ 0,30/KM)");
        }
        System.out.println("TOTAL PEDIDO  : R$ " + pedido.getValorTotal());
        System.out.println("--------------------------------------------------");
    }
}
