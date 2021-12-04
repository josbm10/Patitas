import './donar.css'
import { FaInfoCircle,FaRegCreditCard, FaRegMoneyBillAlt, FaRegUser, FaRegCalendarAlt, FaRegEnvelope, FaMobileAlt, FaRegCalendarCheck } from "react-icons/fa";
function PageDonar() {
    return (
        <div className="donar_container">
            <form action="">
                <div><FaRegCreditCard className='donar_icons' /><input type="text" placeholder='Numero de tarjeta' maxLength='19'/></div>
                <div><FaRegCalendarAlt className='donar_icons' /><input type="text" placeholder='MM/AA' maxLength='6' /></div>
                <div><FaRegCreditCard className='donar_icons' /> <input type="number" placeholder='CVV' maxLength='3'/><FaInfoCircle className='donar_icons'/></div>
                <div><FaRegUser className='donar_icons' /><input type="text" placeholder='Nombre'minLength='4' /></div>
                <div><FaRegUser className='donar_icons' /><input type="text" placeholder='Apellido' minLength='4' /></div>
                <div><FaRegEnvelope className='donar_icons' /><input type="email" placeholder='Correo Electronico' /></div>
                <div> <FaMobileAlt className='donar_icons' /><input type="tel" placeholder='Movil' maxLength='9' /></div>
                <div><FaRegMoneyBillAlt className='donar_icons' /><input type="number" placeholder='Cantidad' min='0'step='50' /></div>
                <div>
                    <FaRegCalendarCheck className='donar_icons' />
                    <select name="" id="">
                        <option value="" selected hidden>Periodo</option>
                        <option value="" >Mensual</option>
                        <option value="">Pago Unico</option>
                    </select>
                </div>
                <button>Donar</button>
                <span>(*)Recuerde activar las compras por internet con su banco</span>
            </form>
           
        </div>
    )
}
export default PageDonar;