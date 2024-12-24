import Image from "next/image";
import c1 from "../../../Assets/c1.png";
import c2 from "../../../Assets/c2.png";
import c3 from "../../../Assets/c3.png";
import c4 from "../../../Assets/c4.png";
import c5 from "../../../Assets/c5.png";
import c6 from "../../../Assets/c6.png";
import c7 from "../../../Assets/c7.png";

export default function Collection() {
    return (
        <div className="collection-container">
            <h1 className="col-title">Our Collections</h1>
            <div className="collection-row">
                {/* Collection 1 */}
                <div className="collection-item">
                    <Image src={c1} alt="Designer Delight Collection" className="collection-image" />
                    <p className="collection-description">Designer Delights Collection</p>
                </div>
                {/* Collection 2 */}
                <div className="collection-item">
                    <Image src={c2} alt="Travel Essential Collection" className="collection-image" />
                    <p className="collection-description">Travel Essentials Collection</p>
                </div>
            </div>

            <div className="collection-row">
                {/* Collection 3 */}
                <div className="collection-item">
                    <Image src={c3} alt="Special Occasions Collection" className="collection-image" />
                    <p className="collection-description">Special Occasions Collection</p>
                </div>
                {/* Collection 4 */}
                <div className="collection-item">
                    <Image src={c4} alt="Seasonal Sensations Collection" className="collection-image" />
                    <p className="collection-description">Seasonal Sensations Collection</p>
                </div>
            </div>

            <div className="collection-row">
                {/* Collection 5 */}
                <div className="collection-item">
                    <Image src={c5} alt="Vintage Treasures Collection" className="collection-image" />
                    <p className="collection-description">Vintage Treasures Collection</p>
                </div>
                {/* Collection 6 */}
                <div className="collection-item">
                    <Image src={c6} alt="Limited Edition Collection" className="collection-image" />
                    <p className="collection-description">Limited Edition Collection</p>
                </div>
                {/* Collection 7 */}
                <div className="collection-item">
                    <Image src={c7} alt="Modern Classics Collection" className="collection-image" />
                    <p className="collection-description">Modern Classics Collection</p>
                </div>
            </div>
        </div>
    );
}
