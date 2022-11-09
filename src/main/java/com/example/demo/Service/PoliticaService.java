package com.example.demo.Service;

import com.example.demo.Model.Politica;
import com.example.demo.Repository.IPoliticaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PoliticaService {
    @Autowired
    private IPoliticaRepository politicaRepository;

    public PoliticaService() {
    }

    public PoliticaService(IPoliticaRepository politicaRepository) {
        this.politicaRepository = politicaRepository;
    }

    public Politica findById(Long id){
        Optional<Politica> politica = politicaRepository.findById(id);
        if(politica.isPresent()){
            return politica.get();
        } else {
            return null;
        }
    }

    public List<Politica> findAll(){
        return politicaRepository.findAll();
    }

    public Politica findByTitulo(String titulo){

        return politicaRepository.findByTitulo(titulo);
    }

    public Politica create(Politica politica){
        if(findByTitulo(politica.getTitulo()) != null){
            return findByTitulo(politica.getTitulo());
        } else {
            return politicaRepository.save(politica);
        }
    }

    public void delete(Long id){
        Politica politica = politicaRepository.findById(id).get();
        politicaRepository.delete(politica);
    }

    public Politica update(Politica politica){
        Politica pol;
        if(politicaRepository.existsById(politica.getId())){
            pol = politicaRepository.save(politica);
        } else {
            pol = null;
        }
        return pol;
    }
}