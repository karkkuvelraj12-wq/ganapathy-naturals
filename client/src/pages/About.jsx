import { motion } from "framer-motion";
import {
  FaLeaf,
  FaSeedling,
  FaUsers,
  FaHandshake,
  FaFlask,
  FaCheckCircle,
} from "react-icons/fa";

function About() {
  const sourcingNetworks = [
    {
      icon: <FaSeedling />,
      title: "Local Farmers & FPOs",
      description:
        "Empowering agricultural communities and Farmer Producer Organizations through fair-trade practices.",
    },
    {
      icon: <FaLeaf />,
      title: "Tribal Communities",
      description:
        "Cooperating with indigenous communities for ethical wildcrafting and harvesting of rare forest herbs.",
    },
    {
      icon: <FaHandshake />,
      title: "NGOs & Government Institutions",
      description:
        "Partnering with non-governmental organizations and government bodies to support ecological balance.",
    },
    {
      icon: <FaFlask />,
      title: "KVKs",
      description:
        "Collaborating with Krishi Vigyan Kendras to implement scientifically supported farming practices.",
    },
  ];

  return (
    <main className="bg-[#F8F6F0] text-gray-800">
      {/* HERO */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-700 px-6 pt-28">
        <div className="absolute inset-0 opacity-10">
          <FaLeaf className="absolute left-10 top-20 text-[180px] text-white" />
          <FaSeedling className="absolute bottom-10 right-10 text-[220px] text-white" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl text-center text-white">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 font-semibold uppercase tracking-[0.35em] text-green-300"
          >
            About Ganapathy Naturals
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-bold leading-tight md:text-7xl"
          >
            Nature. Purity. <span className="text-green-300">Trust.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-50 md:text-xl"
          >
            A trusted supplier of sustainably sourced herbs with{" "}
            <strong>25 years of industry experience</strong> in the botanical
            and herbal sector.
          </motion.p>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="mb-3 font-bold uppercase tracking-[0.25em] text-green-700">
              Who We Are
            </p>

            <h2 className="text-4xl font-bold leading-tight text-green-950 md:text-5xl">
              Connecting Nature
              <br />
              Directly to Markets
            </h2>

            <p className="mt-7 text-lg leading-8 text-gray-600">
              Ganapathy Naturals is a trusted supplier of sustainably sourced
              herbs with 25 years of industry experience in the botanical and
              herbal sector.
            </p>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              We specialize in creating transparent, fully traceable supply
              chains that connect premium natural resources directly to
              markets.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-700 text-white">
                <FaCheckCircle className="text-2xl" />
              </div>

              <div>
                <p className="font-bold text-green-950">
                  25 Years of Experience
                </p>
                <p className="text-gray-600">
                  Trusted expertise in botanicals and herbs
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2rem] bg-gradient-to-br from-green-800 to-green-600 p-10 shadow-2xl">
              <FaLeaf className="mb-8 text-7xl text-green-200" />

              <h3 className="text-3xl font-bold text-white">
                Transparent & Traceable
              </h3>

              <p className="mt-5 text-lg leading-8 text-green-50">
                Our sourcing approach connects premium natural resources
                directly with markets while supporting the communities and
                people involved in the supply chain.
              </p>
            </div>

            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-white p-6 shadow-xl md:block">
              <p className="text-4xl font-bold text-green-700">25+</p>
              <p className="font-medium text-gray-600">Years Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOURCING NETWORKS */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="mb-3 font-bold uppercase tracking-[0.25em] text-green-700">
              Core Sourcing Networks
            </p>

            <h2 className="text-4xl font-bold text-green-950 md:text-5xl">
              Rooted in Strong Communities
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              We bypass traditional middle management to source wild-harvested
              and cultivated herbs directly from grassroots-level stakeholders.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {sourcingNetworks.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group rounded-3xl bg-[#F8F6F0] p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:bg-green-700 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-3xl text-green-700 transition-all duration-300 group-hover:bg-white">
                  {item.icon}
                </div>

                <h3 className="mt-7 text-2xl font-bold text-green-950 group-hover:text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600 group-hover:text-green-50">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTRACT FARMING */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem] bg-green-950 shadow-2xl">
            <div className="grid md:grid-cols-2">
              <div className="p-10 md:p-16">
                <p className="font-bold uppercase tracking-[0.25em] text-green-300">
                  Contract Farming
                </p>

                <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
                  Consistent Supply.
                  <br />
                  Custom Quality.
                </h2>

                <p className="mt-7 text-lg leading-8 text-green-100">
                  To ensure a consistent, year-round supply of high-volume
                  botanicals, Ganapathy Naturals engages in structured contract
                  farming.
                </p>

                <p className="mt-5 text-lg leading-8 text-green-100">
                  We work closely with corporate buyers to meet strict custom
                  quality specifications while optimizing production workflows
                  and keeping costs highly competitive.
                </p>
              </div>

              <div className="flex items-center justify-center bg-gradient-to-br from-green-700 to-green-500 p-12">
                <div className="text-center text-white">
                  <FaUsers className="mx-auto text-8xl text-green-100" />

                  <h3 className="mt-8 text-3xl font-bold">
                    Farmer to Market
                  </h3>

                  <p className="mt-4 text-lg leading-7 text-green-50">
                    Building reliable sourcing relationships from the ground
                    up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-[#EAF4E8] px-6 py-24">
        <div className="mx-auto max-w-6xl text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-green-700">
            Our Industry Partners
          </p>

          <h2 className="mt-4 text-4xl font-bold text-green-950 md:text-5xl">
            A Reliable & Scalable Partner
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            By balancing traditional harvesting wisdom with modern quality
            standards, Ganapathy Naturals serves as a reliable, ethical, and
            scalable partner for leading natural-product industries.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              "Pharmaceutical",
              "Nutraceutical",
              "Cosmetics",
            ].map((industry) => (
              <div
                key={industry}
                className="rounded-2xl bg-white px-8 py-10 shadow-lg"
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

      {/* FINAL CTA */}
      <section className="bg-green-800 px-6 py-20 text-center">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Let’s Build a Sustainable Supply Chain
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
            Partner with Ganapathy Naturals for sustainably sourced,
            traceable, and quality-focused botanical ingredients.
          </p>
        </div>
      </section>
    </main>
  );
}

export default About;
