import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="page-banner">
        <h1>Bienvenido a Müller Coffee Store</h1>
        <p>Equipos de café seleccionados por nuestro equipo de especialistas</p>
        <Link to="/productos" className="hero-cta" style={{ marginTop: "1.5rem", display: "inline-block" }}>
          🛒 Ver catálogo →
        </Link>
      </div>
    </div>
  );
};

export default Home;