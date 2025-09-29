import { useCart } from "../context/CartContext";

function CardPizza({ id, name, price, ingredients, img }) {
  const { addToCart } = useCart();

  return (
    <div className="card shadow-sm h-100" style={{ width: "18rem" }}>
      {/* Imagen */}
      <img src={img} className="card-img-top" alt={name} />

      {/* Info */}
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Ingredientes: {ingredients.join(", ")}</p>
        <p className="card-text fw-bold">Precio: ${price}</p>
        <button
          className="btn btn-danger"
          onClick={() =>
            addToCart({ id, name, price, img }) // 🔹 Se envía al carrito
          }
        >
          Añadir al carrito
        </button>
      </div>
    </div>
  );
}

export default CardPizza;
