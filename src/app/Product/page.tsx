import Image from "next/image";
import p1 from "../../../Assets/p1.png";
import p2 from "../../../Assets/p2.png";
import p3 from "../../../Assets/p3.png";
import p4 from "../../../Assets/p4.png";

const products = [
  { src: p1, alt: "p1", name: "Luxurious Elixir Rough", price: "$200.00", volume: "100ml" },
  { src: p2, alt: "p2", name: "The Golden Legacy", price: "$160.00", volume: "100ml" },
  { src: p3, alt: "p3", name: "Luxurious Elixir", price: "$250.00", volume: "100ml" },
  { src: p4, alt: "p4", name: "Luxurious Essence", price: "$260.00", volume: "100ml" },
];

export default function Product() {
  return (
    <div className="product-container">
      <h1 className="product-header">
        Best Selling Products
      </h1>
      <div className="product-wrapper">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card"
          >
            <Image src={product.src} alt={product.alt} className="product-image" />
            <div>
              <h3 className="product-name">
                {product.name}
              </h3>
              <div className="product-details">
                <p className="product-price">{product.price}</p>
                <p className="product-volume">{product.volume}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
