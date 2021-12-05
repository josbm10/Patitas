import './modificar.css'
import { useRef, useState } from 'react';
import axios from 'axios';

function PageModificarAnimales() {
    const [perros, setPerros] = useState([]);
    function putMascota(id_put, mascota) {
        axios
            .put(`http://localhost:4000/mascotas/${id_put}`, mascota)
            .then((response) => {
                alert('la mascota se modifico correctamente');
            })
            .catch(() => {
                alert('Por favor intentalo nuevamente');
            });
    }
    function getMascota(id_get) {
        axios
            .get(`http://localhost:4000/mascotas/${id_get}`)
            .then((response) => {
                setPerros(response.data);
            })
            .catch(() => {
                alert('Por favor intentalo nuevamente');
            });
    }
    const get_id = useRef(null);
    const put_id = useRef(null);
    const put_status = useRef(null);
    const put_name = useRef(null);
    const put_photo = useRef(null);
    const put_age = useRef(null);
    const put_tall = useRef(null);
    const put_sex = useRef(null);
    const put_activity = useRef(null);
    const put_hair = useRef(null);
    const put_history = useRef(null);

    function putData(e) {
        e.preventDefault();
        const id_put = put_id.current.value;
        const mascota = {
            status: put_status.current.value,
            name: put_name.current.value.toUpperCase(),
            photo: put_photo.current.value,
            age: put_age.current.value,
            tall: put_tall.current.value,
            sex: put_sex.current.value,
            activity: put_activity.current.value,
            hair: put_hair.current.value,
            history: put_history.current.value
        }
        putMascota(id_put, mascota);
    }
    function getData() {
        const id_get = get_id.current.value;
        getMascota(id_get)
    }

    return (
        <div className='modificar_container'>
            <input type="number" placeholder='Buscar mascota por id' ref={get_id} />
            <button onClick={getData}>Buscar</button>
            <h2>Modificar datos de mascotas</h2>

            <form action="" >
                <input type="number" readOnly placeholder='ID' ref={put_id} defaultValue={perros.id} required/>

                <select ref={put_status} required>
                    <option hidden>Disponibilidad</option>
                    <option value={false} selected={perros.status==='false'}>Disponible</option>
                    <option value={true} selected={perros.status==='true'}>No disponible</option>
                </select>

                <input type="text" placeholder='Nombre del animal' ref={put_name} defaultValue={perros.name} required/>
                <input type="text" placeholder='Edad' ref={put_age} defaultValue={perros.age} required/>
                <input type="text" placeholder='URL Foto' ref={put_photo} defaultValue={perros.photo} required/>
                
                <select ref={put_tall} required>
                    <option selected hidden>Tamaño</option>
                    <option value='Pequeño' selected={perros.tall==='Pequeño'}>Pequeño</option>
                    <option value='Mediano'selected={perros.tall==='Mediano'}>Mediano</option>
                    <option value='Grande'selected={perros.tall==='Grande'}>Grande</option>
                </select>
                <select ref={put_sex} required>
                    <option selected hidden>Sexo</option>
                    <option value='Hembra' selected={perros.sex==='Hembra'} >Hembra</option>
                    <option value='Macho' selected={perros.sex==='Macho'} >Macho</option>
                </select>
                <select ref={put_activity} required>
                    <option selected hidden>Nivel de actividad</option>
                    <option value='Bajo' selected={perros.activity==='Bajo'} >Bajo</option>
                    <option value='Medio' selected={perros.activity==='Medio'} >Medio</option>
                    <option value='Alto' selected={perros.activity==='Alto'} >Alto</option>
                </select>
                <select ref={put_hair}required>
                    <option selected hidden>Largo de pelo</option>
                    <option value='Largo' selected={perros.hair==='Largo'}>Largo</option>
                    <option value='Corto' selected={perros.hair==='Corto'}>Corto</option>
                </select>
                <textarea name="" id="" cols="30" rows="5" placeholder='Historia' ref={put_history}
                    defaultValue={perros.history}required></textarea>
                <button onClick={putData}>Enviar</button>
            </form>
        </div>
    )
}

export default PageModificarAnimales