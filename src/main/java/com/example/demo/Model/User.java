package com.example.demo.Model;

import com.example.demo.Service.CiudadService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name="users")
public class User {
    @Id
    @SequenceGenerator(name = "user_sequence", sequenceName = "user_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_sequence")
    private Long id;
    private String nombre;
    private String apellido;
    private String email;
    private String password;
    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE, fetch = FetchType.LAZY)
    @JoinColumn(name = "roles_id")
    private Role role;
    @ManyToOne
    @JoinColumn(name = "ciudad_id")
    private Ciudad ciudad;
    @OneToMany(mappedBy = "user",  cascade = CascadeType.ALL)
    @JsonIgnore
    private Set<Reserva> reservas = new HashSet<>();

    public User() {
    }

    public User(String name, String surname, String email, String password, Ciudad city) {
        this.nombre = name;
        this.apellido = surname;
        this.email = email;
        this.password = password;
        this.ciudad = city;
    }


    public User(Long id, String nombre, String apellido, String email, String password, Role role, Ciudad ciudad) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.role = role;
        this.ciudad = ciudad;
    }

    public Long getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }


    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public Ciudad getCiudad() {
        return ciudad;
    }

    public void setCiudad(Ciudad ciudad) {
        this.ciudad = ciudad;
    }

    public Set<Reserva> getReservas() {
        return reservas;
    }

    public void setReservas(Set<Reserva> reservas) {
        this.reservas = reservas;
    }
}
