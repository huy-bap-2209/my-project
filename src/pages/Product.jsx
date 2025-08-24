import Footer from "../components/footer";
import Navbar from "../components/Navbar";
import ProductList from "../components/ProductList";

function Product() {
  return (
    <div className="page-container">
      <header className="header">{<Navbar />}</header>
      <main className="content">
        <ProductList />
      </main>
      <Footer />
    </div>
  );
}
export default Product;
