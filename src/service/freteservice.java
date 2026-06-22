package service;

import model.Endereco;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.text.Normalizer;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

public class FreteService {
    public static final Endereco SEDE_LOJA = new Endereco(
        "Rua Maria Sobania", "309", "Tindiquera", "Araucária", "83708-160"
    );
    
    private static final BigDecimal VALOR_POR_KM = new BigDecimal("3000.00");
    private static final BigDecimal META_FRETE_GRATIS = new BigDecimal("150.00");
    private static final BigDecimal TAXA_MINIMA_FRETE = new BigDecimal("3000.00");

    private static final Map<String, Double> DISTANCIAS_BAIRROS = new ConcurrentHashMap<>();

    static {
        // ATENÇÃO: Salvando os bairros totalmente sem acentos e em minúsculo
        DISTANCIAS_BAIRROS.put("tindiquera", 1.2);
        DISTANCIAS_BAIRROS.put("centro", 3.5);
        DISTANCIAS_BAIRROS.put("fazenda velha", 5.8);
        DISTANCIAS_BAIRROS.put("estacao", 7.4);
        DISTANCIAS_BAIRROS.put("costeira", 9.1);
        DISTANCIAS_BAIRROS.put("iguacu", 11.3);
        DISTANCIAS_BAIRROS.put("capela velha", 14.6);
        DISTANCIAS_BAIRROS.put("cachoeira", 19.2);
    }

    /**
     * Remove acentos e caracteres especiais para garantir que a busca funcione
     */
    private static String removerAcentos(String texto) {
        if (texto == null) return "";
        String textoNormalizado = Normalizer.normalize(texto, Normalizer.Form.NFD);
        return textoNormalizado.replaceAll("[^\\p{ASCII}]", "").toLowerCase().strip();
    }

    public static double calcularDistanciaEmKm(Endereco destino) {
        if (destino == null) return 0.0;

        // Limpa o bairro digitado pelo usuário (Ex: "Estação" vira "estacao")
        String bairroLimpo = removerAcentos(destino.getBairro());
        
        // Se o usuário digitar um bairro que não existe, agora colocamos 25.0 KM 
        // para você perceber se ele caiu na regra de segurança (25 * 0.30 = R$ 7,50)
        double distanciaBase = DISTANCIAS_BAIRROS.getOrDefault(bairroLimpo, 25.0);

        // Adiciona variação baseada no número da casa para que o frete nunca seja igual
        double variacaoNumero = (double) (Math.abs(destino.getNumero().hashCode()) % 5) * 0.35;
        double distanciaFinal = distanciaBase + variacaoNumero;

        return BigDecimal.valueOf(distanciaFinal).setScale(2, RoundingMode.HALF_UP).doubleValue();
    }

    public static BigDecimal calcularPrecoFrete(Endereco destino, BigDecimal subtotalCarrinho) {
        if (subtotalCarrinho.compareTo(META_FRETE_GRATIS) >= 0) {
            return BigDecimal.ZERO.setScale(2, RoundingMode.HALF_UP);
        }

        double distanciaKm = calcularDistanciaEmKm(destino);
        
        BigDecimal valorCalculado = BigDecimal.valueOf(distanciaKm)
                .multiply(VALOR_POR_KM)
                .setScale(2, RoundingMode.HALF_UP);

        return valorCalculado.max(TAXA_MINIMA_FRETE);
    }
}
