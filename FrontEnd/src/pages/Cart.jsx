import React, { useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Napolitana", price: 5950, quantity: 1 },
    { id: 2, name: "Pepperoni", price: 6950, quantity: 2 },
  ]);

  // Subir cantidad
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Bajar cantidad (si llega a 0, elimina producto)
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // 🚀 elimina productos con cantidad 0
    );
  };

  // Calcular total
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>

      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <table className="table table-striped text-center align-middle">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toLocaleString("es-CL")}</td>
                <td>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => decreaseQty(item.id)}
                    >
                      ➖
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => increaseQty(item.id)}
                    >
                      ➕
                    </button>
                  </div>
                </td>
                <td>
                  ${(item.price * item.quantity).toLocaleString("es-CL")}
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="text-end fw-bold">
                Total:
              </td>
              <td className="fw-bold">${total.toLocaleString("es-CL")}</td>
            </tr>
          </tbody>
        </table>
      )}

      {cartItems.length > 0 && (
        <button className="btn btn-success mt-3">Finalizar Compra</button>
      )}
    </div>
  );
}

export default Cart;
