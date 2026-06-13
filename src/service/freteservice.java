package service;

import model.Endereco;

public class FreteService {
    // Definição estática da Sede da Loja conforme solicitado
    public static final Endereco SEDE_LOJA = new Endereco(
        "Rua Maria Sobania", 
        "309", 
        "Tindiquera", 
        "Araucária", // Exemplo de cidade da Região Metropolitana onde fica essa rua
        "83708-160"
    );
    
    private static final double VALOR_POR_KM = 0.30;
    private static final double META_FRETE_GRATIS = 150.00;

    /**
     * Simula o cálculo de distância via rota de GPS entre a sede e o destino.
     * Em produção, isso chamaria uma API do Google Maps passando os dois Enderecos.
     */
    public static double calcularDistanciaEmKm(Endereco destino) {
        // Simulação inteligente baseada no comprimento das strings de endereço para gerar distâncias variadas de teste
        int fatorDistancia = (destino.getRua().length() + destino.getBairro().length()) % 45;
        return fatorDistancia == 0 ? 5.2 : fatorDistancia * 1.4; 
    }

    /**
     * Calcula o valor final do frete com base nas regras de negócio da loja.
     */
    public static double calcularPrecoFrete(Endereco destino, double subtotalCarrinho) {
        // Regra de Frete Grátis mantida para compras acima de R$ 150,00
        if (subtotalCarrinho >= META_FRETE_GRATIS) {
            return 0.0;
        }

        double distanciaKm = calcularDistanciaEmKm(destino);
        double valorCalculado = distanciaKm * VALOR_POR_KM;

        // Garante uma taxa mínima de entrega caso o cliente more muito perto da sede (ex: R$ 3,00)
        return Math.max(valorCalculado, 3.00);
    }
}
