package com.example.demo.Service;

import com.example.demo.Model.Producto;
import com.example.demo.Repository.IProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    @Autowired
    private IProductoRepository productoRepository;

    public ProductoService(IProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    public ProductoService() {
    }

    public Producto findById(Long id){
        Optional<Producto> producto = productoRepository.findById(id);
        if(producto.isPresent()){
            return producto.get();
        } else {
            return null;
        }
    }

    public List<Producto> findByCiudad(String ciudad){
        if (productoRepository.findByCiudad(ciudad) != null){
            return productoRepository.findByCiudad(ciudad);
        } else {
            return null;
        }
    }

    public List<Producto> findByCategoria(String categoria){
        if (productoRepository.findByCategoria(categoria) != null){
            return productoRepository.findByCategoria(categoria);
        } else {
            return null;
        }
    }


    public List<Producto> findAll(){
        return productoRepository.findAll();
    }
    */

    public List<Producto> findAll(){
        List<Producto> producto = productoRepository.findAll();
        Collections.shuffle(producto);
        return producto;
    }
    public Producto findByTitulo(String titulo){
        return productoRepository.findByTitulo(titulo);
    }

    public Producto create(Producto producto){
        if(findByTitulo(producto.getTitulo()) != null){
            return findByTitulo(producto.getTitulo());
        } else {
            return productoRepository.save(producto);
        }
    }

    public void delete(Long id){
        Producto producto = productoRepository.findById(id).get();
        productoRepository.delete(producto);
    }

    public Producto update(Producto producto){
        Producto prod;
        if(productoRepository.existsById(producto.getId())){
           prod = productoRepository.save(producto);
        } else {
            prod = null;
        }
        return prod;
    }
}
