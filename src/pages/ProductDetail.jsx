import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart, cartItems } = useCart();

  useEffect(() => {
    import("../data/productos.json").then((data) => {
      const found = data.default.find((p) => p.id === parseInt(id));
      setProduct(found);
    });
  }, [id]);

  if (!product) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">◈</div>
        <p>Cargando producto...</p>
      </div>
    );
  }

  // Cuántas unidades ya están en el carrito
  const inCart = cartItems.find((item) => item.id === product.id)?.quantity || 0;
  // Cuántas se pueden agregar todavía
  const available = product.stock - inCart;

  const handleAdd = () => {
    if (quantity > available) return;
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-detail">
      <Link to="/productos" className="back-link">← Volver al catálogo</Link>

      <div className="detail-grid">
        <div className="detail-image-wrap">
          <img src={product.imagen} alt={product.nombre} className="detail-image" />
          <span className="detail-category">{product.categoria}</span>
        </div>

        <div className="detail-info">
          <h1 className="detail-name">{product.nombre}</h1>
          <p className="detail-price">$ {product.precio.toLocaleString("es-AR")}</p>
          <p className="detail-description">{product.descripcion}</p>

          <div className="detail-stock">
            {product.stock > 0 ? (
              <span className="stock-ok">✓ Stock disponible ({product.stock} unidades)</span>
            ) : (
              <span className="stock-out">✗ Sin stock</span>
            )}
          </div>

          {available > 0 ? (
            <>
              <div className="quantity-row">
                <button className="qty-btn" onClick={() => setQuantity((q) => Math.max(1, q - 1))}>−</button>
                <span className="qty-display">{quantity}</span>
                <button className="qty-btn" onClick={() => setQuantity((q) => Math.min(available, q + 1))}>+</button>
              </div>
              {inCart > 0 && (
                <p className="in-cart-note">Ya tenés {inCart} en el carrito. Podés agregar hasta {available} más.</p>
              )}
              <button
                className={`add-cart-btn ${added ? "added" : ""}`}
                onClick={handleAdd}
              >
                {added ? "✓ Agregado al carrito" : "Agregar al carrito"}
              </button>
            </>
          ) : (
            <p className="stock-out">No hay más unidades disponibles para agregar.</p>
          )}

          <Link to="/carrito" className="go-cart-link">Ver carrito →</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
