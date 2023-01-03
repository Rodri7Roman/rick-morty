import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.css";

const About = (props) => {
  return (
    <div className="container-home">
      <div className="container-text-about">
        <h1>Aplicacion Creada por:</h1>
        <h2 className="autor">Rodrigo Román</h2>
        <h2>🡣</h2>

        <div className="container-red">
          <div className="link">
            <img className="red" src="/img/logotipo-de-github.png" alt="logo" />
            <a target="_blank" href="https://www.github.com/Rodri7Roman">
              Rodrigo Román
            </a>
          </div>
        </div>
        <div className="container-red">
          <div className="link">
            <img className="red" src="/img/linkedin.png" alt="logo" />
            <a
              target="_blank"
              href="https://www.linkedin.com/in/rodrigo-roman-0a58811b0/"
            >
              Rodrigo Román
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
