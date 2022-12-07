package com.example.demo.Service;

import com.example.demo.Model.Producto;
import com.example.demo.Repository.IProductoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class ProductoService {
    @Autowired
    private IProductoRepository productoRepository;
    @Autowired
    CiudadService ciudadService;

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

    public List<Producto> findByCategoria(String categoria){
        if (productoRepository.findByCategoria(categoria) != null){
            return productoRepository.findByCategoria(categoria);
        } else {
            return null;
        }
    }

    public List<Producto> findByCityAndDate(String city, LocalDate fechaInicio, LocalDate fechaFin){
        if (productoRepository.findByCiudadAndFecha(city, fechaInicio, fechaFin) != null){
            return productoRepository.findByCiudadAndFecha(city, fechaInicio, fechaFin);
        } else {
            return null;
        }
    }

/*
    public List<Producto> findAll(){
        return productoRepository.findAll();
    }*/
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
            if(ciudadService.findByNombre(producto.getCiudad().getCiudad())!= null){
                producto.setCiudad(ciudadService.findByNombre(producto.getCiudad().getCiudad()));
            }
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
