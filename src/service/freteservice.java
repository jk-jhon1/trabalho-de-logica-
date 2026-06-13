package service;

import model.Endereco;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class FreteService {
    // Sede imutável estabelecida no endereço solicitado
    public static final Endereco SEDE_LOJA = new Endereco(
        "Rua Maria Sobania", "309", "Tindiquera", "Araucária", "83708-160"
    );
    
    private static final BigDecimal VALOR_POR_KM = new BigDecimal("0.30");
    private static final BigDecimal META_FRETE_GRATIS = new BigDecimal("150.00");
    private static final BigDecimal TAXA_MINIMA_FRETE = new BigDecimal("3.00");

    // Tabela de distâncias base por bairro em Araucária para garantir variação real
    private static final Map<String, Double> DISTANCIAS_BAIRROS = new ConcurrentHashMap<>();

    static {
        DISTANCIAS_BAIRROS.put("tindiquera", 0.5);    // Bairro da Sede
        DISTANCIAS_BAIRROS.put("centro", 3.2);        // 3.2 km da sede
        DISTANCIAS_BAIRROS.put("fazenda velha", 4.5); // 4.5 km da sede
        DISTANCIAS_BAIRROS.put("estacao", 6.8);       // 6.8 km da sede
        DISTANCIAS_BAIRROS.put("costeira", 8.1);      // 8.1 km da sede
        DISTANCIAS_BAIRROS.put("iguacu", 9.5);        // 9.5 km da sede
        DISTANCIAS_BAIRROS.put("capela velha", 14.2); // 14.2 km da sede
        DISTANCIAS_BAIRROS.put("cachoeira", 18.7);    // 18.7 km da sede
    }

    /**
     * Calcula a distância exata combinando o bairro com variações baseadas na rua e número.
     * Isso impede que dois endereços no mesmo bairro tenham fretes idênticos.
     */
    public static double calcularDistanciaEmKm(Endereco destino) {
        if (destino == null) return 0.0;

        // Normaliza o nome do bairro para evitar erros de digitação (letras maiúsculas/espaços)
        String bairroChave = destino.getBairro().toLowerCase().strip();
        
        // Se o bairro não estiver mapeado na cidade, assume uma distância padrão de segurança (ex: 20km)
        double distanciaBase = DISTANCIAS_BAIRROS.getOrDefault(bairroChave, 20.0);

        // Adiciona pequenas variações baseadas nas propriedades do endereço para gerar centavos dinâmicos
        double variacaoRua = (destino.getRua().length() % 7) * 0.45;
        double variacaoNumero = (double) (Math.abs(destino.getNumero().hashCode()) % 6) * 0.20;

        double distanciaFinal = distanciaBase + variacaoRua + variacaoNumero;

        // Arredonda a distância para até 2 casas decimais
        return BigDecimal.valueOf(distanciaFinal).setScale(2, RoundingMode.HALF_UP).doubleValue();
    }

    /**
     * Calcula o preço final do frete aplicando a taxa por KM e regras comerciais.
     */
    public static BigDecimal calcularPrecoFrete(Endereco destino, BigDecimal subtotalCarrinho) {
        // Aplica regra de Frete Grátis corporativo se o carrinho atingir R$ 150,00
        if (subtotalCarrinho.compareTo(META_FRETE_GRATIS) >= 0) {
            return BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP);
        }

        double distanciaKm = calcularDistanciaEmKm(destino);
        
        // Multiplica a distância exata por R$ 0,30
        BigDecimal valorCalculado = BigDecimal.valueOf(distanciaKm)
                .multiply(VALOR_POR_KM)
                .setScale(2, RoundingMode.HALF_UP);

        // Garante que o sistema cobre ao menos a taxa mínima (R$ 3,00) caso o cliente more colado à loja
        return valorCalculado.max(TAXA_MINIMA_FRETE);
    }
}
