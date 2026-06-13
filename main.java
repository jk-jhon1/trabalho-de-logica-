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
        System.out.println("   BIBLIOTECH - MOTOR DE DISTRIBUIÇÃO OTIMIZADO   ");
        System.out.println("==================================================");
        System.out.println("Sede Operacional: " + FreteService.SEDE_LOJA + "\n");

        Livro l1 = LivroDatabase.obterPorId(1);
        Livro l2 = LivroDatabase.obterPorId(3);
        Livro l3 = LivroDatabase.obterPorId(8);

        // TESTE 1: Compra comum onde incide o frete por KM
        System.out.println("--- PROCESSANDO PEDIDO #1 (Taxa por KM Ativa) ---");
        Endereco entrega1 = new Endereco("Avenida das Nações", "1520", "Estação", "Araucária", "83705-000");
        List<Livro> c1 = new ArrayList<>();
        if (l1 != null) c1.add(l1);
        
        Pedido pedido1 = new Pedido(c1, entrega1);
        imprimirNotaFiscal(pedido1);

        // TESTE 2: Compra com valor alto atingindo o frete grátis corporativo
        System.out.println("\n--- PROCESSANDO PEDIDO #2 (Regra de Frete Grátis) ---");
        Endereco entrega2 = new Endereco("Rua Ceará", "45", "Costeira", "Araucária", "83709-210");
        List<Livro> c2 = new ArrayList<>();
        if (l1 != null) c2.add(l1);
        if (l2 != null) c2.add(l2);
        if (l3 != null) c2.add(l3);
        
        Pedido pedido2 = new Pedido(c2, entrega2);
        imprimirNotaFiscal(pedido2);
    }

    private static void imprimirNotaFiscal(Pedido pedido) {
        double km = FreteService.calcularDistanciaEmKm(pedido.getEnderecoEntrega());
        System.out.println("ID Localizador: #" + pedido.getIdPedido());
        System.out.println("Destino Final : " + pedido.getEnderecoEntrega());
        System.out.printf("Rota Traçada  : %.2f KM a partir da sede.\n", km);
        System.out.println("Produtos:");
        pedido.getItens().forEach(i -> System.out.println(" * " + i.getTitulo() + " -> R$ " + i.getPreco()));
        
        System.out.println("Subtotal      : R$ " + pedido.getSubtotal());
        if (pedido.getValorFrete().signum() == 0) {
            System.out.println("Frete Logíst. : R$ 0,00 (ISENÇÃO ATIVA 🎉)");
        } else {
            System.out.println("Frete Logíst. : R$ " + pedido.getValorFrete() + " (R$ 0,30/KM)");
        }
        System.out.println("TOTAL PEDIDO  : R$ " + pedido.getValorTotal());
        System.out.println("--------------------------------------------------");
    }
}
