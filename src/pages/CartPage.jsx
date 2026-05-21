import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, totalItems, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <div className="cart-empty-icon">🛒</div>
        <h2>Tu carrito está vacío</h2>
        <p>Todavía no agregaste ningún producto.</p>
        <Link to="/productos" className="hero-cta">Ir al catálogo →</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Tu carrito</h1>
        <button onClick={clearCart} className="clear-btn">Vaciar carrito</button>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imagen} alt={item.nombre} className="cart-item-img" />
              <div className="cart-item-info">
                <h3>{item.nombre}</h3>
                <span className="cart-item-category">{item.categoria}</span>
                <p className="cart-item-price">
                  $ {item.precio.toLocaleString("es-AR")} × {item.quantity}
                </p>
              </div>
              <div className="cart-item-right">
                <strong>$ {(item.precio * item.quantity).toLocaleString("es-AR")}</strong>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >✕</button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Resumen</h2>
          <div className="summary-row">
            <span>Productos ({totalItems})</span>
            <span>$ {totalPrice.toLocaleString("es-AR")}</span>
          </div>
          <div className="summary-row">
            <span>Envío</span>
            <span className="free-shipping">Gratis</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <strong>$ {totalPrice.toLocaleString("es-AR")}</strong>
          </div>
          <button className="checkout-btn">
            Finalizar compra →
          </button>
          <Link to="/productos" className="keep-shopping">
            ← Seguir comprando
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
