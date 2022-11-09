package com.example.demo.Model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Politica {
    @Id
    @SequenceGenerator(name = "producto_sequence", sequenceName = "producto_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "producto_sequence")
    private Long id;
    private String titulo;
    private String descripcion;
    @ManyToMany(mappedBy = "politicas")
    private Set<Producto> productos;

    public Politica(Long id, String titulo, String descripcion, Set<Producto> productos) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.productos = productos;
    }

    public Politica() {
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

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<Producto> getProductos() {
        return productos;
    }

    public void setProductos(Set<Producto> productos) {
        this.productos = productos;
    }

    @Override
    public String toString() {
        return "Politica de " +
                "id: " + id +
                ", titulo: " + titulo + '\'' +
                ", descripcion: " + descripcion + '\'' +
                ", productos: " + productos;
    }
}
