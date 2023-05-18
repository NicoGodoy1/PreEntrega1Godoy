import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="w-75 ">
      <h2 class="gradiente-morado w-75 px-2 py-2 bg-opacity-10">{greeting}<i class="bi bi-phone-flip fs-1 mb-4 mx-2 align-items-center"></i></h2>
    </div>
    
  );
};

export default ItemListContainer;