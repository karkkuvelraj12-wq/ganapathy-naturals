import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import leavesVideo from "../../assets/videos/leaves.mp4";

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar at the top
      if (currentScrollY <= 50) {
        setShowNavbar(true);
      }
      // Scrolling down → hide navbar
      else if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false);
      }
      // Scrolling up → show navbar
      else if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinkClass = ({ isActive }) =>
    `font-medium transition duration-300 ${
      isActive
        ? "text-green-400"
        : "text-white hover:text-green-400"
    }`;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 overflow-hidden shadow-md
        transition-transform duration-500 ease-in-out
        ${
          showNavbar
            ? "translate-y-0"
            : "-translate-y-full"
        }`}
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={leavesVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Navbar Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-8 py-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">

          <img
            src={logo}
            alt="Ganapathy Naturals"
            className="h-20 w-auto"
          />

          <div>
            <h1 className="text-2xl font-bold text-green-400">
              Ganapathy Naturals
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] text-gray-200">
              Nature • Purity • Trust
            </p>
          </div>

        </NavLink>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/products" className={navLinkClass}>
            Products
          </NavLink>

          <NavLink to="/services" className={navLinkClass}>
            Services
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

          <button
            className="
              rounded-xl
              bg-green-700
              px-6
              py-3
              font-semibold
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-green-800
              hover:shadow-lg
            "
          >
            Request Quote
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
