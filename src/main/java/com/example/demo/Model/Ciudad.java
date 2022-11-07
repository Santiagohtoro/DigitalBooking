package com.example.demo.Model;

import javax.persistence.*;


@Entity
public class Ciudad {

    @Id
    @SequenceGenerator(name = "ciudad_sequence", sequenceName = "ciudad_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ciudad_sequence")
    private Long id;
    

    public Ciudad() {
    }

    public Ciudad(Long id) {
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
