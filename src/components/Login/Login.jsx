import React from "react";
import "./Login.css";

export default class Login extends React.Component {
  render() {
    return (
      <form className="card-login">
        <h1>CONSENSUS</h1>
        <div className="fieldset-text">
          <input id='email' type="email" autoComplete='off' />
          <label for='email'>Email</label>
        </div>
        <div className="fieldset-text">
          <input type="password" />
          <label>Senha</label>
        </div>
        <input className="button" type="submit" value="ENTRAR" />
      </form>
    );
  }
}
