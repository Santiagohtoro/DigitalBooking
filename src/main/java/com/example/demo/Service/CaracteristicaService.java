

package com.example.demo.Service;

import com.example.demo.Repository.ICaracteristicaRepository;
import com.example.demo.Model.Caracteristica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CaracteristicaService {

    @Autowired
    private ICaracteristicaRepository caracteristicaRepository;

    public CaracteristicaService(ICaracteristicaRepository caracteristicaRepository) {
        this.caracteristicaRepository = caracteristicaRepository;
    }

    public CaracteristicaService() {
    }

    public Caracteristica findById(Long id){
        Optional<Caracteristica> caracteristica = caracteristicaRepository.findById(id);
        if(caracteristica.isPresent()){
            return caracteristica.get();
        } else {
            return null;
        }
    }

    public List<Caracteristica> findAll(){
        return caracteristicaRepository.findAll();
    }

    public Caracteristica findByTitulo(String titulo){
        return caracteristicaRepository.findByTitulo(titulo);
    }

    public Caracteristica create(Caracteristica caracteristica){
        if(findByTitulo(caracteristica.getTitulo()) != null){
            return findByTitulo(caracteristica.getTitulo());
        } else {
            return caracteristicaRepository.save(caracteristica);
        }
    }

    public void delete(Long id){
        Caracteristica caracteristica = caracteristicaRepository.findById(id).get();
        caracteristicaRepository.delete(caracteristica);
    }

    public Caracteristica update(Caracteristica caracteristica){
        Caracteristica caract;
        if(caracteristicaRepository.existsById(caracteristica.getId())){
            caract = caracteristicaRepository.save(caracteristica);
        } else {
            caract = null;
        }
        return caract;
    }
}
