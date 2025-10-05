import { useCart } from "../context/CartContext";
import { useUser } from "../context/UserContext";

function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart, getTotal } = useCart();
  const { token } = useUser(); // ✅ Obtenemos el token

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
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price.toLocaleString("es-CL")}</td>
                <td>{item.quantity}</td>
                <td>${(item.price * item.quantity).toLocaleString("es-CL")}</td>
                <td>
                  <button
                    className="btn btn-sm btn-outline-danger me-1"
                    onClick={() => decreaseQty(item.id)}
                  >
                    ➖
                  </button>
                  <button
                    className="btn btn-sm btn-outline-success me-1"
                    onClick={() => addToCart(item)}
                  >
                    ➕
                  </button>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => removeFromCart(item.id)}
                  >
                    🗑
                  </button>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="text-end fw-bold">
                Total:
              </td>
              <td className="fw-bold">${getTotal().toLocaleString("es-CL")}</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}

      {cart.length > 0 && (
        <button className="btn btn-success mt-3" disabled={!token}>
          Finalizar Compra
        </button>
      )}
    </div>
  );
}

export default Cart;
