package com.example.demo.Model;


import javax.persistence.*;



@Entity
public class Categoria {

    @Id
    @SequenceGenerator(name = "categoria_sequence", sequenceName = "categoria_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categoria_sequence")
    private Long id;
    private String titulo;
    private String descripcion;
    private String imagen;

    public Categoria() {
    }

    public Categoria(Long id, String titulo, String descripcion, String imagen) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.imagen = imagen;
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

    public String getImagen() {
        return imagen;
    }

    public void setImagen(String imagen) {
        this.imagen = imagen;
    }

    @Override
    public String toString() {
        return "Categoria: " + titulo + '\'' +
                "de id: " + id +
                "y descripcion: '" + descripcion + '\'' +
                '}';
    }
}