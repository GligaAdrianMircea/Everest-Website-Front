import React, { useState } from "react";
import "../Styles/sing.css";
import { Link } from "react-router-dom";
import { useSignUp } from "../hooks/useSignUp";
function Sing() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [telefon, setTelefon] = useState("");
  const [email, setEmail] = useState("");
  const [locatie, setLocatie] = useState("");
  const { signup, isLoading, error } = useSignUp();
  const HandleSignup = async () => {
    await signup(username, password, telefon, email, locatie);
    setEmail("");
    setTelefon("")
    setUsername("");
    setPassword("");
    setLocatie("");
  };
  return (
    <div className="sing">
      <div className="form">
        <div className="form-inputs">
          <div className="form-title">Sing In</div>
          <div className="form-input-container">
            <div className="one">
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="text"
                id="fname"
                name="fname"
                className="form-input"
                value={username}
                required
                placeholder="Username"
              />
            </div>
            <div className="two">
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                id="lname"
                name="lname"
                className="form-input"
                value={password}
                required
                placeholder="Password"
              ></input>
            </div>
            <div className="three">
              <input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="lname"
                name="lname"
                className="form-input"
                value={email}
                required
                placeholder="Email"
              ></input>
            </div>
            <div className="four">
              <input
                onChange={(e) => setTelefon(e.target.value)}
                type="text"
                id="lname"
                name="lname"
                className="form-input"
                value={telefon}
                required
                placeholder="Phone"
              ></input>
            </div>
            <div className="six">
              <input
                onChange={(e) => setLocatie(e.target.value)}
                type="text"
                id="lname"
                name="lname"
                className="form-input"
                value={locatie}
                required
                placeholder="Locatie"
              ></input>
            </div>
          </div>
          <div className="five">
            <div
              className="form-button"
              onClick={HandleSignup}
              disabled={isLoading}
            >
              Înregistrare
            </div>
          </div>
          {error && <div className="form-err">{error}.</div>}
          <div className="six">
            <Link to="/Log" className="dec form-link-sing">
              Aveți deja un cont?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Sing;
