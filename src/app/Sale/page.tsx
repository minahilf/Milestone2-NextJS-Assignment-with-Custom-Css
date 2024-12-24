import Image from "next/image";
import sale from "../../../Assets/sale.png";

export default function Sale() {
    return (
        <div className="sale-container">
            <Image src={sale} alt="sale" className="w-full" />
            <div className="sale-text-container">
                <h1 className="sale-title">
                    Perfume Year-End Sale! <br /> Up to 50% OFF
                </h1>
                <p className="sale-description">
                    Discover an exquisite collection of premium perfumes at
                    unbelievable prices during our exclusive Perfume Sale!
                </p>
                <button className="sale-button">
                    Know More
                </button>
            </div>
        </div>
    );
}
