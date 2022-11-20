package com.example.demo.Repository;

import com.example.demo.Model.Producto;
import com.example.demo.Model.Reserva;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IReservaRepository extends JpaRepository<Reserva, Long> {
    @Query(value = "SELECT * FROM reserva WHERE PRODUCTO = ?1", nativeQuery = true)
    List<Reserva> findByProducto(String producto);
}
