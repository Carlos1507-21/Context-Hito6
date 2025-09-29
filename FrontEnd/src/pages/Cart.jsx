import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart, getTotal } = useCart();

  return (
    <div className="container mt-5">
      <h2 className="mb-4">🛒 Carrito de Compras</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <table className="table table-striped text-center align-middle">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toLocaleString("es-CL")}</td>
                <td>
                  <div className="d-flex justify-content-center align-items-center gap-2">
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={() => decreaseQty(item.id)} // 👈 ahora resta de a 1
                    >
                      ➖
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-sm btn-outline-success"
                      onClick={() => addToCart(item)}
                    >
                      ➕
                    </button>
                  </div>
                </td>
                <td>
                  ${(item.price * item.quantity).toLocaleString("es-CL")}
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-dark"
                    onClick={() => removeFromCart(item.id)} // 👈 este sí elimina todo el producto
                  >
                    🗑 Eliminar
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="4" className="text-end fw-bold">
                Total:
              </td>
              <td className="fw-bold">
                ${getTotal().toLocaleString("es-CL")}
              </td>
            </tr>
          </tbody>
        </table>
      )}

      {cart.length > 0 && (
        <button className="btn btn-success mt-3">Finalizar Compra</button>
      )}
    </div>
  );
}

export default Cart;
