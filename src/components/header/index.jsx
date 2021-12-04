import './header.css';
import blanco from "../../assets/image/blanco.png"
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


function Header() {
  let history=useHistory();
    return <header className="hd-ft">
      <img className="hd-ft__logo" src={blanco} alt="logotipo" />
      <nav className="hd-ft__nav">
        <ul className="hd-ft__ul">

          <li><Link to="./adopta"  className="link">Adopta</Link></li>
          <li><Link to="./nosotros" className="link responsive" >Nosotros</Link></li>
          <li><Link to="./tienda" className="link" >Tienda</Link></li>
          <li><Link to="./consultas" className="link responsive" >Consultas</Link></li>
          <li><Link to="./blog" className="link" >Blog</Link></li>
        </ul>
      </nav>
      <div className="container__btn">
        <button className="btn btn-donar" type="button" onClick={(()=>{history.push('/donar')})}>Donar</button>
        <button className="btn btn-login" type="button" onClick={(()=>{history.push('/login')})} >Iniciar sesión</button>
      </div>
    </header>;
  }

export default Header ;