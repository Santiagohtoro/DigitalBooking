package com.example.demo.Repository;

import com.example.demo.Model.Categoria;
import com.example.demo.Model.Politica;
import com.example.demo.Model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
    @Query(value = "SELECT * FROM producto WHERE TITULO = ?1", nativeQuery = true)
    Producto findByTitulo(String titulo);

    @Query(value = "SELECT * FROM producto WHERE CIUDAD = ?1", nativeQuery = true)
    List<Producto> findByCiudad(String ciudad);
}
