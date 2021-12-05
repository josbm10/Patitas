import './registro.css';
import { useState } from 'react';
import axios from 'axios';


function PageRegistroUsuarios() {
    const [form, setForm] = useState({
        user: '',
        email: '',
        password: '',
        name: '',
        lastname: '',
        photo: '',
    });
    function saveUsers(user) {
        axios
            .post('http://localhost:4000/usuarios', user)
            .then((response) => {
               alert('Se registro correctamente')
            })
            .catch(() => {
                alert('Por favor intentalo nuevamente');
            });
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(form)
        saveUsers(form);
    }

    return (
        <div className='registro_container'>
            <h2>Registro usuarios</h2>
            <form action="" onSubmit={handleSubmit}>

                <input type="text" placeholder='Nombre de usuario' value={form.user} required
                    onChange={(e) =>
                        setForm((state) => ({ ...state, user: e.target.value }))
                    } />
                    <input type="password" placeholder='Contraseña' value={form.password} required
                    onChange={(e) =>
                        setForm((state) => ({ ...state, password: e.target.value }))
                    } />
                <input type="email" placeholder='Correo' value={form.email} required
                    onChange={(e) =>
                        setForm((state) => ({ ...state, email: e.target.value }))
                    } />

                <input type="text" placeholder='Nombre' value={form.name} required
                    onChange={(e) =>
                        setForm((state) => ({ ...state, name: e.target.value}))
                    } />
                <input type="text" placeholder='Apellido' value={form.lastname} required
                    onChange={(e) =>
                        setForm((state) => ({ ...state, lastname: e.target.value }))
                    } />

                <input type="text" placeholder='URL Foto' value={form.photo} required
                    onChange={(e) =>
                        setForm((state) => ({ ...state, photo: e.target.value }))
                    } />

                <button>Enviar</button>
            </form>
        </div>
    )
}
export default PageRegistroUsuarios