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
        System.out.println("   BIBLIOTECH - SISTEMA DE LOGÍSTICA E ENTREGAS   ");
        System.out.println("==================================================");
        System.out.println("Sede Cadastrada: " + FreteService.SEDE_LOJA + "\n");

        // Buscando livros do nosso banco em memória para colocar no carrinho
        Livro livro1 = LivroDatabase.obterPorId(1); // O Senhor dos Anéis (R$ 59.90)
        Livro livro2 = LivroDatabase.obterPorId(3); // Dom Casmurro (R$ 24.90)
        Livro livro3 = LivroDatabase.obterPorId(8); // Duna (R$ 69.90)

        // --- CENÁRIO 1: Cliente mora em um bairro distante e faz uma compra comum ---
        System.out.println("--- SIMULANDO PEDIDO 1 (Cobrança por KM) ---");
        Endereco enderecoCliente1 = new Endereco("Avenida das Nações", "1520", "Estação", "Araucária", "83705-000");
        
        List<Livro> carrinho1 = new ArrayList<>();
        carrinho1.add(livro1); // Total: R$ 59.90
        
        Pedido pedido1 = new Pedido(carrinho1, enderecoCliente1);
        exibirResumoPedido(pedido1);

        // --- CENÁRIO 2: Cliente compra vários livros e ultrapassa R$ 150,00 ---
        System.out.println("\n--- SIMULANDO PEDIDO 2 (Frete Grátis atingido) ---");
        Endereco enderecoCliente2 = new Endereco("Rua Ceará", "45", "Costeira", "Araucária", "83709-210");
        
        List<Livro> carrinho2 = new ArrayList<>();
        carrinho2.add(livro1);
        carrinho2.add(livro2);
        carrinho2.add(livro3); // Total de produtos: R$ 154.70 (Elegível a Frete Grátis)
        
        Pedido pedido2 = new Pedido(carrinho2, enderecoCliente2);
        exibirResumoPedido(pedido2);
    }

    private static void exibirResumoPedido(Pedido pedido) {
        double kmCalculado = FreteService.calcularDistanciaEmKm(pedido.getEnderecoEntrega());
        
        System.out.println("Pedido ID: #" + pedido.getIdPedido());
        System.out.println("Destino de Entrega: " + pedido.getEnderecoEntrega());
        System.out.printf("Distância calculada da Sede: %.2f KM\n", kmCalculado);
        System.out.println("Itens no Carrinho:");
        pedido.getItens().forEach(item -> System.out.println(" - " + item.getTitulo() + " (" + String.format("R$ %.2f", item.getPreco()) + ")"));
        
        System.out.printf("Subtotal: R$ %.2f\n", pedido.getSubtotal());
        if (pedido.getValorFrete() == 0.0) {
            System.out.println("Taxa de Entrega: GANHOU FRETE GRÁTIS! 🎉 (Promoção > R$ 150)");
        } else {
            System.out.printf("Taxa de Entrega (KM * R$ 0,30): R$ %.2f\n", pedido.getValorFrete());
        }
        System.out.printf("VALOR TOTAL A PAGAR: R$ %.2f\n", pedido.getValorTotal());
        System.out.println("--------------------------------------------------");
    }
}
