import { useState, useEffect } from "react";
import Item from "./Item";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("todos");

  useEffect(() => {
    fetch("/productos.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => {
        // fallback: load from relative path for dev
        import("../../data/productos.json").then((data) => {
          setProducts(data.default);
          setLoading(false);
        });
      });
  }, []);

  const categories = ["todos", ...new Set(products.map((p) => p.categoria))];

  const filtered =
    filter === "todos" ? products : products.filter((p) => p.categoria === filter);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner">◈</div>
        <p>Cargando catálogo...</p>
      </div>
    );
  }

  return (
    <section className="item-list-container">
      {greeting && <div className="section-greeting">{greeting}</div>}
      <div className="catalog-header">
        <h2 className="catalog-title">Catálogo</h2>
        <div className="filter-bar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="items-grid">
        {filtered.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ItemListContainer;
