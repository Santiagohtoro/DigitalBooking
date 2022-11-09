package com.example.demo.Repository;

import com.example.demo.Model.Politica;
import com.example.demo.Model.Producto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface IPoliticaRepository extends JpaRepository<Politica, Long> {
    @Query(value = "SELECT * FROM politica WHERE TITULO = ?1", nativeQuery = true)
    Politica findByTitulo(String titulo);
}

