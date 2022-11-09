package com.example.demo.Controller;

import com.example.demo.Model.Politica;
import com.example.demo.Service.PoliticaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/politicas")
public class PoliticaController {
    @Autowired
    PoliticaService politicaService;

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable Long id){
        Politica pol = politicaService.findById(id);

        if(pol == null){
            return new ResponseEntity("No se encontró una politica con el id: " + id, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity("Se ha encontrado con ese id la politica: " + pol.getTitulo(), HttpStatus.OK);
        }
    }

    @GetMapping("/todos")
    public ResponseEntity findAll(){
        List<Politica> politicas = politicaService.findAll();

        if(politicas == null){
            return new ResponseEntity("No hay politicas disponibles", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity("Se han encontrado las siguientes politicas: " + politicas, HttpStatus.OK);
        }
    }

    @PostMapping("/crear")
    public ResponseEntity create(@RequestBody Politica politica){
        if(politica.getTitulo() == null || politica.getDescripcion() == null || politica.getProductos() == null){
            return new ResponseEntity("No se puede crear la politica porque hay datos faltantes", HttpStatus.NOT_ACCEPTABLE);
        } else{
            politicaService.create(politica);
            return new ResponseEntity("Se ha creado la politica: " + politica.getTitulo(), HttpStatus.OK);
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        Politica pol = politicaService.findById(id);
        if(pol != null){
            politicaService.delete(id);
            return new ResponseEntity("Se ha eliminado la politica " + pol.getTitulo() + " con éxito", HttpStatus.OK);
        } else {
            return new ResponseEntity("No se pudo eliminar porque no se encontró la politica con el id: " + id, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity update(@RequestBody Politica politica){
        if(politicaService.findById(politica.getId()) == null){
            return new ResponseEntity("No se ha podido actualizar porque no se encontró la politica con el id: " + politica.getId(), HttpStatus.BAD_REQUEST);
        } else {
            politicaService.update(politica);
            return new ResponseEntity("Se ha actualizado la politica " + politica.getTitulo() + " con éxito", HttpStatus.OK);
        }
    }
}
