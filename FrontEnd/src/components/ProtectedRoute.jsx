import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children }) => {
  const { token } = useUser();

  if (!token) {
    // Si no hay token, redirige a /login
    return <Navigate to="/login" replace />;
  }

  return children; // Si hay token, renderiza la ruta normalmente
};

export default ProtectedRoute;
