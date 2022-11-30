package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class Imagen {
    @Id
    @SequenceGenerator(name = "producto_sequence", sequenceName = "producto_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "producto_sequence")
    private Long id;
    private String titulo;
    private String url;
    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "producto_id")
    private Producto producto;
    @JsonIgnore
    @OneToOne(mappedBy = "imagen")
    private Categoria categoria;



    public Imagen(Long id, String titulo, String url) {
        this.id = id;
        this.titulo = titulo;
        this.url = url;
    }

    public Imagen() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    @Override
    public String toString() {
        return "Imagen de " +
                "id: " + id +
                ", titulo: " + titulo + '\'' +
                "y url: " + url + '\'';
    }
}
