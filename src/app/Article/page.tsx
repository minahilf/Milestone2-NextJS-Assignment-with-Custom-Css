import Image from "next/image";
import a1 from "../../../Assets/a1.png";
import a2 from "../../../Assets/a2.png";
import a3 from "../../../Assets/a3.png";

export default function Articles() {
    const articles = [
        {
            id: 1,
            image: a1,
            title: "The Soothing Symphony of Lavender Perfumes: Unlocking the Secrets of a Fragrant Elixir",
            description: "Lavender, with its enchanting aroma and rich history, has been cherished for centuries as a symbol of relaxation, healing, and timeless beauty. In the world of perfumery, lavender plays a key role in creating captivating fragrances loved by many.",
        },
        {
            id: 2,
            image: a2,
            title: "The Art of Curating a Luxury Perfume Collection: A Symphony of Scents and Stories",
            description: "A luxury perfume collection is not just an assortment of fragrances; it is a reflection of one's taste, personality, and experiences. Each bottle holds a unique olfactory journey, crafted with the finest ingredients and artistic mastery.",
        },
        {
            id: 3,
            image: a3,
            title: "The Timeless Elegance of Rose Perfumes: Unveiling the Queen of Flowers in Fragrance",
            description: "Rose, often referred to as the 'Queen of Flowers,' has held a special place in human culture and history for centuries. Beyond its captivating beauty, this iconic bloom has also inspired perfumers to create some of the most timeless and exquisite fragrances in the world.",
        },
    ];

    return (
        <div className="articles-container">
            <h1 className="article-title">Latest Articles</h1>
            <div className="article-list">
                {articles.map((article) => (
                    <div key={article.id} className="article-card">
                        <Image src={article.image} alt={`article-${article.id}`} className="article-image" />
                        <div>
                            <h1 className="article-title-small">{article.title}</h1>
                            <p className="article-description">{article.description}</p>
                            <div className="read-more-btn">
                                <button className="read-more-btn-text">Read More</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
