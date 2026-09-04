import { motion } from "framer-motion";
import {
  FaLeaf,
  FaSeedling,
  FaCheckCircle,
  FaLink,
  FaUsers,
  FaTree,
  FaIndustry,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Services() {
  const services = [
    {
      icon: <FaLeaf />,
      title: "Herb Sourcing",
      description:
        "We source wild-harvested and cultivated herbs directly from grassroots-level stakeholders, ensuring reliable access to premium natural resources.",
    },
    {
      icon: <FaSeedling />,
      title: "Contract Farming",
      description:
        "Our structured contract farming programs help ensure a consistent, year-round supply of high-volume botanicals based on specific requirements.",
    },
    {
      icon: <FaCheckCircle />,
      title: "Quality Control",
      description:
        "We work closely with corporate buyers to meet strict custom quality specifications while maintaining consistency throughout the supply process.",
    },
    {
      icon: <FaLink />,
      title: "Traceable Supply Chain",
      description:
        "We create transparent and fully traceable supply chains that connect natural resources directly from source to market.",
    },
    {
      icon: <FaUsers />,
      title: "Farmer & FPO Partnerships",
      description:
        "We work directly with local farmers and Farmer Producer Organizations, supporting agricultural communities through fair-trade sourcing.",
    },
    {
      icon: <FaTree />,
      title: "Ethical Wildcrafting",
      description:
        "We cooperate with tribal communities for ethical wildcrafting and responsible harvesting of rare forest herbs while supporting ecological balance.",
    },
  ];

  const industries = [
    "Pharmaceutical",
    "Nutraceutical",
    "Cosmetics",
  ];

  return (
    <main className="bg-[#F8F6F0] text-gray-800">
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-700 px-6 pt-28">
        {/* Decorative leaves */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <FaLeaf className="absolute -left-10 top-20 text-[220px] text-white" />
          <FaSeedling className="absolute -right-10 bottom-0 text-[250px] text-white" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-semibold uppercase tracking-[0.35em] text-green-300"
          >
            What We Do
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold leading-tight md:text-7xl"
          >
            From Source to
            <span className="text-green-300"> Supply</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-50 md:text-xl"
          >
            Sustainable sourcing, transparent supply chains, and
            quality-focused botanical solutions for businesses across the
            natural-products industry.
          </motion.p>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-green-700">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-green-950 md:text-5xl">
            Reliable Botanical Supply
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ganapathy Naturals combines traditional harvesting knowledge with
            modern quality standards to provide a reliable, ethical, and
            scalable botanical supply network.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group rounded-[2rem] bg-white p-9 shadow-lg transition-all duration-300 hover:-translate-y-3 hover:bg-green-700 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-700 transition-all duration-300 group-hover:bg-white">
                  {service.icon}
                </div>

                <h3 className="mt-7 text-2xl font-bold text-green-950 group-hover:text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 group-hover:text-green-50">
                  {service.description}
                </p>

                <div className="mt-7 flex items-center gap-2 font-semibold text-green-700 group-hover:text-white">
                  <span>Learn More</span>
                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOURCING PROCESS */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-green-700">
              Our Approach
            </p>

            <h2 className="mt-4 text-4xl font-bold text-green-950 md:text-5xl">
              A Direct Path From Nature to Market
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Our sourcing model is designed around direct relationships,
              responsible harvesting, quality requirements, and transparent
              supply.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                number: "01",
                title: "Source",
                text: "Directly connect with farmers, FPOs and grassroots stakeholders.",
              },
              {
                number: "02",
                title: "Cultivate",
                text: "Support structured farming and responsible harvesting practices.",
              },
              {
                number: "03",
                title: "Control",
                text: "Work toward custom quality specifications and consistent supply.",
              },
              {
                number: "04",
                title: "Supply",
                text: "Connect premium botanical resources directly to markets.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative rounded-3xl bg-[#F8F6F0] p-8 text-center"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-700 text-xl font-bold text-white">
                  {step.number}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-green-950">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-600">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#EAF4E8] px-6 py-24">
        <div className="mx-auto max-w-7xl text-center">
          <FaIndustry className="mx-auto text-6xl text-green-700" />

          <p className="mt-6 font-bold uppercase tracking-[0.25em] text-green-700">
            Industries We Serve
          </p>

          <h2 className="mt-4 text-4xl font-bold text-green-950 md:text-5xl">
            Built for Growing Industries
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Our ethical and scalable sourcing model supports businesses
            operating across the pharmaceutical, nutraceutical, and cosmetics
            sectors.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry}
                className="rounded-3xl bg-white p-10 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <FaLeaf className="mx-auto text-4xl text-green-700" />

                <h3 className="mt-5 text-2xl font-bold text-green-950">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-900 px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Looking for a Reliable Botanical Partner?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
            Talk to Ganapathy Naturals about your botanical sourcing,
            quality, and supply requirements.
          </p>

          <Link
            to="/contact"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-bold text-green-800 transition-all duration-300 hover:-translate-y-1 hover:bg-green-100"
          >
            Contact Us
            <FaArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
