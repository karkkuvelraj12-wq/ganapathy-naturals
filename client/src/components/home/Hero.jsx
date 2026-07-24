import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="relative h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto max-w-7xl px-8">

          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-full bg-green-700 px-5 py-2 font-semibold text-white"
          >
            🌿 Trusted Herbal Supplier
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 70 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 max-w-4xl text-7xl font-black leading-tight text-white"
          >
            Nature's Purity.
            <br />
            Industry's Trust.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 max-w-3xl text-xl leading-9 text-gray-200"
          >
            Ganapathy Naturals supplies premium, lab-tested herbal ingredients
            through sustainable farming and complete traceability for
            manufacturers, wholesalers, and businesses across India.
          </motion.p>

          <div className="mt-10 flex gap-6">
            <Link
              to="/products"
              className="rounded-xl bg-green-700 px-8 py-4 font-bold text-white hover:bg-green-800"
            >
              Explore Products
            </Link>

            <Link
              to="/contact"
              className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white hover:bg-white hover:text-green-900"
            >
              Request Quote
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;