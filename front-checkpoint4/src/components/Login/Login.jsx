import axios from "axios";
import { useState } from "react";
import "./Login.css";

function Login() {
  const [usernameReg, setUsernameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [loginStatus, setLoginStatus] = useState("");
  const [registrationStatus, setRegistrationStatus] = useState("");

  const register = () => {
    axios
      .post("http://localhost:8000/register", {
        username: usernameReg,
        password: passwordReg,
      })
      .then((response) => {
        if (response.data.message) {
          setRegistrationStatus(response.data.message);
        } else {
          setRegistrationStatus(
            "Compte créé avec succès ! Vous pouvez maintenant vous connecter."
          );
        }
        console.log(response);
      });
  };

  const login = () => {
    axios
      .post("http://localhost:8000/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          setLoginStatus(response.data.message);
        } else {
          setLoginStatus("Bienvenue " + response.data[0].name);
        }
        console.log(response);
      });
  };
  return (
    <div className="login-container">
      <h1>
        Connectez-vous pour accéder à votre espace, ou créez un compte pour vous
        connecter.
      </h1>
      <div className="register-div">
        <h1>Créer un compte</h1>
        <label>Choisissez un nom de compte :</label>
        <input
          type="text"
          onChange={(e) => {
            setUsernameReg(e.target.value);
          }}
        />
        <label>Choisissez un mot de passe :</label>
        <input
          type="text"
          onChange={(e) => {
            setPasswordReg(e.target.value);
          }}
        />
        <button onClick={register}>S'enregistrer</button>
        <h1>{registrationStatus}</h1>
      </div>

      <div className="login-div">
        <h1>Connexion</h1>
        <input
          type="text"
          placeholder="Nom de compte..."
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Mot de passe..."
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={login}>Se connecter</button>
      </div>
      <h1>{loginStatus}</h1>
    </div>
  );
}
export default Login;
