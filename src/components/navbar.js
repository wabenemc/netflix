"use client";
import "./navbar.css";

export default function Navbar(props) {
  return (
    <div>
      <nav>
        <div className="f-movie">
          <h1>F-Movies</h1>
        </div>
        <ul className="nav-links">
          <li>
            <a href="/heroBanner">Accueil</a>
          </li>
          <li>
            <a href="/top_category">Top</a>
          </li>
          <li>
            <a href="/less_category">Less</a>
          </li>
          <li>
            <a href="/upcoming_category">Upcoming</a>
          </li>
        </ul>
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
