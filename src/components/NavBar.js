import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import logo from ".././images/brote.png";
import { useHistory } from "react-router-dom";

export const NavBar = () => {
  //   let history = useHistory();

  //   function handleClick() {
  //     history.push("/prueba");
  //   }

  return (
    // <div className="container-navbar">
    <nav>
      <img src={logo} alt="logo de una planta" />
      <ul className="menu">
        <li className="Home">
          <Link to="/"> Inicio</Link>
        </li>
        <li id="Categorías">
          <ul className="submenu">
            Categorías <li>Plantas</li>
            <li>Plantines</li>
            <li>Macetas</li>
          </ul>
        </li>
        <li id="Ofertas">Ofertas</li>
        <li id="Ultimas Publicaciones">
          <Link to="/publicaciones">Ultimas Publicaciones</Link>
        </li>
        <li id="Vender">Vender</li>
        <li id="Tiendas">Tiendas</li>
        <li id="Ayuda">Ayuda</li>
      </ul>
    </nav>
    // </div>
  );
};

export default NavBar;
