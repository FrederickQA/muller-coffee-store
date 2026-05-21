import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalItems } = useCart();

  return (
    <Link to="/carrito" className="cart-widget">
      <span className="cart-icon">🛒</span>
      {totalItems > 0 && (
        <span className="cart-badge">{totalItems}</span>
      )}
    </Link>
  );
};

export default CartWidget;
