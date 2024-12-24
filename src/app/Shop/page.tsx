import Image from "next/image";
import p1 from "../../../Assets/p1.png";
import p2 from "../../../Assets/p2.png";
import p3 from "../../../Assets/p3.png";
import p4 from "../../../Assets/p4.png";
import p5 from "../../../Assets/p5.png";
import p6 from "../../../Assets/p6.png";
import p7 from "../../../Assets/p7.png";
import p8 from "../../../Assets/p8.png";
import p9 from "../../../Assets/p9.png";
import p10 from "../../../Assets/p10.png";
import p11 from "../../../Assets/p11.png";
import p12 from "../../../Assets/p12.png";
import c6 from "../../../Assets/c6.png";
import pq from "../../../Assets/pq.png";

export default function Shop() {
  const products = [
    { src: p1, alt: "p1", name: "Luxurious Elixir Rough", price: "$200.00", volume: "100ml" },
    { src: p2, alt: "p2", name: "The Golden Legacy", price: "$160.00", volume: "100ml" },
    { src: p3, alt: "p3", name: "Luxurious Elixir", price: "$250.00", volume: "100ml" },
    { src: p4, alt: "p4", name: "Luxurious Essence", price: "$260.00", volume: "100ml" },
    { src: p5, alt: "p5", name: "Aurum Aura", price: "$200.00", volume: "100ml" },
    { src: p6, alt: "p6", name: "Gleaming Gilt", price: "$160.00", volume: "100ml" },
    { src: p7, alt: "p7", name: "Gilded Elixer Rough", price: "$170.00", volume: "100ml" },
    { src: p8, alt: "p8", name: "Golden Luminary", price: "$120.00", volume: "100ml" },
    { src: p9, alt: "p9", name: "Decadent Opal", price: "$160.00", volume: "100ml" },
    { src: p10, alt: "p10", name: "Glided Elixer", price: "$200.00", volume: "100ml" },
    { src: p11, alt: "p11", name: "Glamourous Gilt", price: "$160.00", volume: "100ml" },
    { src: p12, alt: "p12", name: "Luxury Enigma", price: "$190.00", volume: "100ml" },
  ];

  return (
    <div className="page-cont">
      <h1 className="shop-h">Best Selling Products</h1>

      <div className="products">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <Image src={product.src} alt={product.alt} className="product-image" />
            <div>
              <h3 className="product-name">{product.name}</h3>
              <div className="product-details">
                <p className="product-price">{product.price}</p>
                <p className="product-volume">{product.volume}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="pagination">Page 1 of 4</p>

      <h1 className="heading">Special Offers</h1>

      <div className="offers">
        <Image src={c6} alt="offer" className="offer-img" />
        <div className="offer-details">
          <h1 className="offer-title">
            Limited Time Offer: 20% OFF on Aqua Serenity Perfume!
          </h1>
          <div>
            <h1 className="offer-name">Aqua Serenity</h1>
            <h1 className="offer-tagline">Embrace the Tranquil Tides</h1>
            <p className="offer-description">
              Immerse yourself in the calming embrace of Aqua Serenity, a captivating fragrance that evokes the essence of water.
            </p>
            <div className="offer-button-cont">
              <button className="offer-button">Know More</button>
            </div>
          </div>
        </div>
      </div>

      <div className="offer-section-reverse">
        <Image src={pq} alt="offer" className="offer-img" />
        <div className="offer-details-reverse">
          <h1 className="offer-title">
            Limited Time Offer: 20% OFF on Golden Angel Perfume!
          </h1>
          <div>
            <h1 className="offer-name">Golden Angel</h1>
            <h1 className="offer-tagline">Unleash Your Divine Glow</h1>
            <p className="offer-description">
              Indulge in the divine allure of Golden Angel, a fragrance that embodies celestial elegance and radiance.
            </p>
            <div className="offer-button-cont">
              <button className="offer-button">Know More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
