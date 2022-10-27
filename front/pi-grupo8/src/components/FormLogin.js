import React from 'react';
import ReactDOM from 'react-dom/client';
import "../Styles/login.css"
import App from '../App';
// import MaterialIcon from 'material-icons-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { Navigate, useNavigate } from "react-router-dom";
const users = [{name: "Melina", email: "meli@gmail.com", password:"Meli123!"}, {name: "Flor", email: "flor@gmail.com", password:"flor123."}, {name: "Celi", email: "celi@gmail.com", password:"CELI123"}]


export default function FormLogin(){
    const regexMail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/)
    const regexPassword = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/)
    const [showPassword, setShowPassword] = React.useState(false)
    const [showInvalidEmail, setShowInvalidEmail] = React.useState(false)
    const [showInvalidPassword, setShowInvalidPassword] = React.useState(false)
    // const navigate = useNavigate()
    function toggleShowPassword(){
        setShowPassword(!showPassword)
    }
    const [email, setEmail] = React.useState()
    function onChangeMail(e){
        e.preventDefault()
        setEmail(e.target.value)
        document.getElementById("emailInput").classList.remove("wrong")
        setShowInvalidEmail(false)
    }
    const [password, setPassword] = React.useState()
        function onChangePassword(e){
            e.preventDefault()
            setPassword(e.target.value)
            document.getElementById("passInput").classList.remove("wrong")
            setShowInvalidPassword(false)
        }
        function onSubmit(e){
            e.preventDefault()
            if(email && email.match(regexMail)){
                if(password && password.match(regexPassword)){
                    users.forEach(user => {
                        if(email == user.email){
                            if(password == user.password){
                                // navigate("../index.js")
                            } else {
                                document.getElementById("passInput").classList.add("wrong")
                                setShowInvalidPassword(true)
                            }
                        } else {
                            document.getElementById("emailInput").classList.add("wrong")
                            setShowInvalidEmail(true)
                        }
                    });
                } else {
                    document.getElementById("passInput").classList.add("wrong")
                    setShowInvalidPassword(true)
                }
            } else {
                document.getElementById("emailInput").classList.add("wrong")
                setShowInvalidEmail(true)
            }

            if(password && password.match(regexPassword)){
                if(email && email.match(regexMail)){
                    users.forEach(user => {
                        if(password == user.password){
                            if(email == user.email){
                                // navigate("../index.js")
                            } else {
                                document.getElementById("emailInput").classList.add("wrong")
                                setShowInvalidEmail(true)
                            }
                        } else {
                            document.getElementById("passInput").classList.add("wrong")
                            setShowInvalidPassword(true)
                        }
                    });
                } else {
                    document.getElementById("emailInput").classList.add("wrong")
                    setShowInvalidEmail(true)
                }
            } else {
                document.getElementById("passInput").classList.add("wrong")
                setShowInvalidPassword(true)
            }

        }
    return(
        <>
            <div id="container">
                <h2>Iniciar sesión</h2>
                <form onSubmit={onSubmit}>
                    <label>Correo electrónico</label>
                    <input type="email" required onChange={onChangeMail} id="emailInput"></input>
                    <label>Contraseña</label>
                    <input type={showPassword ? 'text' : 'password'} required onChange={onChangePassword} id="passInput"></input> 
                    <i onClick={toggleShowPassword}>{showPassword ? <FontAwesomeIcon icon={faEyeSlash} class="icon" size="lg" style={{color: "#607D8B"}}/> : <FontAwesomeIcon icon={faEye} class="icon" size="lg" style={{color: "#607D8B"}}/> }</i>
                    {((showInvalidEmail && !showInvalidPassword)||(showInvalidPassword && !showInvalidEmail) || (showInvalidPassword && showInvalidEmail))? <p class="error">El email y/o la contraseña ingresados son inválidos.</p> : ""}

                    <button type='submit'>Ingresar</button>
                    <p>Aún no tienes cuenta? <a href='./FormRegistro'>Regístrate</a></p>
                </form>
            </div>
        </>

    )
}