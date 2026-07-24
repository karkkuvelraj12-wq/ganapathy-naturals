import { motion } from "framer-motion";

function AboutPreview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="https://images.unsplash.com/photo-1515586000433-45406d8e6662?w=900"
            alt="Herbal ingredients"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="font-semibold text-green-700">
            ABOUT US
          </span>

          <h2 className="mt-4 text-5xl font-bold text-gray-900">
            Growing Nature's Best,
            <br />
            Delivering Quality.
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ganapathy Naturals is committed to supplying premium herbal
            ingredients through responsible sourcing, quality assurance,
            and long-term partnerships.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">

            <div>🌿 Sustainable Farming</div>
            <div>🧪 Lab Tested</div>
            <div>🚜 Direct Sourcing</div>
            <div>📦 Bulk Supply</div>

          </div>

          <button className="mt-10 rounded-lg bg-green-700 px-8 py-4 font-semibold text-white hover:bg-green-800 transition">
            Learn More
          </button>

        </motion.div>

      </div>
    </section>
  );
}

export default AboutPreview;