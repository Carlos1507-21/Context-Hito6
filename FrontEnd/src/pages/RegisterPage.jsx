import React, { useState } from "react";
// Componente Register con Confirmar contraseña
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setMessage({ type: "danger", text: "Todos los campos son obligatorios." });
      return;
    }
    if (password.length < 6) {
      setMessage({ type: "danger", text: "La contraseña debe tener al menos 6 caracteres." });
      return;
    }
    if (password !== confirmPassword) {
      setMessage({ type: "danger", text: "Las contraseñas no coinciden." });
      return;
    }
    setMessage({ type: "success", text: "Registro exitoso." });
  };
  return (
    <div className="card shadow mx-auto" style={{ maxWidth: "400px" }}>
      <div className="card-body">
        <h2 className="text-center mb-4">Registro</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ejemplo@correo.com"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="******"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Confirmar contraseña:</label>
            <input
              type="password"
              className="form-control"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="******"
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Registrarse</button>
        </form>
        {message && (
          <div className={`alert alert-${message.type} text-center mt-3`}>
            {message.text}
          </div>
        )}
        <p className="mt-3 text-center text-muted">
          Para ir a Login, cambia <code>currentScreen</code> a "login"
        </p>
      </div>
    </div>
  );
}
export default Register;
