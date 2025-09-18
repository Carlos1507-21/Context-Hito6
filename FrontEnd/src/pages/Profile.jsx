import { useNavigate } from "react-router-dom";
import "../styles/Profile.css";

const Profile = () => {
  const email = "usuario@ejemplo.com"; // puedes reemplazar con datos reales
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Sesión cerrada 👋");
    // aquí puedes limpiar tokens, localStorage, etc.
    navigate("/login"); // redirige al login
  };

  return (
    <div className="profile-container">
      <h1>Perfil de Usuario</h1>
      <p><strong>Email:</strong> {email}</p>

      <button onClick={handleLogout} className="logout-button">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;
