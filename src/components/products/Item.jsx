import { Link } from "react-router-dom";

const Item = ({ product }) => {
  const { id, nombre, precio, imagen, categoria } = product;

  return (
    <div className="item-card">
      <div className="item-image-wrap">
        <img src={imagen} alt={nombre} className="item-image" />
        <span className="item-category">{categoria}</span>
      </div>
      <div className="item-body">
        <h3 className="item-name">{nombre}</h3>
        <p className="item-price">$ {precio.toLocaleString("es-AR")}</p>
        <Link to={`/producto/${id}`} className="item-btn">Ver detalle →</Link>
      </div>
    </div>
  );
};

export default Item;
