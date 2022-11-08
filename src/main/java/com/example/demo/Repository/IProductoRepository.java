package com.example.demo.Repository;

import com.example.demo.Model.Categoria;
import com.example.demo.Model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IProductoRepository extends JpaRepository<Producto, Long> {
    @Query(value = "SELECT * FROM producto WHERE TITULO = ?1", nativeQuery = true)
    Producto findByTitulo(String titulo);
}
