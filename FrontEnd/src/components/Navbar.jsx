import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const { getTotal, cart } = useCart();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex align-items-center">
        {/* Logo y menú */}
        <div className="d-flex align-items-center gap-2">
          <Link to="/" className="navbar-brand mb-0">
            🍕 Mamma Mía
          </Link>

          <Link to="/" className="btn btn-outline-light">
            Home
          </Link>
          <Link to="/profile" className="btn btn-outline-light">
            Perfil
          </Link>
          <Link to="/login" className="btn btn-outline-light">
            Login
          </Link>
          <Link to="/register" className="btn btn-outline-light">
            Registro
          </Link>
        </div>

        {/* Carrito a la derecha */}
        <Link to="/cart" className="btn btn-warning ms-auto">
          🛒 Carrito ({cart.reduce((acc, item) => acc + item.quantity, 0)} items) - 
          ${getTotal()}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
