package com.example.demo.Controller;

import com.example.demo.Model.Producto;
import com.example.demo.Service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/productos")
public class ProductoController {
    @Autowired
    ProductoService productoService;

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable Long id){
        Producto prod = productoService.findById(id);

        if(prod == null){
            return new ResponseEntity("No se encontró un producto con el id: " + id, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(prod, HttpStatus.OK);
        }
    }

    @GetMapping("/todos")
    public ResponseEntity findAll(){
        List<Producto> productos = productoService.findAll();

        if(productos == null){
            return new ResponseEntity("No hay productos disponibles", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(productos, HttpStatus.OK);
        }
    }

    @GetMapping("/categoria/{categoria}")
    public ResponseEntity findByCategoria(@PathVariable String categoria){
        List<Producto> productos = productoService.findByCategoria(categoria);

        if(productos == null){
            return new ResponseEntity("No hay productos disponibles de esa categoria", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(productos, HttpStatus.OK);
        }
    }

    @GetMapping("/filter")
    public ResponseEntity findByFechaAndCiudad(@RequestBody String ciudad, LocalDate fechaInicio, LocalDate fechaFin){
        List<Producto> productos = productoService.findByCityAndDate(ciudad, fechaInicio, fechaFin);

        if(productos == null){
            return new ResponseEntity("No hay productos disponibles en esa ciudad y fechas.", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(productos, HttpStatus.OK);
        }
    }







    @PostMapping("/crear")
    public ResponseEntity create(@RequestBody Producto producto){
        if(producto.getTitulo() == null || producto.getDescripcion() == null || producto.getCategoria() == null || producto.getCiudad() == null || producto.getCaracteristicas() == null || producto.getPoliticas() == null ){
            return new ResponseEntity("No se puede crear el producto porque hay datos faltantes", HttpStatus.NOT_ACCEPTABLE);
        } else{
            productoService.create(producto);
            return new ResponseEntity("Se ha creado el producto: " + producto.getTitulo(), HttpStatus.OK);
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        Producto prod = productoService.findById(id);
        if(prod != null){
            productoService.delete(id);
            return new ResponseEntity("Se ha eliminado el producto " + prod.getTitulo() + " con éxito", HttpStatus.OK);
        } else {
            return new ResponseEntity("No se pudo eliminar porque no se encontró el producto con el id: " + id, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity update(@RequestBody Producto producto){
        if(productoService.findById(producto.getId()) == null){
            return new ResponseEntity("No se ha podido actualizar porque no se encontró el producto con el id: " + producto.getId(), HttpStatus.BAD_REQUEST);
        } else {
            productoService.update(producto);
            return new ResponseEntity("Se ha actualizado el producto " + producto.getTitulo() + " con éxito", HttpStatus.OK);
        }
    }
}
