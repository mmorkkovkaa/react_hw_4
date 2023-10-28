
import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

const activeLink = (isActive) => (isActive ? "active-link" : "");

const Navbar = () => {
    const cartCount = useSelector((state) => state.cart.cartCount);
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/" className={activeLink}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/cart" className={activeLink}>
                        Cart : {cartCount}
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;