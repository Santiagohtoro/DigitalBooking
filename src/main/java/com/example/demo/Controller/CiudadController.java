

package com.example.demo.Controller;

import com.example.demo.Service.CiudadService;
import com.example.demo.Model.Ciudad;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/ciudades")
public class CiudadController {
    @Autowired
    CiudadService ciudadService;

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable Long id){
        Ciudad c = ciudadService.findById(id);

        if(c == null){
            return new ResponseEntity("No se encontró una ciudad con el id: " + id, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity("Se ha encontrado con ese id la ciudad: " + c.getCiudad(), HttpStatus.OK);
        }
    }

    @GetMapping("/todos")
    public ResponseEntity findAll(){
        List<Ciudad> city = ciudadService.findAll();

        if(city == null){
            return new ResponseEntity("No hay ciudades disponibles", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity("Se han encontrado las siguientes ciudades: " + city.listIterator() , HttpStatus.OK);
        }
    }

    @PostMapping("/crear")
    public ResponseEntity create(@RequestBody Ciudad ciudad){
            if(ciudad.getCiudad() == null || ciudad.getPais() == null){
                return new ResponseEntity("No se puede crear la ciudad porque hay datos faltantes", HttpStatus.NOT_ACCEPTABLE);
            } else{
                ciudadService.create(ciudad);
              return new ResponseEntity("Se ha creado la ciudad: " + ciudad.getCiudad(), HttpStatus.OK);
        }
    }

    @DeleteMapping("/eliminar")
    public ResponseEntity delete(Long id){
        Ciudad ciud = ciudadService.findById(id);
        if(ciud == null){
            return new ResponseEntity("No se pudo eliminar porque no se encontró la ciudad con el id: " + id, HttpStatus.BAD_REQUEST);
        } else {
            ciudadService.delete(id);
            return new ResponseEntity("Se ha eliminado la ciudad" + ciud.getCiudad() + " con éxito", HttpStatus.OK);
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity update(@RequestBody Ciudad ciudad){
        if(ciudadService.findById(ciudad.getId()) == null){
            return new ResponseEntity("No se ha podido actualizar porque no se encontró la ciudad con el id: " + ciudad.getId(), HttpStatus.BAD_REQUEST);
        } else {
            ciudadService.update(ciudad);
            return new ResponseEntity("Se ha actualizado la ciudad " + ciudad.getCiudad() + " con éxito", HttpStatus.OK);
        }
    }

}


