import './Login.css'
import { users } from '../../data/dataUsers';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';

const Login = () => {
  const [stateUser, setStateUser] = useState('')
  const [statePassword, setStatePassword] = useState('')
  //console.log(stateUser)
  console.log(users)
  let direccion = useNavigate()
  function IniciarSesion() {
    if (buscarUsuario) {
      //  setTimeout(() => {
      direccion('/dashboard')
      // }, 2000)
    } else {
      console.log('Credenciales Incorrectas')
    }
  }

  function buscarUsuario() {
    let auth = users.some((item) => stateUser == item.user)
    console.log(auth)
    return auth

  }


  return (
    <form className="loginForm" action="">
      <input onChange={(event) => { setStateUser(event.target.value) }} placeholder="User" />
      <input ononChange={(event) => { setStatePassword(event.target.value) }} placeholder="Password" />
      <input onClick={IniciarSesion} type="button" value="Login" />
      <Link to='/register'>¿No tiene una cuenta?</Link>
    </form>
  );
};


export default Login;
