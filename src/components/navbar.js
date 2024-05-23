import "./navbar.css";
import Search from "../app/search/page";
export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="f-movie">
          <h1>F-Movies</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#">Accueil</a>
          </li>
          <li>
            <a href="#">Le plus populaire</a>
          </li>
          <li>
            <a href="#">Moins populiares</a>
          </li>
        </ul>
        <Search />
        <div className="user">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="Utilisateur"
          />
        </div>
      </nav>
    </div>
  );
}
