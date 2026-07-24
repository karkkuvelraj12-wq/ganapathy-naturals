//import FloatingLeaves from "../ui/FloatingLeaves";
import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section
  className="relative min-h-screen bg-cover bg-center"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>


      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="max-w-3xl text-white">

          <span className="inline-block rounded-full bg-green-600/80 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
            🌿 Trusted Herbal Supplier
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
            Nature's Purity.
            <br />
            Industry's Trust.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-200 md:text-xl">
            Ganapathy Naturals supplies premium, lab-tested herbal ingredients
            through sustainable farming and complete traceability for
            manufacturers, wholesalers, and businesses across India.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-lg bg-green-700 px-8 py-4 font-semibold text-white transition hover:bg-green-800">
              Explore Products
            </button>

            <button className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-green-700">
              Request a Quote
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;