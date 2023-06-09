package com.example.demo.Repository;

import com.example.demo.Model.Categoria;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICategoriaRepository extends JpaRepository<Categoria, Long> {
    @Query(value = "SELECT * FROM categoria WHERE TITULO = ?1", nativeQuery = true)
    Categoria findByTitulo(String titulo);
}
