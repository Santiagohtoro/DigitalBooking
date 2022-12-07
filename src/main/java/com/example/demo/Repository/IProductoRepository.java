package com.example.demo.Repository;

import com.example.demo.Model.Categoria;
import com.example.demo.Model.Ciudad;
import com.example.demo.Model.Politica;
import com.example.demo.Model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
    @Query(value = "SELECT * FROM producto WHERE TITULO = ?1", nativeQuery = true)
    Producto findByTitulo(String titulo);


    @Query(value = "SELECT producto.* FROM categoria INNER JOIN producto ON producto.categoria_id=categoria.id WHERE categoria.titulo= ?1", nativeQuery = true)
    List<Producto> findByCategoria(String categoria);

    @Query(value = "SELECT p FROM producto p WHERE p NOT IN(SELECT r.producto FROM reserva r WHERE ?2 BETWEEN r.fecha_inicial AND r.fecha_fin OR ?3 BETWEEN r.fecha_inicial AND r.fecha_fin)" + "AND p.ciudad IN (SELECT c FROM ciudad c WHERE c.ciudad = ?1)", nativeQuery = true)
    List<Producto> findByCiudadAndFecha(String city, LocalDate fechaInicio, LocalDate fechaFin);
}
