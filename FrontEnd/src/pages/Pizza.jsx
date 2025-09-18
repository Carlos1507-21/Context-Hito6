import React, { useState, useEffect } from "react";
import CardPizza from "../components/CardPizza";


function Pizza() {
  const [pizza, setPizza] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizza = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/pizzas");
        if (!response.ok) {
          throw new Error("No se pudo obtener las pizzas");
        }
        const data = await response.json();
        // Si tu API devuelve { pizzas: [...] }, entonces usa data.pizzas[0]
        setPizza(data[0] || data.pizzas?.[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPizza();
  }, []);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!pizza) return <p>No hay pizzas disponibles</p>;

  return (
    <div className="container mt-5 d-flex justify-content-center">
      <CardPizza
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        img={pizza.img}
      />
    </div>
  );
}

export default Pizza;
