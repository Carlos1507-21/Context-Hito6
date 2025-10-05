import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function CardPizza({ id, name, price, ingredients, img }) {
  const { addToCart } = useCart();

  return (
    <div className="card shadow-sm h-100" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Ingredientes: {ingredients.join(", ")}
          </p>
          <p className="fw-bold">Precio: ${price.toLocaleString("es-CL")}</p>
        </div>

        <div className="d-flex justify-content-between mt-3">
          <Link to={`/pizza/${id}`} className="btn btn-primary">
            Ver más
          </Link>
          <button
            className="btn btn-danger"
            onClick={() => addToCart({ id, name, price, img })}
          >
            Añadir
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardPizza;

