import "../style/ProductList.css";

function ProductList() {
  const product = [
    {
      id: 1,
      name: "Mặt Hàng 1",
      price: 0,
      image: "",
    },
    {
      id: 2,
      name: "Mặt Hàng 2",
      price: 0,
      image: "",
    },
    {
      id: 3,
      name: "Mặt Hàng 3",
      price: 0,
      image: "",
    },
    {
      id: 4,
      name: "Mặt Hàng 4",
      price: 0,
      image: "",
    },
    {
      id: 5,
      name: "Mặt Hàng 5",
      price: 0,
      image: "",
    },
    {
      id: 6,
      name: "Mặt Hàng 6",
      price: 0,
      image: "",
    },
    {
      id: 7,
      name: "Mặt Hàng 7",
      price: 0,
      image: "",
    },
    {
      id: 8,
      name: "Mặt Hàng 8",
      price: 0,
      image: "",
    },
    {
      id: 9,
      name: "Mặt Hàng 9",
      price: 0,
      image: "",
    },
    {
      id: 10,
      name: "Mặt Hàng 10",
      price: 0,
      image: "",
    },
    {
      id: 11,
      name: "Mặt Hàng 11",
      price: 0,
      image: "",
    },
    {
      id: 12,
      name: "Mặt Hàng 12",
      price: 0,
      image: "",
    },
  ];
  const handleOrder = (item) => {
    alert(`Bạn đã đặt: ${item.name} - Giá: ${item.price.toLocaleString()} vnđ`);
  };

  return (
    <div className="product-list">
      {product.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.image} alt={item.name} />
          <h3>{item.name}</h3>
          <p>{item.price.toLocaleString()} VNĐ</p>
          <button className="order-btn" onClick={() => handleOrder(item)}>
            Đặt Hàng Ngay
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
