import React, { useState } from "react";

// Componente Login
function LoginPage() {
  return (
    <div className="card shadow mx-auto" style={{ maxWidth: "400px" }}>
      <div className="card-body">
        <h2 className="text-center mb-4">Login</h2>
        <form>
          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" placeholder="ejemplo@correo.com" />
          </div>
          <div className="mb-3">
            <label className="form-label">Contraseña:</label>
            <input type="password" className="form-control" placeholder="******" />
          </div>
          <button type="submit" className="btn btn-primary w-100">Ingresar</button>
        </form>
        <p className="mt-3 text-center text-muted">
          Para ir a Registro, cambia <code>currentScreen</code> a "register"
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
