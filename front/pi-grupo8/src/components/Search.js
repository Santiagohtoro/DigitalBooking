import React from 'react'
import cities from '../assets/City.json'

export default function Search() {
 
    return(
        <section>
            <div>
                <h1>Busca ofertas en hoteles, casas y mucho más</h1>
                <p></p>
            </div>
            <form>
               <select name='Ciudad'>
               <option hidden selected>A donde vamos?</option>
                {cities.map((city)=>(
                    <option value={city.ciudad.nombre}>{city.ciudad.nombre} <span>{city.ciudad.pais}</span></option>
                ))}
               </select>

                <input type='Submit'>Buscar</input>
            </form>
        </section>
    )
}