import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import "../style/home.css";

function contact() {
  return (
    <div className="page-container">
      <header className="header">
        <div>{<Navbar />}</div>
      </header>
      <main className="content">
        <h1>Bạn có thể liên hệ với chúng tôi qua các phương thức sau</h1>
        Facebook
        <a href="https://www.facebook.com/huy.ngo.392523">Huy Ngô</a>
        <section>Email: Huykthl2004@gmail.com</section>
        <section>Phone: 0989962954</section>
      </main>
      <Footer />
    </div>
  );
}

export default contact;
