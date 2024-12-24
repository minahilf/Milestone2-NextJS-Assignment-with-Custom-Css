import Image from "next/image";
import perfume from "../../../Assets/main.png";

export default function Main() {
  return (
    <div className="main-cont">

      <div className="text-container">
        <h1 className="title">
          Elevate Your Spirit with Victory Scented Fragrances!
        </h1>
        <p className="description">
          Shop now and embrace the sweet smell of victory <br />
          with Local Face.
        </p>
        <div className="button-container">
          <button className="shop-now-button">
            Shop Now
          </button>
        </div>
      </div>

      <div className="image-container">
        <Image
          src={perfume}
          alt="perfume"
          className="perfume-image"
        />
      </div>
    </div>
  );
}
