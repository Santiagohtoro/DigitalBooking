package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@Entity
public class Ciudad {

    @Id
    @SequenceGenerator(name = "ciudad_sequence", sequenceName = "ciudad_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ciudad_sequence")
    private Long id;
    private String ciudad;
    private String pais;
    @OneToMany(mappedBy = "ciudad", cascade = CascadeType.ALL)
    private Set<Producto> productos = new HashSet<>();
    @OneToMany(mappedBy = "ciudad", cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<User> users = new HashSet<>();
    

    public Ciudad() {
    }

    public Ciudad(Long id, String ciudad, String pais) {
        this.id = id;
        this.ciudad = ciudad;
        this.pais = pais;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCiudad() {
        return ciudad;
    }

    public void setCiudad(String ciudad) {
        this.ciudad = ciudad;
    }

    public String getPais() {
        return pais;
    }

    public void setPais(String pais) {
        this.pais = pais;
    }

    @Override
    public String toString() {
        return "Ciudad de " +
                "id: " + id +
                ", nombre: " + ciudad + '\'' +
                ", pais: " + pais + '\'';
    }
}
