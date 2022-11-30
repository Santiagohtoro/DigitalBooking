package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Caracteristica {
    @Id
    @SequenceGenerator(name = "caracteristica_sequence", sequenceName = "caracteristica_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "caracteristica_sequence")
    private Long id;
    private String titulo;
    private String descripcion;
    @ManyToMany(mappedBy = "caracteristicas", cascade = CascadeType.ALL)
    private Set<Producto> productos = new HashSet<>();
    

    public Caracteristica() {
    }

    public Caracteristica(Long id, String titulo, String descripcion) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }

    public Caracteristica(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return "id: " + id;
    }

    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}


