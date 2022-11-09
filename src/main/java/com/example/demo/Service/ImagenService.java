package com.example.demo.Service;

import com.example.demo.Model.Imagen;
import com.example.demo.Model.Imagen;
import com.example.demo.Repository.IImagenRepository;
import com.example.demo.Repository.IImagenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImagenService {
    @Autowired
    private IImagenRepository imagenRepository;

    public ImagenService(IImagenRepository imagenRepository) {
        this.imagenRepository = imagenRepository;
    }

    public ImagenService() {
    }

    public Imagen findById(Long id){
        Optional<Imagen> imagen = imagenRepository.findById(id);
        if(imagen.isPresent()){
            return imagen.get();
        } else {
            return null;
        }
    }

    public List<Imagen> findAll(){
        return imagenRepository.findAll();
    }

    public Imagen findByTitulo(String titulo){
        return imagenRepository.findByTitulo(titulo);
    }

    public Imagen create(Imagen imagen){
        if(findByTitulo(imagen.getTitulo()) != null){
            return findByTitulo(imagen.getTitulo());
        } else {
            return imagenRepository.save(imagen);
        }
    }

    public void delete(Long id){
        Imagen imagen = imagenRepository.findById(id).get();
        imagenRepository.delete(imagen);
    }

    public Imagen update(Imagen imagen){
        Imagen img;
        if(imagenRepository.existsById(imagen.getId())){
            img = imagenRepository.save(imagen);
        } else {
            img = null;
        }
        return img;
    }
}
