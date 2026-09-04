import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaLeaf,
  FaSeedling,
  FaFlask,
  FaHandshake,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

import heroImage from "../assets/images/hero.jpg";

import herb1 from "../assets/images/herb-1.jpeg";
import herb2 from "../assets/images/herb-2.jpeg";
import herb3 from "../assets/images/herb-3.jpeg";
import herb4 from "../assets/images/herb-4.jpeg";
import herb5 from "../assets/images/herb-5.jpeg";
import herb6 from "../assets/images/herb-6.jpeg";
import herb7 from "../assets/images/herb-7.jpeg";
import herb8 from "../assets/images/herb-8.jpeg";

function Home() {
  const products = [
    {
      name: "Raw Herbal Roots",
      image: herb1,
      description:
        "Naturally sourced and carefully selected herbal roots for bulk requirements.",
    },
    {
      name: "Dried Botanicals",
      image: herb2,
      description:
        "Quality dried botanical materials sourced through reliable supply networks.",
    },
    {
      name: "Dried Fruits",
      image: herb3,
      description:
        "Selected dried herbal fruits suitable for processing and further applications.",
    },
    {
      name: "Natural Botanicals",
      image: herb4,
      description:
        "Naturally sourced botanical ingredients handled with care and consistency.",
    },
    {
      name: "Fresh Amla",
      image: herb5,
      description:
        "Fresh Indian gooseberry sourced from agricultural and farmer networks.",
    },
    {
      name: "Dried Herbal Material",
      image: herb6,
      description:
        "Carefully dried herbal raw materials for industrial and commercial use.",
    },
    {
      name: "Wild Harvested Herbs",
      image: herb7,
      description:
        "Wild-harvested botanical materials sourced through responsible collection.",
    },
    {
      name: "Herbal Roots",
      image: herb8,
      description:
        "Selected roots supplied according to customer requirements and specifications.",
    },
  ];

  const services = [
    {
      icon: <FaSeedling />,
      title: "Direct Sourcing",
      description:
        "Direct connections with farmers, FPOs and grassroots-level stakeholders.",
    },
    {
      icon: <FaLeaf />,
      title: "Wild Harvesting",
      description:
        "Responsible sourcing of naturally occurring herbs through trusted networks.",
    },
    {
      icon: <FaFlask />,
      title: "Quality Control",
      description:
        "Focused on consistent quality and customer-specific raw material requirements.",
    },
    {
      icon: <FaHandshake />,
      title: "Contract Farming",
      description:
        "Structured farming partnerships for reliable year-round botanical supply.",
    },
  ];

  const [reviews, setReviews] = useState([
    {
      name: "Business Customer",
      rating: 5,
      comment:
        "Good quality herbal raw materials and professional service.",
    },
    {
      name: "Verified Buyer",
      rating: 5,
      comment:
        "Reliable sourcing and good communication throughout the enquiry process.",
    },
    {
      name: "Herbal Industry Customer",
      rating: 4,
      comment:
        "Good range of natural botanical materials and responsive support.",
    },
  ]);

  const [reviewName, setReviewName] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(5);

  const submitReview = (e) => {
    e.preventDefault();

    if (!reviewName.trim() || !reviewText.trim()) {
      return;
    }

    setReviews([
      ...reviews,
      {
        name: reviewName,
        rating: rating,
        comment: reviewText,
      },
    ]);

    setReviewName("");
    setReviewText("");
    setRating(5);
  };

  return (
    <main className="overflow-hidden bg-[#F8F6F0]">

      {/* =====================================================
          HERO
      ====================================================== */}

      <section
        className="relative min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 flex min-h-screen items-center">
          <div className="mx-auto w-full max-w-7xl px-6 py-32">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <p className="mb-5 flex items-center gap-3 text-sm font-bold uppercase tracking-[0.3em] text-green-300">
                <FaLeaf />
                Ganapathy Naturals
              </p>

              <h1 className="text-5xl font-bold leading-tight text-white md:text-7xl">
                Nature's Finest
                <span className="block text-green-300">
                  Botanical Resources
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-200 md:text-xl">
                A trusted supplier of sustainably sourced herbs and botanical
                raw materials, connecting natural resources directly with
                markets through transparent and traceable supply chains.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <Link
                  to="/products"
                  className="flex items-center gap-3 rounded-xl bg-green-700 px-7 py-4 font-semibold text-white transition hover:bg-green-800 hover:shadow-xl"
                >
                  Explore Products
                  <FaArrowRight />
                </Link>

                <Link
                  to="/contact"
                  className="rounded-xl border border-white/70 bg-white/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-green-900"
                >
                  Contact Us
                </Link>

              </div>
            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          COMPANY INTRO
      ====================================================== */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-14 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-green-700">
                About Ganapathy Naturals
              </p>

              <h2 className="text-4xl font-bold leading-tight text-green-950 md:text-5xl">
                Connecting Nature
                <span className="block text-green-700">
                  With Industry
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                Ganapathy Naturals is a trusted supplier of sustainably sourced
                herbs with 25 years of industry experience in the botanical and
                herbal sector.
              </p>

              <p className="mt-4 text-lg leading-8 text-gray-600">
                We create transparent and traceable supply chains connecting
                premium natural resources directly to markets while working
                closely with farmers, FPOs, tribal communities, NGOs,
                government institutions and KVKs.
              </p>

              <Link
                to="/about"
                className="mt-7 inline-flex items-center gap-3 font-bold text-green-700 transition hover:gap-5"
              >
                Learn More About Us
                <FaArrowRight />
              </Link>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-5"
            >

              <div className="rounded-3xl bg-green-50 p-7 text-center">
                <FaLeaf className="mx-auto text-4xl text-green-700" />
                <h3 className="mt-4 text-3xl font-bold text-green-950">
                  25+
                </h3>
                <p className="mt-2 text-gray-600">
                  Years Experience
                </p>
              </div>

              <div className="rounded-3xl bg-amber-50 p-7 text-center">
                <FaSeedling className="mx-auto text-4xl text-amber-700" />
                <h3 className="mt-4 text-3xl font-bold text-green-950">
                  Direct
                </h3>
                <p className="mt-2 text-gray-600">
                  Sourcing Networks
                </p>
              </div>

              <div className="rounded-3xl bg-orange-50 p-7 text-center">
                <FaFlask className="mx-auto text-4xl text-orange-700" />
                <h3 className="mt-4 text-3xl font-bold text-green-950">
                  Quality
                </h3>
                <p className="mt-2 text-gray-600">
                  Focused Supply
                </p>
              </div>

              <div className="rounded-3xl bg-lime-50 p-7 text-center">
                <FaHandshake className="mx-auto text-4xl text-lime-700" />
                <h3 className="mt-4 text-3xl font-bold text-green-950">
                  Trusted
                </h3>
                <p className="mt-2 text-gray-600">
                  Partnerships
                </p>
              </div>

            </motion.div>

          </div>
        </div>
      </section>


      {/* =====================================================
          PRODUCTS / HERBAL GALLERY
      ====================================================== */}

      <section className="bg-[#F8F6F0] py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              Our Botanicals
            </p>

            <h2 className="mt-3 text-4xl font-bold text-green-950 md:text-5xl">
              Natural Products We Source
            </h2>

            <p className="mt-5 text-lg leading-8 text-gray-600">
              Explore some of the botanical raw materials handled through our
              sourcing network.
            </p>

          </div>


          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">

            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                }}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="h-64 overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-green-950">
                    {product.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>

                  <Link
                    to="/products"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-green-700"
                  >
                    View Products
                    <FaArrowRight />
                  </Link>

                </div>

              </motion.div>
            ))}

          </div>


          <div className="mt-12 text-center">

            <Link
              to="/products"
              className="inline-flex items-center gap-3 rounded-xl bg-green-700 px-7 py-4 font-semibold text-white transition hover:bg-green-800 hover:shadow-lg"
            >
              View All Products
              <FaArrowRight />
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="bg-green-950 py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-300">
              What We Do
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white md:text-5xl">
              Our Sourcing Services
            </h2>

            <p className="mt-5 text-lg leading-8 text-green-100">
              Reliable sourcing solutions designed for pharmaceutical,
              nutraceutical and cosmetics industries.
            </p>

          </div>


          <div className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-4">

            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl bg-white/10 p-8 backdrop-blur-sm transition hover:-translate-y-2 hover:bg-white/15"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-400 text-3xl text-green-950">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-green-100">
                  {service.description}
                </p>

              </motion.div>
            ))}

          </div>


          <div className="mt-12 text-center">

            <Link
              to="/services"
              className="inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-green-900 transition hover:bg-green-100"
            >
              Explore Our Services
              <FaArrowRight />
            </Link>

          </div>

        </div>
      </section>


      {/* =====================================================
          WHY GANAPATHY NATURALS
      ====================================================== */}

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 md:grid-cols-2">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
                Why Choose Us
              </p>

              <h2 className="mt-3 text-4xl font-bold text-green-950 md:text-5xl">
                Built On Trust,
                <span className="block text-green-700">
                  Quality & Transparency
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-gray-600">
                We combine traditional harvesting knowledge with modern
                quality standards to provide dependable botanical sourcing
                solutions.
              </p>
            </div>


            <div className="space-y-5">

              {[
                "25 years of experience in the herbal and botanical sector",
                "Direct sourcing from grassroots-level stakeholders",
                "Transparent and traceable supply chains",
                "Custom quality specifications for corporate buyers",
                "Reliable year-round supply through contract farming",
                "Ethical and responsible sourcing practices",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl bg-[#F8F6F0] p-5"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-xl text-green-700" />
                  <p className="font-medium text-gray-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          REVIEWS
      ====================================================== */}

      <section className="bg-[#F8F6F0] py-20">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mx-auto max-w-3xl text-center">

            <p className="text-sm font-bold uppercase tracking-[0.25em] text-green-700">
              Customer Reviews
            </p>

            <h2 className="mt-3 text-4xl font-bold text-green-950 md:text-5xl">
              What Our Customers Say
            </h2>

            <p className="mt-5 text-lg text-gray-600">
              Feedback from customers and business partners.
            </p>

          </div>


          <div className="mt-12 grid gap-7 md:grid-cols-3">

            {reviews.map((review, index) => (
              <motion.div
                key={`${review.name}-${index}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl bg-white p-8 shadow-lg"
              >

                <div className="flex gap-1">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={
                        star <= review.rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}

                </div>

                <p className="mt-5 leading-7 text-gray-600">
                  "{review.comment}"
                </p>

                <p className="mt-6 font-bold text-green-900">
                  — {review.name}
                </p>

              </motion.div>
            ))}

          </div>


          {/* ADD REVIEW */}

          <div className="mx-auto mt-12 max-w-2xl rounded-3xl bg-white p-8 shadow-xl">

            <h3 className="text-2xl font-bold text-green-950">
              Leave a Review
            </h3>

            <form
              onSubmit={submitReview}
              className="mt-6 space-y-5"
            >

              <input
                type="text"
                placeholder="Your name"
                value={reviewName}
                onChange={(e) => setReviewName(e.target.value)}
                className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-green-600"
                required
              />

              <div>

                <p className="mb-3 font-medium text-gray-700">
                  Your Rating
                </p>

                <div className="flex gap-2">

                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setRating(star)}
                      className="text-2xl"
                    >
                      <FaStar
                        className={
                          star <= rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    </button>
                  ))}

                </div>

              </div>

              <textarea
                placeholder="Write your review..."
                value={reviewText}
                onChange={(e) => setReviewText(e.target.value)}
                rows="4"
                className="w-full resize-none rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-green-600"
                required
              />

              <button
                type="submit"
                className="w-full rounded-xl bg-green-700 px-6 py-4 font-bold text-white transition hover:bg-green-800"
              >
                Submit Review
              </button>

            </form>

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="bg-green-900 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <FaLeaf className="mx-auto text-5xl text-green-300" />

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Looking for Reliable Herbal Suppliers?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
            Talk to Ganapathy Naturals about your botanical raw material
            requirements and sourcing needs.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <a
              href="tel:+919591085566"
              className="flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-green-900 transition hover:bg-green-100"
            >
              <FaPhoneAlt />
              Call Us
            </a>

            <a
              href="https://wa.me/919591085566"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-xl bg-[#25D366] px-7 py-4 font-bold text-white transition hover:brightness-95"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <Link
              to="/contact"
              className="flex items-center gap-3 rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white hover:text-green-900"
            >
              Contact Us
              <FaArrowRight />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;
