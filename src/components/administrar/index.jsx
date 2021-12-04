import { Route, Routes, useMatch ,NavLink} from "react-router-dom";
import PageModificarAnimales from "../modificarAnimales";
import PageRegistroAnimales from "../registroAnimales";

function PageAdministrar() {
    return (
        <div>
            <h2>Administracion de datos</h2>
            <ul>
                <li><NavLink to={`/agregar`}>Agregar mascotas</NavLink></li>
                <li><NavLink to={`/modificar`}>Modificar mascota</NavLink></li>
                <li><NavLink to={`/eliminar`}>Eliminar mascotas</NavLink></li>
            </ul>  
            <hr />
            <Routes>
                <Route exact path={`/agregar`} element={<PageRegistroAnimales/>}  />
            </Routes>

        </div>
    )
}
export default PageAdministrar;