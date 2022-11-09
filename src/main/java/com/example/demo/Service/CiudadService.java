
package com.example.demo.Service;

import com.example.demo.Repository.ICiudadRepository;
import com.example.demo.Model.Ciudad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class CiudadService {

    @Autowired
    private ICiudadRepository ciudadRepository;

    public CiudadService(ICiudadRepository ciudadRepository) {
        this.ciudadRepository = ciudadRepository;
    }

    public CiudadService() {
    }

    public Ciudad findById(Long id){
        Optional<Ciudad> ciudad = ciudadRepository.findById(id);
        if(ciudad.isPresent()){
            return ciudad.get();
        } else {
            return null;
        }
    }

    public List<Ciudad> findAll(){
        return ciudadRepository.findAll();
    }

    public Ciudad findByNombre(String nombre){
        return ciudadRepository.findByNombre(nombre);
    }

    public Ciudad create(Ciudad ciudad){
        if(findByNombre(ciudad.getCiudad()) != null){
            return findByNombre(ciudad.getCiudad());
        } else {
            return ciudadRepository.save(ciudad);
        }
    }

    public void delete(Long id){
        Ciudad ciudad = ciudadRepository.findById(id).get();
        ciudadRepository.delete(ciudad);
    }

    public Ciudad update(Ciudad ciudad){
        Ciudad ciud;
        if(ciudadRepository.existsById(ciudad.getId())){
            ciud = ciudadRepository.save(ciudad);
        } else {
            ciud = null;
        }
        return ciud;
    }
}