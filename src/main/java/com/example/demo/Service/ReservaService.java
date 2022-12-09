package com.example.demo.Service;

import com.example.demo.Model.Reserva;
import com.example.demo.Repository.IReservaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservaService {
    @Autowired
    private IReservaRepository reservaRepository;
    @Autowired
    UserService userService;

    public ReservaService() {
    }

    public ReservaService(IReservaRepository reservaRepository) {
        this.reservaRepository = reservaRepository;
    }

    public Reserva findById(Long id){
        Optional<Reserva> reserva = reservaRepository.findById(id);
        if(reserva.isPresent()){
            return reserva.get();
        } else {
            return null;
        }
    }

    public List<Reserva> findByProducto(Long idProducto){
        if (reservaRepository.findByProducto(idProducto) != null){
            return reservaRepository.findByProducto(idProducto);
        } else {
            return null;
        }
    }



    public List<Reserva> findAll(){
        return reservaRepository.findAll();
    }

    public Reserva create(Reserva reserva){
        if(findById(reserva.getId()) != null){
            return findById(reserva.getId());
        } else {
            if(userService.loadUserByEmail(reserva.getUser().getEmail())!= null){
                reserva.setUser(userService.loadUserByEmail(reserva.getUser().getEmail()));
            }
        return reservaRepository.save(reserva);
        }
    }

    public void delete(Long id){
        Reserva reserva = reservaRepository.findById(id).get();
        reservaRepository.delete(reserva);
    }

    public Reserva update(Reserva reserva){
        Reserva res;
        if(reservaRepository.existsById(reserva.getId())){
            res = reservaRepository.save(reserva);
        } else {
            res = null;
        }
        return res;
    }
}
