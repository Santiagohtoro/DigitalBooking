package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
public class Producto {
    @Id
    @SequenceGenerator(name = "producto_sequence", sequenceName = "producto_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "producto_sequence")
    private Long id;
    private String titulo;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "categoria_id", referencedColumnName = "id")
    private Categoria categoria;
    @ManyToOne
    @JoinColumn(name = "ciudad_id")
    private Ciudad ciudad;
    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Imagen> imagenes = new HashSet<>();
    private String descripcion;
    @OneToMany(mappedBy = "producto", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Caracteristica> caracteristicas = new HashSet<>();
    private boolean isAvailable;
    @JoinTable(
            name = "rel_products_policies",
            joinColumns = @JoinColumn(name = "FK_PRODUCT", nullable = false),
            inverseJoinColumns = @JoinColumn(name="FK_POLICY", nullable = false)
    )
    @ManyToMany(cascade = CascadeType.ALL)
    private Set<Politica> politicas = new HashSet<>();


    public Producto(Long id, String titulo, Categoria categoria, Ciudad ciudad, Set<Imagen> imagenes, String descripcion, Set<Caracteristica> caracteristicas, boolean isAvailable, Set<Politica> politicas) {
        this.id = id;
        this.titulo = titulo;
        this.categoria = categoria;
        this.ciudad = ciudad;
        this.imagenes = imagenes;
        this.descripcion = descripcion;
        this.caracteristicas = caracteristicas;
        this.isAvailable = isAvailable;
        this.politicas = politicas;
    }

    public Producto() {
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

    public Categoria getCategoria() {
        return categoria;
    }

    public void setCategoria(Categoria categoria) {
        this.categoria = categoria;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Set<Caracteristica> getCaracteristicas() {
        return caracteristicas;
    }

    public void setCaracteristicas(Set<Caracteristica> caracteristicas) {
        this.caracteristicas = caracteristicas;
    }

    public boolean isAvailable() {
        return isAvailable;
    }

    public void setAvailable(boolean available) {
        isAvailable = available;
    }

    public Set<Politica> getPoliticas() {
        return politicas;
    }

    public void setPoliticas(Set<Politica> politicas) {
        this.politicas = politicas;
    }

    public Set<Imagen> getImagenes() {
        return imagenes;
    }

    public void setImagenes(Set<Imagen> imagenes) {
        this.imagenes = imagenes;
    }
}
