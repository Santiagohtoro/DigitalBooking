package com.example.demo.Service;

import com.example.demo.Repository.ICategoriaRepository;
import com.example.demo.Model.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;



@Service
public class CategoriaService {

    @Autowired
    private ICategoriaRepository categoriaRepository;

    public CategoriaService(ICategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public CategoriaService() {
    }

    public Categoria findById(Long id){
        Optional<Categoria> categoria = categoriaRepository.findById(id);
        if(categoria.isPresent()){
            return categoria.get();
        } else {
            return null;
        }
    }

    public List<Categoria> findAll(){
        return categoriaRepository.findAll();
    }

    public Categoria findByTitulo(String titulo){
        return categoriaRepository.findByTitulo(titulo);
    }

    public Categoria create(Categoria categoria){
        if(findByTitulo(categoria.getTitulo()) != null){
            return findByTitulo(categoria.getTitulo());
        } else {
            return categoriaRepository.save(categoria);
        }
    }

    public void delete(Long id){
        Categoria categoria = categoriaRepository.findById(id).get();
        categoriaRepository.delete(categoria);
    }

    public Categoria update(Categoria categoria){
        Categoria cat;
        if(categoriaRepository.existsById(categoria.getId())){
            cat = categoriaRepository.save(categoria);
        } else {
            cat = null;
        }
        return cat;
    }
}
