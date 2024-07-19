import "./App.css";
import logo from "./assets/images/logo.png";

function App() {
  return (
    <main className="container">
      <header>
        <nav className="navbar">
          <ul>
            <li>
              <a href="/">Accueil</a>
            </li>
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/login">Connexion</a>
            </li>
            <li>
              <a href="/signup">Inscription</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <footer>
        <p>NOTHING TO SEE HERE!!!</p>
      </footer>
    </main>
  );
}

export default App;
