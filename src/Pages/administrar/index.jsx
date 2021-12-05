
import { NavLink } from "react-router-dom";
import './administrar.css'

function PageAdministrar() {
   
    return (
        <div className='administrar_container' >
            <h2>Administracion de datos</h2>
            <div>
            <NavLink to='/administrativo/eliminar_mascota'>Eliminar mascotas</NavLink>
            <NavLink to='/administrativo/agregar_mascota'>Agregar mascotas</NavLink>
            <NavLink to='/administrativo/modificar_mascota'>Modificar mascotas</NavLink>
            </div>
        </div>
    )
}
export default PageAdministrar;