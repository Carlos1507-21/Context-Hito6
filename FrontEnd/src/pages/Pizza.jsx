import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

function Pizza() {
  const { id } = useParams(); // 🔹 Obtiene el id de la URL
  const [pizza, setPizza] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`http://localhost:5000/api/pizzas/${id}`)
      .then((res) => res.json())
      .then((data) => setPizza(data))
      .catch((err) => console.error("Error al cargar pizza:", err));
  }, [id]);

  if (!pizza) return <p className="text-center mt-5">Cargando pizza...</p>;

  return (
    <div className="container mt-5 text-center">
      <h2 className="mb-3">{pizza.name}</h2>
      <img src={pizza.img} alt={pizza.name} className="img-fluid rounded mb-4" style={{ maxWidth: "400px" }} />
      <p><strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}</p>
      <p><strong>Precio:</strong> ${pizza.price.toLocaleString("es-CL")}</p>

      <button
        className="btn btn-danger mt-3"
        onClick={() => addToCart(pizza)}
      >
        🛒 Añadir al carrito
      </button>
    </div>
  );
}

export default Pizza;

