import Image from "next/image";
import Link from "next/link";
import logo from "../../../Assets/logo.png";
import tweet from "../../../Assets/Twitter.png";
import insta from "../../../Assets/Instagram.png";
import fb from "../../../Assets/Facebook.png";
import link from "../../../Assets/Linkedin.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo-sec">
        <Image src={logo} alt="logo" width={100} height={100} />
        <p className="nl-t">Subscribe to Our Newsletter:</p>
        <p className="nl-d">
          Receive Updates on New Arrivals and Special Promotions!
        </p>
        <div className="nl-i">
          <input
            type="email"
            placeholder="Your email here"
            className="email-input"
          />
          <button className="submit-button">Submit</button>
        </div>
      </div>

      <div className="footer-links">
        <div className="footer-column">
          <h3>Categories</h3>
          <ul>
            <li><Link href="#">Fashion</Link></li>
            <li><Link href="#">Jewelry</Link></li>
            <li><Link href="#">Sports</Link></li>
            <li><Link href="#">Electronics</Link></li>
            <li><Link href="#">Indoor</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Shopping</h3>
          <ul>
            <li><Link href="#">Payments</Link></li>
            <li><Link href="#">Delivery options</Link></li>
            <li><Link href="#">Buyer protection</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Customer care</h3>
          <ul>
            <li><Link href="#">Help center</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Privacy policy</Link></li>
            <li><Link href="#">Returns & refund</Link></li>
            <li><Link href="#">Survey & feedback</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h3>Pages</h3>
          <ul>
            <li><Link href="#">About Us</Link></li>
            <li><Link href="#">Shop</Link></li>
            <li><Link href="#">Contact Us</Link></li>
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>
        </div>
      </div>

      <div className="social-links">
        <Link href="#" className="social-icon">
          <Image src={tweet} alt="Twitter" width={32} height={32} />
        </Link>
        <Link href="#" className="social-icon">
          <Image src={fb} alt="Facebook" width={32} height={32} />
        </Link>
        <Link href="#" className="social-icon">
          <Image src={link} alt="LinkedIn" width={32} height={32} />
        </Link>
        <Link href="#" className="social-icon">
          <Image src={insta} alt="Instagram" width={32} height={32} />
        </Link>
      </div>

      <div className="copyright">
        <p>© 2023 Local Face Inc. All rights reserved</p>
      </div>
    </footer>
  );
}
