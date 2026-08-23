import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";

const productCategories = [
  {
    title: "Herbal Powders",
    emoji: "🌿",
    description:
      "Premium herbal powders for food, wellness and natural applications.",
    products: [
      "Moringa Powder",
      "Ashwagandha Powder",
      "Amla Powder",
      "Giloy Powder",
      "Neem Powder",
      "Tulsi Powder",
      "Shatavari Powder",
      "Brahmi Powder",
      "Triphala Powder",
      "Spirulina Powder",
      "Wheatgrass Powder",
      "Mulethi (Licorice) Powder",
      "Aloe Vera Powder",
      "Bhumi Amla Powder",
      "Kalmeth Powder",
      "Arjuna Powder",
      "Manjistha Powder",
      "Safed Musli Powder",
      "Shankhpushpi Powder",
      "Gokhru Powder",
    ],
  },

  {
    title: "Hair Care Herbal Powders",
    emoji: "💆",
    description:
      "Herbal powders formulated for natural hair-care applications.",
    products: [
      "Shikakai Powder",
      "Reetha Powder",
      "Hibiscus Powder",
      "Bhringraj Powder",
      "Brahmi Powder",
      "Amla Powder",
      "Neem Powder",
      "Henna Powder",
      "Orange Peel Powder",
      "Curry Leaf Powder",
    ],
  },

  {
    title: "Skin Care Herbal Powders",
    emoji: "✨",
    description:
      "Natural herbal powders for skincare and cosmetic applications.",
    products: [
      "Multani Mitti Powder",
      "Rose Petal Powder",
      "Neem Powder",
      "Orange Peel Powder",
      "Sandalwood Powder",
      "Manjistha Powder",
      "Aloe Vera Powder",
      "Hibiscus Powder",
      "Beetroot Powder",
      "Wild Turmeric (Kasturi Haldi) Powder",
    ],
  },

  {
    title: "Herbal Extracts",
    emoji: "🧪",
    description:
      "Herbal extracts for nutraceutical, food, cosmetic and industrial applications.",
    products: [
      "Moringa Extract",
      "Ashwagandha Extract",
      "Amla Extract",
      "Giloy Extract",
      "Tulsi Extract",
      "Neem Extract",
      "Brahmi Extract",
      "Shatavari Extract",
      "Turmeric (Curcumin 95%) Extract",
      "Green Tea Extract",
      "Ginseng Extract",
      "Ginkgo Biloba Extract",
      "Aloe Vera Extract",
      "Boswellia (Shallaki) Extract",
      "Fenugreek Extract",
      "Black Pepper (Piperine 95%) Extract",
      "Licorice (Mulethi) Extract",
      "Garcinia Cambogia Extract",
      "Gymnema Sylvestre Extract",
      "Bitter Melon (Karela) Extract",
      "Beetroot Extract",
      "Spirulina Extract",
      "Wheatgrass Extract",
      "Triphala Extract",
      "Arjuna Extract",
      "Manjistha Extract",
      "Kalmegh Extract",
      "Bhumi Amla Extract",
      "Safed Musli Extract",
      "Gokhru Extract",
      "Rosemary Extract",
      "Oregano Extract",
      "Cinnamon Extract",
      "Ginger Extract",
      "Garlic Extract",
      "Curry Leaf Extract",
      "Hibiscus Extract",
      "Rose Extract",
      "Jamun Seed Extract",
      "Senna Extract",
    ],
  },

  {
    title: "Dehydrated Vegetable Powders",
    emoji: "🥕",
    description:
      "Dehydrated vegetable powders for food processing and ingredient applications.",
    products: [
      "Tomato Powder",
      "Onion Powder (White/Red/Pink)",
      "Garlic Powder",
      "Ginger Powder",
      "Beetroot Powder",
      "Spinach Powder",
      "Carrot Powder",
      "Green Chilli Powder",
      "Potato Powder",
      "Pumpkin Powder",
      "Sweet Potato Powder",
      "Cabbage Powder",
      "Broccoli Powder",
      "Curry Leaves Powder",
      "Coriander Leaf Powder",
      "Mint Powder",
      "Fenugreek (Kasuri Methi) Powder",
      "Capsicum Powder",
      "Raw Papaya Powder",
    ],
  },

  {
    title: "Dehydrated Vegetable Flakes",
    emoji: "🥬",
    description:
      "Dehydrated vegetable flakes suitable for food manufacturing and processing.",
    products: [
      "Onion Flakes (White/Red/Pink)",
      "Garlic Flakes",
      "Potato Flakes",
      "Tomato Flakes",
      "Carrot Flakes",
      "Cabbage Flakes",
      "Green Capsicum Flakes",
      "Red Capsicum Flakes",
      "Beetroot Flakes",
      "Spinach Flakes",
      "Green Chilli Flakes",
      "Ginger Flakes",
      "Pumpkin Flakes",
      "Sweet Potato Flakes",
      "Raw Papaya Flakes",
      "Cauliflower Flakes",
      "Broccoli Flakes",
      "Okra (Bhindi) Flakes",
      "Fenugreek (Methi) Leaf Flakes",
      "Curry Leaves (Dry) Flakes",
    ],
  },

  {
    title: "Spray-Dried Fruit Powders",
    emoji: "🍓",
    description:
      "Spray-dried fruit powders for beverage, food and ingredient applications.",
    products: [
      "Spray Dried Mango Powder (Alphonso/Totapuri)",
      "Spray Dried Banana Powder",
      "Spray Dried Strawberry Powder",
      "Spray Dried Pineapple Powder",
      "Spray Dried Apple Powder",
      "Spray Dried Orange Powder",
      "Spray Dried Pink Guava Powder",
      "Spray Dried Papaya Powder",
      "Spray Dried Grape Powder",
      "Spray Dried Pomegranate Powder",
      "Spray Dried Blueberry Powder (Premium)",
      "Spray Dried Cranberry Powder (Premium)",
      "Spray Dried Kiwi Powder",
      "Spray Dried Coconut Milk Powder",
      "Spray Dried Jamun Powder",
    ],
  },

  {
    title: "Spice Powders",
    emoji: "🌶️",
    description:
      "Quality spice powders for food processing, manufacturing and culinary applications.",
    products: [
      "Red Chilli Powder (Lal Mirch Powder)",
      "Turmeric Powder (Haldi Powder)",
      "Coriander Powder (Dhania Powder)",
      "Cumin Powder (Jeera Powder)",
      "Black Pepper Powder (Kali Mirch Powder)",
      "Garlic Powder",
      "Onion Powder",
      "Dry Mango Powder (Amchur Powder)",
      "Ginger Powder (Sonth Powder)",
      "Fenugreek Powder (Methi Powder)",
      "Fennel Powder (Saunf Powder)",
      "Mustard Powder (Sarson Powder)",
      "Cinnamon Powder (Dalchini Powder)",
      "Clove Powder (Laung Powder)",
      "Cardamom Powder (Elaichi Powder)",
    ],
  },

  {
    title: "Dried Herbs",
    emoji: "🌱",
    description:
      "Carefully processed dried herbs for food, wellness and ingredient applications.",
    products: [
      "Oregano Leaves",
      "Thyme Leaves",
      "Basil Leaves",
      "Parsley Leaves",
      "Rosemary Leaves",
    ],
  },

  {
    title: "Botanicals",
    emoji: "🍃",
    description:
      "Botanical ingredients supplied for natural product and industrial applications.",
    products: [
      "Moringa Leaf",
      "Ashwagandha",
      "Tulsi",
      "Neem",
      "Aloe Vera",
      "Amla",
      "Shatavari",
      "Giloy",
      "Brahmi",
      "Mulethi (Licorice)",
      "Spirulina",
      "Wheatgrass",
      "Turmeric",
      "Ginger",
      "Senna Leaves",
      "Isabgol Husk",
      "Curry Leaves",
      "Rosemary",
      "Oregano",
      "Thyme",
      "Parsley",
      "Basil",
      "Lemongrass",
      "Reetha",
      "Shikakai",
      "Hibiscus",
      "Rose Petals",
      "Kalmegh",
      "Bhringraj",
      "Nagarmotha",
    ],
  },
];

const categoryColors = [
  "from-emerald-950 via-green-900 to-green-700",
  "from-green-950 via-emerald-900 to-teal-700",
  "from-lime-950 via-green-900 to-emerald-700",
  "from-teal-950 via-green-900 to-emerald-700",
];

function Products() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  const filteredCategories = useMemo(() => {
    return productCategories
      .filter(
        (category) =>
          activeCategory === "All" ||
          category.title === activeCategory
      )
      .map((category) => ({
        ...category,
        products: category.products.filter((product) =>
          product.toLowerCase().includes(search.toLowerCase())
        ),
      }))
      .filter((category) => category.products.length > 0);
  }, [activeCategory, search]);

  const totalProducts = productCategories.reduce(
    (total, category) => total + category.products.length,
    0
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-[#F8F6F0]">

        {/* ===================================================== */}
        {/* HERO */}
        {/* ===================================================== */}

        <section className="relative flex min-h-[680px] items-center overflow-hidden bg-[#071f14] px-6 pt-32 text-white">

          {/* Background glow */}
          <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-green-500/20 blur-[120px]" />

          <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-emerald-400/20 blur-[120px]" />

          {/* Decorative circles */}
          <div className="absolute right-[12%] top-[20%] h-40 w-40 rounded-full border border-white/10" />
          <div className="absolute right-[15%] top-[24%] h-24 w-24 rounded-full border border-white/10" />

          {/* Decorative leaves */}
          <div className="absolute left-[7%] top-[25%] rotate-[-25deg] text-7xl opacity-20">
            🍃
          </div>

          <div className="absolute right-[8%] bottom-[20%] rotate-45 text-8xl opacity-20">
            🌿
          </div>

          <div className="relative z-10 mx-auto w-full max-w-7xl">

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >

              <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold backdrop-blur-xl">
                <span className="text-xl">🌿</span>
                PREMIUM BOTANICAL INGREDIENTS
              </div>

              <h1 className="text-6xl font-black leading-[0.95] tracking-tight md:text-8xl">
                Nature's
                <span className="block text-green-400">
                  Finest.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-green-100 md:text-xl">
                Explore our extensive range of herbal powders,
                extracts, dehydrated ingredients, spices, dried herbs
                and botanicals.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <a
                  href="#collection"
                  className="rounded-2xl bg-white px-8 py-4 font-bold text-green-900 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
                >
                  Explore Collection ↓
                </a>

                <Link
                  to="/contact"
                  className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 font-bold text-white backdrop-blur transition duration-300 hover:bg-white hover:text-green-900"
                >
                  Request Quote →
                </Link>

              </div>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-20 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
            >

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-white">
                  {productCategories.length}
                </p>
                <p className="mt-1 text-sm text-green-200">
                  Categories
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-white">
                  {totalProducts}+
                </p>
                <p className="mt-1 text-sm text-green-200">
                  Products
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-white">
                  B2B
                </p>
                <p className="mt-1 text-sm text-green-200">
                  Supply
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <p className="text-3xl font-black text-white">
                  India
                </p>
                <p className="mt-1 text-sm text-green-200">
                  Supply
                </p>
              </div>

            </motion.div>

          </div>
        </section>

        {/* ===================================================== */}
        {/* COLLECTION */}
        {/* ===================================================== */}

        <section
          id="collection"
          className="relative px-6 py-28"
        >

          <div className="mx-auto max-w-7xl">

            {/* Heading */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center"
            >

              <span className="font-semibold uppercase tracking-[0.35em] text-green-700">
                Our Collection
              </span>

              <h2 className="mt-4 text-5xl font-black tracking-tight text-green-950 md:text-6xl">
                Explore Our Products
              </h2>

              <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
                A diverse portfolio of natural ingredients designed
                for food, wellness, nutraceutical, cosmetic and
                industrial applications.
              </p>

            </motion.div>

            {/* Search */}

            <div className="mx-auto mt-12 max-w-2xl">

              <div className="group relative">

                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-xl text-gray-400">
                  🔍
                </span>

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search products..."
                  className="w-full rounded-2xl border border-green-100 bg-white py-5 pl-14 pr-6 text-lg shadow-lg outline-none transition focus:border-green-500 focus:ring-4 focus:ring-green-100"
                />

              </div>

            </div>

            {/* Category filters */}

            <div className="mt-8 flex gap-3 overflow-x-auto pb-4">

              <button
                onClick={() => setActiveCategory("All")}
                className={`whitespace-nowrap rounded-full px-6 py-3 text-sm font-bold transition ${
                  activeCategory === "All"
                    ? "bg-green-900 text-white shadow-lg"
                    : "bg-white text-gray-600 shadow hover:bg-green-50"
                }`}
              >
                All Products
              </button>

              {productCategories.map((category) => (
                <button
                  key={category.title}
                  onClick={() => setActiveCategory(category.title)}
                  className={`whitespace-nowrap rounded-full px-6 py-3 text-sm font-bold transition ${
                    activeCategory === category.title
                      ? "bg-green-900 text-white shadow-lg"
                      : "bg-white text-gray-600 shadow hover:bg-green-50"
                  }`}
                >
                  {category.emoji} {category.title}
                </button>
              ))}

            </div>

            {/* Product categories */}

            <div className="mt-14 grid gap-8 lg:grid-cols-2">

              <AnimatePresence mode="popLayout">

                {filteredCategories.map((category, index) => {

                  const isExpanded = expanded === category.title;

                  const visibleProducts = isExpanded
                    ? category.products
                    : category.products.slice(0, 8);

                  return (
                    <motion.article
                      key={category.title}
                      layout
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{
                        duration: 0.6,
                        delay: (index % 2) * 0.1,
                      }}
                      className="group relative overflow-hidden rounded-[32px] border border-green-100 bg-white shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    >

                      {/* Top accent */}

                      <div
                        className={`h-2 bg-gradient-to-r ${
                          categoryColors[index % categoryColors.length]
                        }`}
                      />

                      {/* Header */}

                      <div
                        className={`relative overflow-hidden bg-gradient-to-br ${
                          categoryColors[index % categoryColors.length]
                        } p-8 text-white`}
                      >

                        {/* Glow */}

                        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition duration-700 group-hover:scale-150" />

                        <div className="relative z-10 flex items-start justify-between gap-5">

                          <div className="flex items-center gap-5">

                            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-4xl shadow-inner backdrop-blur-md transition duration-500 group-hover:scale-110 group-hover:rotate-3">
                              {category.emoji}
                            </div>

                            <div>

                              <h3 className="text-2xl font-black leading-tight md:text-3xl">
                                {category.title}
                              </h3>

                              <div className="mt-2 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-wider">
                                {category.products.length} Products
                              </div>

                            </div>

                          </div>

                        </div>

                        <p className="relative z-10 mt-6 max-w-xl leading-7 text-green-50">
                          {category.description}
                        </p>

                      </div>

                      {/* Product list */}

                      <div className="p-7">

                        <div className="grid gap-3 sm:grid-cols-2">

                          {visibleProducts.map((product, productIndex) => (

                            <motion.div
                              key={product}
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{
                                delay: productIndex * 0.02,
                              }}
                              className="group/item flex items-start gap-3 rounded-2xl border border-transparent bg-[#F8F6F0] px-4 py-4 transition duration-300 hover:border-green-100 hover:bg-green-50 hover:shadow-sm"
                            >

                              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-black text-green-700 transition group-hover/item:bg-green-700 group-hover/item:text-white">
                                ✓
                              </span>

                              <span className="text-sm font-semibold leading-6 text-gray-700 transition group-hover/item:text-green-900">
                                {product}
                              </span>

                            </motion.div>

                          ))}

                        </div>

                        {/* Show more */}

                        {category.products.length > 8 && (
                          <button
                            onClick={() =>
                              setExpanded(
                                isExpanded ? null : category.title
                              )
                            }
                            className="mt-6 w-full rounded-xl border border-green-200 py-3 font-bold text-green-800 transition hover:bg-green-800 hover:text-white"
                          >
                            {isExpanded
                              ? "Show Less ↑"
                              : `View All ${category.products.length} Products →`}
                          </button>
                        )}

                      </div>

                    </motion.article>
                  );
                })}

              </AnimatePresence>

            </div>

            {/* No result */}

            {filteredCategories.length === 0 && (
              <div className="py-24 text-center">

                <div className="text-6xl">🌿</div>

                <h3 className="mt-6 text-3xl font-black text-green-900">
                  No products found
                </h3>

                <p className="mt-3 text-gray-600">
                  Try searching for another herbal ingredient.
                </p>

                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All");
                  }}
                  className="mt-6 rounded-xl bg-green-800 px-6 py-3 font-bold text-white"
                >
                  Reset Search
                </button>

              </div>
            )}

          </div>
        </section>

        {/* ===================================================== */}
        {/* QUALITY STRIP */}
        {/* ===================================================== */}

        <section className="bg-white px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <div className="grid overflow-hidden rounded-[35px] bg-green-950 md:grid-cols-3">

              <div className="p-10 text-center text-white md:border-r md:border-white/10">

                <div className="text-5xl">🌱</div>

                <h3 className="mt-5 text-2xl font-black">
                  Natural Ingredients
                </h3>

                <p className="mt-3 leading-7 text-green-200">
                  A broad portfolio of herbal and botanical ingredients.
                </p>

              </div>

              <div className="p-10 text-center text-white md:border-r md:border-white/10">

                <div className="text-5xl">🧪</div>

                <h3 className="mt-5 text-2xl font-black">
                  Diverse Formats
                </h3>

                <p className="mt-3 leading-7 text-green-200">
                  Powders, extracts, flakes, dried herbs and botanicals.
                </p>

              </div>

              <div className="p-10 text-center text-white">

                <div className="text-5xl">📦</div>

                <h3 className="mt-5 text-2xl font-black">
                  Bulk Supply
                </h3>

                <p className="mt-3 leading-7 text-green-200">
                  Contact our team for business and bulk enquiries.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* ===================================================== */}
        {/* CTA */}
        {/* ===================================================== */}

        <section className="px-6 pb-28 pt-20">

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative mx-auto max-w-7xl overflow-hidden rounded-[40px] bg-gradient-to-br from-green-950 via-green-800 to-emerald-600 p-10 text-center shadow-2xl md:p-20"
          >

            {/* Decorative circles */}

            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[40px] border-white/5" />

            <div className="absolute -bottom-32 -right-20 h-80 w-80 rounded-full border-[50px] border-white/5" />

            <div className="relative z-10">

              <div className="text-6xl">
                🌿
              </div>

              <p className="mt-6 font-semibold uppercase tracking-[0.3em] text-green-200">
                Business Enquiries
              </p>

              <h2 className="mt-4 text-4xl font-black text-white md:text-6xl">
                Need Something Specific?
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">
                Talk to our team about product availability,
                bulk quantities, pricing and sourcing requirements.
              </p>

              <Link
                to="/contact"
                className="mt-10 inline-flex items-center rounded-2xl bg-white px-10 py-5 font-black text-green-900 shadow-2xl transition duration-300 hover:-translate-y-1 hover:scale-105"
              >
                Request a Quote
                <span className="ml-3 text-xl">→</span>
              </Link>

            </div>

          </motion.div>

        </section>

      </main>
    </>
  );
}

export default Products;
