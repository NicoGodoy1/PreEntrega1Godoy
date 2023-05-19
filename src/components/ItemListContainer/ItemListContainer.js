import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="w-75 ">
      <h2 class="fondo-rojo bg-danger bg-gradient w-50 px-2 py-2">{greeting}<i class="bi bi-phone-flip fs-4 ms-2 align-items-center"></i></h2>
    </div>
    
  );
};

export default ItemListContainer;