import React from "react";

function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card shadow-sm h-100" style={{ width: "18rem" }}>
      {/* Imagen */}
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body d-flex flex-column">
        {/* Nombre de la pizza */}
        <h5 className="card-title text-center">{name}</h5>

        {/* Lista de ingredientes */}
        <h6>Ingredientes:</h6>
        <ul className="list-unstyled">
          {ingredients.map((ing, index) => (
            <li key={index}>🍕 {ing}</li>
          ))}
        </ul>

        {/* Precio y botón */}
        <div className="mt-auto">
          <p className="fw-bold text-center">
            Precio: ${price.toLocaleString("es-CL")}
          </p>
          <button className="btn btn-primary w-100">Añadir al carrito</button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;

