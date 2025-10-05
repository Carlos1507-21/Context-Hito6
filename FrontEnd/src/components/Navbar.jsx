import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

const Navbar = () => {
  const { getTotal } = useCart();
  const { token, logout } = useUser();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex align-items-center">
        {/* Logo y botones de navegación */}
        <div className="d-flex align-items-center gap-2">
          <Link to="/" className="navbar-brand mb-0">
            🍕 Mamma Mía
          </Link>

          <Link to="/" className="btn btn-outline-light">
            Home
          </Link>

          {token ? (
            <>
              <Link to="/profile" className="btn btn-outline-light">
                🔓 Profile
              </Link>
              <button
                onClick={logout}
                className="btn btn-outline-light"
              >
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline-light">
                🔐 Login
              </Link>
              <Link to="/register" className="btn btn-outline-light">
                📝 Register
              </Link>
            </>
          )}
        </div>

        {/* Carrito a la derecha */}
        <Link to="/cart" className="btn btn-warning ms-auto">
          🛒 Total: ${getTotal().toLocaleString("es-CL")}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
