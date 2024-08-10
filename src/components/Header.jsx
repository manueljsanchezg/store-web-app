import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <nav>
            <Link to="/" className="link">Home</Link>
            <Link to="/category/electronics" className="link">Electronics</Link>
            <Link to="/category/jewelery" className="link">Jewelery</Link>
            <Link to="/category/men's clothing" className="link">Men's Clothing</Link>
            <Link to="/category/women's clothing" className="link">Women's Clothing</Link>
        </nav>
    )
}

export default Header