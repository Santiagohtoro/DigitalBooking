
package com.example.demo.Repository;

import com.example.demo.Model.Caracteristica;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ICaracteristicaRepository extends JpaRepository<Caracteristica, Long> {
    @Query(value = "SELECT * FROM caracteristica WHERE TITULO = ?1", nativeQuery = true)
    Caracteristica findByTitulo(String titulo);
}

