import Image from "next/image";
import value from "../../../Assets/value.png";

export default function Value() {
  return (
    <div className="value-container">
      <Image 
        src={value} 
        alt="val" 
        className="value-image"
      />
      <div className="value-text-container">
        <h1 className="value-heading">Our Values</h1>
        <p className="value-paragraph">
          At Local Face, our perfume retail store is built on a foundation of passion and authenticity. We believe in celebrating the individuality of every customer, providing a diverse collection of scents that resonate with their unique personality and style. Our dedicated team of fragrance enthusiasts is committed to creating a welcoming and inclusive environment, where connections are forged, and inspiration thrives. 
          <br /><br />
          Embracing sustainability and continuous learning, Local Face strives to be more than just a shopping destination; we are a community that inspires and empowers individuals on their fragrance journey.
        </p>
      </div>
    </div>
  );
}
