import "./perfil.css";
import { useEffect, useState } from 'react';
import { Link,useParams,useHistory } from "react-router-dom";
import axios from 'axios';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function PagePerfil(props) {

    const [dog, setDog] = useState({});
    let history = useHistory();
    let { idMascota } = useParams();
    function getMascota(id) {
        axios
            .get(`http://localhost:4000/mascotas/${id}`).then((response) => setDog(response.data)).catch((e) => { });
    }

    useEffect(() => {
        getMascota(idMascota);
    }, []);


    return (
        <div className='perfil_container'>
            <Breadcrumb className='Breadcrumb'>
                <Breadcrumb.Item onClick={() => history.push('/')}>Home</Breadcrumb.Item>
                <Breadcrumb.Item onClick={() => history.push('/adopta')} >Adopta</Breadcrumb.Item>
                <Breadcrumb.Item active >Perfil</Breadcrumb.Item>
            </Breadcrumb>
            <div className='perfil_carrusel'>
                {/* <Carrusel key={dog.id} id={dog.id} photo={dog.photo}/> */}
                <img src={dog.photo} alt={dog.name} />
            </div>
            <div className="perfil_detalles">
                <ul>
                    <li style={{fontSize:'24px'}}>{dog.name}</li>
                    <li>Sexo: {dog.sex}</li>
                    <li>Tamaño: {dog.tall}</li>
                    <li>Pelo: {dog.hair}</li>
                    <li>Edad: {dog.age} años</li>
                    <li>Nivel de Actividad: {dog.activity}</li>
                    <li>Conoce un poco mi historia:</li>
                    <li>{dog.history}</li>
                    <li className='li_buttons'>
                        <button onClick={() => history.push('/donar')}>Ayudame</button>
                        <button onClick={() => history.push('/formulario')}>Adoptame</button>
                    </li>
                    <li className='li_redes'>
                        Compartelo en las redes sociales
                        <div>
                            <Link to="https://www.facebook.com/" target="_blank"><FaFacebook /></Link>
                            <a href=''><FaTwitter /></a>
                            <a href=''><FaInstagram /></a>
                        </div>

                    </li>
                    <button className="btn_regresar" onClick={() => history.push('/adopta')}>Regresar</button>
                </ul>
            </div>

            <div className="proceso_adopcion">
                <h2>¿COMO ES EL PROCESO DE ADOPCION?</h2>
                <ul>
                    <li>1. Elige a tu mascota preferida y envia el formulario de adopcion
                        <img src={require('../../assets/image/sending_dog.jpg').default} alt="adopcion" />
                    </li>
                    <li>2. Completa el formulario que te enviamos a tu correo
                        <img src={require('../../assets/image/email_dog.jpg').default} alt="adopcion" />
                    </li>
                    <li>3. Realizaremos un videollamada para conocerte mejor
                        <img src={require('../../assets/image/video_dog.jpg').default} alt="adopcion" />
                    </li>
                    <li>4. Abono para la fundacion
                        <img src={require('../../assets/image/money_dog.jpg').default} alt="adopcion" />

                    </li>
                    <li>5. Tu nuevo amigo llegara a tu casa en un plazo de 5 dias
                        <img src={require('../../assets/image/adopt_dog.jpg').default} alt="adopcion" />

                    </li>
                </ul>
            </div>

        </div >
    )
}
export default PagePerfil;