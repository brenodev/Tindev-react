import React, { useState } from "react";

import "./Login.css";

// ASSETS
import logo from "../../assets/logo.svg";
// SERVICES
import api from "../../services/api";

function Login({ history }) {
  const [username, setUsername] = useState("");

  async function handhleSubmit(e) {
    e.preventDefault();

    const response = await api.post("/devs", {
      username
    });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handhleSubmit}>
        <img src={logo} alt="Logo Tindev" />
        <input
          type="text"
          placeholder="Digite seu usuário do GitHub"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Login;
