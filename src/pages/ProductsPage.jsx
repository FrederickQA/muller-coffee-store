import ItemListContainer from "../components/products/ItemListContainer";

const ProductsPage = () => {
  return (
    <div className="products-page">
      <div className="page-banner">
        <h1>Catálogo completo</h1>
        <p>Equipos de café para todos los estilos y presupuestos</p>
      </div>
      <ItemListContainer />
    </div>
  );
};

export default ProductsPage;