import { Link } from "react-router-dom";
import "../styles/navbar.css";
function Navbar(){
    return(
        <nav className="navbar">
        <div className="brand">Ana's store</div>
        <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/about">About</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        </div>
        </nav>
       
    )
}


export default Navbar