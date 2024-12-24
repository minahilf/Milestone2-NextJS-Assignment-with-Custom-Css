import Image from "next/image";
import about from "../../../Assets/about.png";
import about2 from "../../../Assets/about2.png";

export default function About() {
    return (
        <div className="about-cont">
            <div className="about-header">
                <Image
                    src={about} 
                    alt="About" 
                    className="about-image"
                />
                <div className="about-overlay">
                    <h1 className="about-title">About Us</h1>
                    <p className="about-description">
                        At Local Face, we believe that perfumes are more than just scents; they are expressions of ones individuality and style. Our passion for exquisite fragrances led us to curate a collection that captures the essence of diverse personalities, bringing you an unparalleled olfactory experience.
                    </p>
                </div>
            </div>

            <div className="story-section">
                <h1 className="story-title">Our Story</h1>
                <p className="story-description">
                    Local Face Perfumes was founded by a group of perfume enthusiasts with a shared vision to create a haven for perfume lovers seeking authentic, locally-inspired fragrances. Inspired by the diversity and richness of cultures around the world, we set out on a journey to curate a collection of scents that capture the essence of each region. Our aim is to bring you closer to the heart and soul of different cultures through the art of perfumery.
                </p>
            </div>
            <Image src={about2} alt="about" className="about-second-image" />

            <div className="unique-section">
                <h1 className="unique-title">What Makes Us Unique</h1>
                <div className="unique-features">
                    <div className="feature">
                        <h2 className="feature-title">Locally Inspired</h2>
                        <p className="feature-description">
                            Our perfumes are meticulously crafted to reflect the cultural heritage, traditions, and landscapes of various regions. From the vibrant streets of Marrakech to the serene cherry blossom gardens of Kyoto, each fragrance tells a unique story that resonates with its origin.
                        </p>
                    </div>

                    <div className="feature">
                        <h2 className="feature-title">High Quality Ingredients</h2>
                        <p className="feature-description">
                            We believe that the key to an extraordinary scent lies in the quality of ingredients. Thats why we collaborate with expert perfumers who source the finest and ethically-sourced materials from around the world. We never compromise on the quality of our products, ensuring a long-lasting and luxurious experience.
                        </p>
                    </div>

                    <div className="feature">
                        <h2 className="feature-title">Personalized Service</h2>
                        <p className="feature-description">
                            We understand that choosing the perfect scent is a deeply personal experience. Our team of fragrance experts is always ready to assist you in finding a fragrance that complements your personality and style. Whether you are exploring new scents or seeking to rediscover an old favorite, were here to guide you every step of the way.
                        </p>
                    </div>
                </div>
                <p className="closing-description">
                    Join us on this olfactory adventure as we celebrate the diverse tapestry of scents from around the world. Discover the captivating aromas that embrace the essence of local cultures and connect with the beauty of our shared humanity.
                </p>
            </div>
        </div>
    );
}
