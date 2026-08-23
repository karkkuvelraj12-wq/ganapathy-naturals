import Navbar from "../components/layout/Navbar";

const productCategories = [
  {
    title: "Herbal Powders",
    emoji: "🌿",
    description: "Premium herbal powders for food, wellness and natural applications.",
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
    description: "Herbal powders formulated for natural hair-care applications.",
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
    description: "Natural herbal powders for skincare and cosmetic applications.",
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
    description: "Herbal extracts for nutraceutical, food, cosmetic and industrial applications.",
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
    description: "Dehydrated vegetable powders for food processing and ingredient applications.",
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
    description: "Dehydrated vegetable flakes suitable for food manufacturing and processing.",
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
    description: "Spray-dried fruit powders for beverage, food and ingredient applications.",
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
    description: "Quality spice powders for food processing, manufacturing and culinary applications.",
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
    description: "Carefully processed dried herbs for food, wellness and ingredient applications.",
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
    description: "Botanical ingredients supplied for natural product and industrial applications.",
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

function Products() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F0]">

        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-700 px-6 pb-24 pt-40 text-white">

          {/* Decorative circles */}
          <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-green-400/20 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-green-300/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-5xl text-center">

            <span className="rounded-full bg-white/15 px-6 py-3 font-semibold backdrop-blur-md">
              🌿 OUR PRODUCTS
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Premium Natural
              <br />
              Ingredients
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-green-100 md:text-xl">
              Explore our range of herbal powders, botanical ingredients,
              herbal extracts, dehydrated vegetables, fruit powders,
              spices and dried herbs.
            </p>

          </div>
        </section>


        {/* PRODUCT CATEGORIES */}
        <section className="px-6 py-24">

          <div className="mx-auto max-w-7xl">

            <div className="mb-16 text-center">

              <span className="font-semibold uppercase tracking-[0.3em] text-green-700">
                Product Range
              </span>

              <h2 className="mt-4 text-4xl font-black text-green-950 md:text-5xl">
                Explore Our Products
              </h2>

              <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
                We offer a diverse range of natural ingredients for
                food, wellness, nutraceutical, cosmetic and industrial
                applications.
              </p>

            </div>


            <div className="grid gap-10 md:grid-cols-2">

              {productCategories.map((category) => (

                <div
                  key={category.title}
                  className="group overflow-hidden rounded-[30px] border border-green-100 bg-white shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
                >

                  {/* CATEGORY HEADER */}
                  <div className="bg-gradient-to-r from-green-900 to-green-700 p-8 text-white">

                    <div className="flex items-center gap-5">

                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 text-4xl backdrop-blur">
                        {category.emoji}
                      </div>

                      <div>

                        <h3 className="text-2xl font-black md:text-3xl">
                          {category.title}
                        </h3>

                        <p className="mt-2 text-sm text-green-100">
                          {category.products.length} Products
                        </p>

                      </div>

                    </div>

                    <p className="mt-6 leading-7 text-green-50">
                      {category.description}
                    </p>

                  </div>


                  {/* PRODUCT LIST */}
                  <div className="p-8">

                    <div className="grid gap-3 sm:grid-cols-2">

                      {category.products.map((product) => (

                        <div
                          key={product}
                          className="flex items-start gap-3 rounded-xl bg-[#F8F6F0] px-4 py-3 transition duration-300 hover:bg-green-50"
                        >

                          <span className="mt-1 text-green-700">
                            ✓
                          </span>

                          <span className="text-sm font-medium text-gray-700">
                            {product}
                          </span>

                        </div>

                      ))}

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>


        {/* BULK SUPPLY CTA */}
        <section className="px-6 pb-24">

          <div className="mx-auto max-w-7xl">

            <div className="relative overflow-hidden rounded-[35px] bg-gradient-to-r from-green-950 to-green-700 p-10 text-center shadow-2xl md:p-16">

              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />

              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10" />

              <div className="relative z-10">

                <span className="text-5xl">
                  🌿
                </span>

                <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
                  Looking for Bulk Supply?
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-green-100">
                  Contact our team for product availability,
                  bulk quantities, pricing and business enquiries.
                </p>

                <a
                  href="/contact"
                  className="mt-8 inline-block rounded-2xl bg-white px-10 py-4 font-bold text-green-800 shadow-xl transition duration-300 hover:scale-105"
                >
                  Request a Quote →
                </a>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Products;
