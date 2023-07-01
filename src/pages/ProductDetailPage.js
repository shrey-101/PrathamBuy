import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product-list/productComponents/ProductDetail";

function ProductDetailPage() {
  return (
    <div>
      <NavBar>
        <ProductDetail></ProductDetail>
      </NavBar>
    </div>
  );
}

export default ProductDetailPage;
