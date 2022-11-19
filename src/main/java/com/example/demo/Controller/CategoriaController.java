package com.example.demo.Controller;

import com.example.demo.Service.CategoriaService;
import com.example.demo.Model.Categoria;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/categorias")
public class CategoriaController {
    @Autowired
    CategoriaService categoriaService;

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable Long id){
        Categoria c = categoriaService.findById(id);

        if(c == null){
            return new ResponseEntity("No se encontró una categoría con el id: " + id, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(c, HttpStatus.OK);
        }
    }

    @GetMapping("/todos")
    public ResponseEntity findAll(){
        List<Categoria> cats = categoriaService.findAll();

        if(cats == null){
            return new ResponseEntity("No hay categorías disponibles", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(cats, HttpStatus.OK);
        }
    }

    @PostMapping("/crear")
    public ResponseEntity create(@RequestBody Categoria categoria){
            if(categoria.getTitulo() == null || categoria.getDescripcion() == null || categoria.getImagen() == null){
                return new ResponseEntity("No se puede crear la categoría porque hay datos faltantes", HttpStatus.NOT_ACCEPTABLE);
            } else{
                categoriaService.create(categoria);
              return new ResponseEntity("Se ha creado la categoría: " + categoria.getTitulo(), HttpStatus.OK);
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        Categoria cat = categoriaService.findById(id);
        if(cat != null){
            categoriaService.delete(id);
            return new ResponseEntity("Se ha eliminado la categoría " + cat.getTitulo() + " con éxito", HttpStatus.OK);
        } else {
            return new ResponseEntity("No se pudo eliminar porque no se encontró la categoría con el id: " + id, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity update(@RequestBody Categoria categoria){
        if(categoriaService.findById(categoria.getId()) == null){
            return new ResponseEntity("No se ha podido actualizar porque no se encontró la categoría con el id: " + categoria.getId(), HttpStatus.BAD_REQUEST);
        } else {
            categoriaService.update(categoria);
            return new ResponseEntity("Se ha actualizado la categoría " + categoria.getTitulo() + " con éxito", HttpStatus.OK);
        }
    }

}
