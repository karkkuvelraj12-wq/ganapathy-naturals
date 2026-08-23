import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/logo.png";
import leavesVideo from "../../assets/videos/leaves.mp4";

function Navbar() {
  const navLinkClass = ({ isActive }) =>
    `font-medium transition duration-300 ${
      isActive
        ? "text-green-700"
        : "text-gray-800 hover:text-green-700"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 overflow-hidden shadow-md">

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

      {/* Transparent Overlay */}
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
            <h1 className="text-2xl font-bold text-green-700">
              Ganapathy Naturals
            </h1>

            <p className="text-xs uppercase tracking-[0.25em] text-gray-700">
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

          <button className="rounded-xl bg-green-700 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-green-800 hover:shadow-lg">
            Request Quote
          </button>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;
