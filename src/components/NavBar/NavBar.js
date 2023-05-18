import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const NavBar = ({ color }) => {
  return (
    <nav className="gradiente-morado text-decoration-none text-white" style={{ backgroundColor: color }}>
    
      <ul style={{ display: "flex", height: "100px", color: "white", justifyContent: "space-around", alignItems: "center"}}>
        <li className="fs-1 navbar" >

        <i className="bi bi-phone-flip fs-1 text-decoration-none"></i>
          <a className="text-decoration-none text-white" href="www.google.com">TechShop</a>
        </li>

        <li  className="navbar text-decoration-none">
          <a  className="text-decoration-none text-white" href="www.google.com">Inicio</a>
        </li>

        <li className="navbar" >
          <a className="text-decoration-none text-white" href="https://www.efectivosi.com.ar/productos/prestamos" >TechShop Préstamos</a>
        </li>

        <li className="navbar">
          <a className="text-decoration-none text-white navbar" href="www.google.com" >Contacto</a></li>
        <CartWidget />
      </ul>
    </nav>
  );
};

export default NavBar;
