

package com.example.demo.Controller;

import com.example.demo.Service.CaracteristicaService;
import com.example.demo.Model.Caracteristica;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/caracteristicas")
public class CaracteristicaController {
    @Autowired
    CaracteristicaService caracteristicaService;

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable Long id){
        Caracteristica c = caracteristicaService.findById(id);

        if(c == null){
            return new ResponseEntity("No se encontró una caracteristica con el id: " + id, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(c, HttpStatus.OK);
        }
    }

    @GetMapping("/todos")
    public ResponseEntity findAll(){
        List<Caracteristica> caract = caracteristicaService.findAll();

        if(caract == null){
            return new ResponseEntity("No hay caracteristicas disponibles", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(caract , HttpStatus.OK);
        }
    }

    @PostMapping("/crear")
    public ResponseEntity create(@RequestBody Caracteristica caracteristica){
            if(caracteristica.getTitulo() == null || caracteristica.getDescripcion() == null){
                return new ResponseEntity("No se puede crear la caracteristica porque hay datos faltantes", HttpStatus.NOT_ACCEPTABLE);
            } else{
                caracteristicaService.create(caracteristica);
              return new ResponseEntity("Se ha creado la caracteristica: " + caracteristica.getTitulo(), HttpStatus.OK);
        }
    }

    @DeleteMapping("/eliminar")
    public ResponseEntity delete(Long id){
        Caracteristica caract = caracteristicaService.findById(id);
        if(caract == null){
            return new ResponseEntity("No se pudo eliminar porque no se encontró la caracteristica con el id: " + id, HttpStatus.BAD_REQUEST);
        } else {
            caracteristicaService.delete(id);
            return new ResponseEntity("Se ha eliminado la caracteristica" + caract.getTitulo() + " con éxito", HttpStatus.OK);
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity update(@RequestBody Caracteristica caracteristica){
        if(caracteristicaService.findById(caracteristica.getId()) == null){
            return new ResponseEntity("No se ha podido actualizar porque no se encontró la caracteristica con el id: " + caracteristica.getId(), HttpStatus.BAD_REQUEST);
        } else {
            caracteristicaService.update(caracteristica);
            return new ResponseEntity("Se ha actualizado la caracteristica " + caracteristica.getTitulo() + " con éxito", HttpStatus.OK);
        }
    }

}
