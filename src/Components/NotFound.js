import "../Styles/notfound.css"
import { Link } from "react-router-dom";
const NotFound = () => {
    return (
      <div className="found-container">
        <div className="found-four">404</div>
        <div className="found-text">Pagina nu a fost găsită.</div>
        <Link to="/" className="dec">
          <div className="found-link">Înapoi acasă</div>
        </Link>
        <div className="found-circle"></div>
      </div>
    );
}
export default NotFound;