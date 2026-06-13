package model;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class Avaliacao {
    private final String usuario;
    private final int nota;
    private final String comentario;
    private final String data;

    public Avaliacao(String usuario, int nota, String comentario) {
        this.usuario = usuario;
        // Restringe a nota matematicamente entre 1 e 5 sem ifs lentos
        this.nota = Math.max(1, Math.min(5, nota));
        this.comentario = comentario;
        // Adicionado também o horário para um histórico mais completo
        this.data = LocalDateTime.now().format(DateTimeFormatter.ofPattern("dd/MM/yyyy HH:mm"));
    }

    public String getUsuario() { return usuario; }
    public int getNota() { return nota; }
    public String getComentario() { return comentario; }
    public String getData() { return data; }
}
