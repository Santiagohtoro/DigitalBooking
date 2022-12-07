package com.example.demo.Controller;

import com.example.demo.Configuration.JwtUtil;
import com.example.demo.Model.Reserva;
import com.example.demo.Service.ReservaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/reservas")
public class ReservaController {
    @Autowired
    ReservaService reservaService;
    @Autowired
    JwtUtil jwtUtil;

    @GetMapping("/{id}")
    public ResponseEntity findById(@PathVariable Long id){
        Reserva r = reservaService.findById(id);

        if(r == null){
            return new ResponseEntity("No se encontró una reserva con el id: " + id, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(r, HttpStatus.OK);
        }
    }

    @GetMapping("/todos")
    public ResponseEntity findAll(){
        List<Reserva> res = reservaService.findAll();

        if(res == null){
            return new ResponseEntity("No hay reservas disponibles", HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(res, HttpStatus.OK);
        }
    }

    @GetMapping("/{idProducto}")
    public ResponseEntity findByProduct(@PathVariable Long id_producto){
        List<Reserva> rs = reservaService.findByProducto(id_producto);

        if(rs == null){
            return new ResponseEntity("No se encontró ninguna reserva del producto con el id: " + id_producto, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity(rs, HttpStatus.OK);
        }
    }

    @PreAuthorize("hasAnyRole('USER','ADMIN')")
    @PostMapping("/crear")
    public ResponseEntity create(@RequestBody Reserva reserva){
        if(reserva.getFechaInicial() == null || reserva.getFechaFin()== null || reserva.getHoraReserva() == null){
            return new ResponseEntity("No se puede crear la reserva porque hay datos faltantes", HttpStatus.NOT_ACCEPTABLE);
        } else{
            reservaService.create(reserva);
            return new ResponseEntity("Se ha creado la reserva para: " + reserva.getFechaInicial()+ " "+reserva.getHoraReserva(), HttpStatus.OK);
        }
    }

    @DeleteMapping("/eliminar/{id}")
    public ResponseEntity delete(@PathVariable Long id){
        Reserva res = reservaService.findById(id);
        if(res != null){
            reservaService.delete(id);
            return new ResponseEntity("Se ha eliminado la reserva con éxito", HttpStatus.OK);
        } else {
            return new ResponseEntity("No se pudo eliminar porque no se encontró la reserva con el id: " + id, HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/actualizar")
    public ResponseEntity update(@RequestBody Reserva reserva){
        if(reservaService.findById(reserva.getId()) == null){
            return new ResponseEntity("No se ha podido actualizar porque no se encontró la categoría con el id: " + reserva.getId(), HttpStatus.BAD_REQUEST);
        } else {
            reservaService.update(reserva);
            return new ResponseEntity("Se ha actualizado la reserva con éxito", HttpStatus.OK);
        }
    }
}
