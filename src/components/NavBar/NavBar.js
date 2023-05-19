import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const NavBar = ({ color }) => {
  return (
    <nav className="fondo-morado opacity-75 text-decoration-none mt-2">
    
      <ul style={{ display: "flex", height: "100px", color: "white", justifyContent: "space-around", alignItems: "center"}}>
        <li className="fs-1 navbar" >

        <i className="bi bi-phone-flip text-decoration-none"></i>
          <a className="text-decoration-none text-white  fs-3" href="https://www.megatone.net/">TechShop</a>
        </li>

        <li  className="navbar text-decoration-none">
          <a  className="text-decoration-none text-white  fs-6" href="https://www.megatone.net/">Inicio</a>
        </li>

        <li className="navbar" >
          <a className="text-decoration-none text-white  fs-6" href="https://www.efectivosi.com.ar/productos/prestamos" >TechShop Préstamos</a>
        </li>

        <li className="navbar">
          <a className="text-decoration-none text-white navbar fs-6" href="www.google.com" >Contacto</a>
        </li>

        <li className="navbar mx-5 ms-5">
            <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Buscar productos" aria-label="Search"/>
                <button className="btn btn-light" type="submit"><i class="bi bi-search"></i></button>
            </form>
        </li>

        <CartWidget />
       

      </ul>
    </nav>
  );
};

export default NavBar;
