import { useState, useEffect } from "react";
import Header from "../components/Header";
import CardPizza from "../components/CardPizza";

const Home = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => setPizzas(data))
      .catch((err) => console.error("Error al cargar las pizzas:", err));
  }, []);

  return (
    <div className="container">
      <Header />
      <div className="row mt-4">
        {pizzas.map((pizza) => (
          <div className="col-md-4 mb-4" key={pizza.id}>
            <CardPizza
              id={pizza.id}
              name={pizza.name}
              price={pizza.price}
              ingredients={pizza.ingredients}
              img={pizza.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

