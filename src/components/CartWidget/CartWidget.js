import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

const CartWidget = () => {
  return (
    <div className="d-flex mx-0 cart-icon"> 
        <i class="bi bi-cart3 mx-2 btn btn-light"></i>
        <p className="cart-count">0</p>
    </div>
  );
};

export default CartWidget;
