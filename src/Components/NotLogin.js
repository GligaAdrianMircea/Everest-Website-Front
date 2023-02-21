import { useNavigate } from "react-router-dom";
import "../Styles/notlogin.css"
const NotLogin = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/Log')
    }
    return (
      <div className="not-container">
        <div className="not-title">Autentifică-te</div>
        <div className="not-btn" onClick={handleClick}>
          Mergi la Log-In
        </div>
      </div>
    );
}
export default NotLogin;