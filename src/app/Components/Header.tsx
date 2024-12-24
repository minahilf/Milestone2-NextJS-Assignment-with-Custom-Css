import Image from "next/image";
import logo from "../../../Assets/logo.png";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header-cont">
      <div className="logo-cont">
        <Image
          src={logo}
          alt="logo"
          className="logo"
        />
      </div>
      <div>
        <ul className="nav-links">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Shop">Shop</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Service">Service</Link></li>
        </ul>
      </div>
    </div>
  );
}
