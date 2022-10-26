import React from 'react';
import ReactDOM from 'react-dom/client';
import "../Styles/login.css"
import App from '../App';
// import MaterialIcon from 'material-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'



export default function FormLogin(){
    const [showPassword, setShowPassword] = React.useState(false)
    function toggleShowPassword(){
        setShowPassword(!showPassword)
    }
    return(
        <>
            <div id="container">
                <h2>Iniciar sesión</h2>
                <form>
                    <label>Correo electrónico</label>
                    <input type="text"></input>
                    <label>Contraseña</label>
                    <input type={showPassword ? 'text' : 'password'}></input>
                    {/*<i onClick={()=> setShowPassword(!showPassword)}><MaterialIcon icon={showPassword ? 'visibility_off' : 'visibility'}/></i>*/}
                    {/* <i onClick={toggleShowPassword}>{showPassword ? <><MaterialIcon icon='visibility_off'/></> : <span><MaterialIcon icon='visibility'/></span> }</i> */}
                    <i onClick={toggleShowPassword}>{showPassword ? <FontAwesomeIcon icon={faEyeSlash} class="icon" size="lg" style={{color: "#607D8B"}}/> : <FontAwesomeIcon icon={faEye} class="icon" size="lg" style={{color: "#607D8B"}}/> }</i>

                    <button type='submit'>Ingresar</button>
                    <p>Aún no tienes cuenta? <a href='./FormRegistro'>Regístrate</a></p>
                </form>
            </div>
        </>

    )
}