package com.example.demo.Repository;

import com.example.demo.Model.Imagen;
import com.example.demo.Model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IImagenRepository extends JpaRepository<Imagen, Long> {
    @Query(value = "SELECT * FROM imagen WHERE TITULO = ?1", nativeQuery = true)
    Imagen findByTitulo(String titulo);
}

