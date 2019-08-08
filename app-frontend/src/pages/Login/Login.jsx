import React from "react";

import "./Login.css";

// ASSETS
import logo from "../../assets/logo.svg";

function Login() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Logo Tindev" />
        <input type="text" placeholder="digite seu usuário do GitHub" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
