import Image from "next/image";
import welcome from "../../../Assets/welcome.png";

export default function Welcome() {
    return (
        <div className="w-cont">
            <div className="img-cont">
                <Image src={welcome} alt="pic" className="image" />
            </div>
            <div className="text-cont">
                <h1 className="welcome-h">Welcome to Local Face</h1>
                <p className="welcome-d">
                    Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive through scents that empower and inspire. Our curated collection, aptly named Victory Scented is a celebration of success and elegance, designed to unleash your victorious essence. Indulge in the sweet taste of triumph with captivating fragrances that tell the tale of your achievements. At Local Face, we believe that every victory deserves a signature scent, and we are dedicated to providing unforgettable fragrances that elevate your spirit and empower your journey.
                </p>
            </div>
        </div>
    );
}
