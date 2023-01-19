import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      Bienvenidos a la creación de un formulario con sus validaciones
      <div className="home__btn">
        <Link to="/form">
          <button>Ir al Formulario 💘</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
