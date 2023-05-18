import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const NavBar = ({ color }) => {
  return (
    <nav className="gradiente-morado " style={{ backgroundColor: color }}>
    
      <ul
        style={{
          display: "flex",
          height: "100px",
          color: "white",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <li className="fs-1" style={{ listStyle: "none" }}>
        <i className="bi bi-phone-flip fs-1"></i>
          <a
            href="www.google.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            TechShop
          </a>
        </li>

        <li style={{ listStyle: "none" }}>
          <a
            href="www.google.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            Inicio
          </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a
            href="https://www.efectivosi.com.ar/productos/prestamos"
            style={{ textDecoration: "none", color: "white" }}
          >
            TechShop Préstamos
          </a>
        </li>
        <li style={{ listStyle: "none" }}>
          <a
            href="www.google.com"
            style={{ textDecoration: "none", color: "white" }}
          >
            Contacto
          </a>
        </li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
