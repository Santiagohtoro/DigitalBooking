package com.example.demo.Repository;

import com.example.demo.Model.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICiudadRepository extends JpaRepository<Ciudad, Long> {
    @Query(value = "SELECT * FROM ciudad WHERE TITULO = ?1", nativeQuery = true)
    Ciudad findByTitulo(String titulo);
}
