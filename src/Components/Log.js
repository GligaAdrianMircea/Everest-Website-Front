import React, { useState } from "react";
import "../Styles/log.css";
import { Link } from "react-router-dom";
import { useLogin } from '../hooks/useLogin'
function Log() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login, error , isLoading } = useLogin()
  const handleLogin = () => {
    login(username, password)
    setUsername('')
    setPassword('')
  }
  return (
    <div className="sing">
      <div className="form">
        <div className="form-inputs form-center">
          <div className="form-title">Log In</div>
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
              ></input>
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
            </div>
            <div className="four">
            </div>
          </div>
          <div className="five">
            <div
              className="form-button"
              onClick={handleLogin}
              disabled={isLoading}
            >
              Conectațivă
            </div>
          </div>
          {error && <div className="form-err">{error}.</div>}
          <div className="six">
            <Link to="/Sing" className="dec form-link-sing">
              Nu aveți cont?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Log;
