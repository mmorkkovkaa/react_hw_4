import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const activeLink = ({isActive})=> isActive ? 'active-link' : ''
const Navbar =()=>{
    const cart = useSelector((state) => state.cart);
    return (
        <nav>
            <ul>
                <li><NavLink to="/" className={activeLink}>Home</NavLink></li>
            </ul>
            <h6>Корзина : {cart.length}</h6>
        </nav>
    )
}
export default Navbar