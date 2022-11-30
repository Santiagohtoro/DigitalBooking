package com.example.demo.Model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;

@Entity
@Table(name = "reserva")
public class Reserva {
    @Id
    @SequenceGenerator(name = "reserva_sequence", sequenceName = "reserva_sequence")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reserva_sequence")
    private Long id;
    private LocalTime horaReserva;
    private LocalDate fechaInicial;
    private LocalDate fechaFin;

    @ManyToOne
    @JoinColumn(name = "producto_id")
    private Producto producto;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private AppUser user;

    public Reserva(Long id, LocalTime horaReserva, LocalDate fechaInicial, LocalDate fechaFin, Producto producto, AppUser usuario) {
        this.id = id;
        this.horaReserva = horaReserva;
        this.fechaInicial = fechaInicial;
        this.fechaFin = fechaFin;
        this.producto = producto;
        this.user = usuario;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalTime getHoraReserva() {
        return horaReserva;
    }

    public void setHoraReserva(LocalTime horaReserva) {
        this.horaReserva = horaReserva;
    }

    public LocalDate getFechaInicial() {
        return fechaInicial;
    }

    public void setFechaInicial(LocalDate fechaInicial) {
        this.fechaInicial = fechaInicial;
    }

    public LocalDate getFechaFin() {
        return fechaFin;
    }

    public void setFechaFin(LocalDate fechaFin) {
        this.fechaFin = fechaFin;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    public AppUser getUser() {
        return user;
    }

    public void setUser(AppUser user) {
        this.user = user;
    }
}
