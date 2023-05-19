import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


const NavBar = ({ color }) => {
  return (
    <nav className="fondo-morado opacity-75 text-decoration-none px-5 mt-2 ">
    
      <ul  className="d-flex justify-content-between" style={{ height: "100px", color: color, alignItems: "center"}}>
        <li className="fs-1 navbar" >

        <i className="bi bi-phone-flip text-decoration-none"></i>
          <a className="text-decoration-none text-white  fw-bolder fs-3" href="https://www.megatone.net/">TechShop</a>
        </li>

        <li  className="navbar text-decoration-none">
          <a  className="text-decoration-none text-white  fs-6" href="https://www.megatone.net/">Inicio</a>
        </li>

        <li className="navbar" >
          <a className="text-decoration-none text-white  fs-6" href="https://www.efectivosi.com.ar/productos/prestamos" >Préstamos</a>
        </li>

        <li className="navbar">
          <a className="text-decoration-none text-white navbar fs-6" href="www.google.com" >Contacto</a>
        </li>
        
        <ul className="d-flex justify-content-between">
            <li className="navbar mx-1 ms-1">
                <form className="d-flex" role="search">
                    <input className="form-control me-1" type="search" placeholder="Buscar productos" aria-label="Search"/>
                    <button className="btn btn-light" type="submit"><i className="bi bi-search"></i></button>
                </form>
            </li>

            <CartWidget />
        </ul>
       
      </ul>
    </nav>
  );
};

export default NavBar;

