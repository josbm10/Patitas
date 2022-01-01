import { useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import './login.css'
import { NavLink } from 'react-router-dom';
import { useHistory } from 'react-router';



function PageLogin() {
  let history=useHistory();
  const [form, setForm] = useState({
    user: '',
    password: '',
  });
  const [allData, setAllData] = useState([]);
  const dispatch = useDispatch();

  axios.get('http://localhost:4000/usuarios')
    .then(response => {
      console.log(response.data)
      setAllData(response.data);
    })
    .catch(error => {
      console.log('Error: ' + error);
    })
  function onSubmit(e) {
    e.preventDefault();
    const response = allData.find(
      (element) =>
        element.user == form.user && element.password == form.password
    );
    console.log(response)
    if (response) {
      dispatch({
        type: 'SET_LOGIN',
        payload: true,
      });
      dispatch({
        type: 'SET_USER',
        payload: response,
      });
    } else {
      alert('El usuario no existe porfa vor registrate');
    }
  }


  return (
    <div className='login_container' >
      <h2>Iniciar Sesion</h2>
      <form onSubmit={onSubmit} >
        <input
          required
          type="text"
          placeholder="Usuario"
          value={form.user}
          onChange={(e) =>
            setForm((state) => ({ ...state, user: e.target.value }))
          }
        />
        <input
          required
          type="password"
          placeholder="Contraseña"
          value={form.password}
          onChange={(e) =>
            setForm((state) => ({ ...state, password: e.target.value }))
          }
        />
        <div className="text-center">
          <button>
            ENVIAR
          </button>
        </div>
      </form>
      <NavLink to='/registrarse' >Registrarse</NavLink>
    </div>
  );
}

export default PageLogin;
