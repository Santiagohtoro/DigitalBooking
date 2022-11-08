package com.example.demo.Model;

import javax.persistence.*;

@Entity
public class Caracteristica {

    @Id
    @SequenceGenerator(name = "caracteristica_sequence", sequenceName = "caracteristica_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "caracteristica_sequence")
    private Long id;
    

    public Caracteristica() {
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
}


