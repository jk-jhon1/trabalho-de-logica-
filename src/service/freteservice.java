package service;

import model.Endereco;
import java.math.BigDecimal;
import java.math.RoundingMode;

public class FreteService {
    // Sede imutável estabelecida no endereço solicitado
    public static final Endereco SEDE_LOJA = new Endereco(
        "Rua Maria Sobania", "309", "Tindiquera", "Araucária", "83708-160"
    );
    
    // Configurações comerciais imutáveis e precisas
    private static final BigDecimal VALOR_POR_KM = new BigDecimal("0.30");
    private static final BigDecimal META_FRETE_GRATIS = new BigDecimal("150.00");
    private static final BigDecimal TAXA_MINIMA_FRETE = new BigDecimal("3.00");

    /**
     * Gera uma distância determinística com base no destino para fins de teste sem banco.
     */
    public static double calcularDistanciaEmKm(Endereco destino) {
        if (destino == null) return 0.0;
        int hash = Math.abs((destino.getRua() + destino.getBairro()).hashCode());
        int fatorDistancia = (hash % 45) + 1; // Distâncias dinâmicas de 1 a 45 km
        return BigDecimal.valueOf(fatorDistancia * 1.35).setScale(2, RoundingMode.HALF_UP).doubleValue();
    }

    /**
     * Calcula o preço final do frete com regras financeiras estritas.
     */
    public static BigDecimal calcularPrecoFrete(Endereco destino, BigDecimal subtotalCarrinho) {
        // Regra de Frete Grátis
        if (subtotalCarrinho.compareTo(META_FRETE_GRATIS) >= 0) {
            return BigDecimal.ZERO;
        }

        double distanciaKm = calcularDistanciaEmKm(destino);
        BigDecimal valorCalculado = BigDecimal.valueOf(distanciaKm)
                .multiply(VALOR_POR_KM)
                .setScale(2, RoundingMode.HALF_UP);

        // Retorna o valor calculado ou a taxa mínima (o que for maior)
        return valorCalculado.max(TAXA_MINIMA_FRETE);
    }
}
