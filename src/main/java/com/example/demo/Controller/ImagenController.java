package com.example.demo.Controller;

import com.example.demo.Model.Imagen;
import com.example.demo.Service.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/imagenes")
public class ImagenController {
    @Autowired
    ImagenService imagenService;

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable Long id){
        Imagen img = imagenService.findById(id);

        if(img == null){
            return new ResponseEntity("No se encontró una imagen con el id: " + id, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity("Se ha encontrado con ese id la imagen: " + img.getTitulo(), HttpStatus.OK);
        }
    }

    @GetMapping("/todos")
    public ResponseEntity findAll(){
        List<Imagen> imagenes = imagenService.findAll();

        if(imagenes == null){
            return new ResponseEntity("No hay imagenes disponibles", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity("Se han encontrado las siguientes imagenes: " + imagenes, HttpStatus.OK);
        }
    }

    @PostMapping("/crear")
    public ResponseEntity create(@RequestBody Imagen imagen){
        if(imagen.getTitulo() == null || imagen.getUrl() == null){
            return new ResponseEntity("No se puede crear la imagen porque hay datos faltantes", HttpStatus.NOT_ACCEPTABLE);
        } else{
            imagenService.create(imagen);
            return new ResponseEntity("Se ha creado la imagen: " + imagen.getTitulo(), HttpStatus.OK);
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        Imagen img = imagenService.findById(id);
        if(img != null){
            imagenService.delete(id);
            return new ResponseEntity("Se ha eliminado la imagen " + img.getTitulo() + " con éxito", HttpStatus.OK);
        } else {
            return new ResponseEntity("No se pudo eliminar porque no se encontró la imagen con el id: " + id, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity update(@RequestBody Imagen imagen){
        if(imagenService.findById(imagen.getId()) == null){
            return new ResponseEntity("No se ha podido actualizar porque no se encontró la imagen con el id: " + imagen.getId(), HttpStatus.BAD_REQUEST);
        } else {
            imagenService.update(imagen);
            return new ResponseEntity("Se ha actualizado la imagen " + imagen.getTitulo() + " con éxito", HttpStatus.OK);
        }
    }
}

