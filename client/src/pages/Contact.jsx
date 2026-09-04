import Navbar from "../components/layout/Navbar";
import {
  FaLeaf,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <>
      <Navbar />

      <main className="bg-[#F8F6F0]">

        {/* HERO */}
        <section className="relative overflow-hidden pt-40 pb-28">

          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#f8f6f0] via-[#eef8ef] to-[#d7f5d9]" />

          {/* Decorative Blur */}
          <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-green-300/20 blur-3xl"></div>

          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-green-500/10 blur-3xl"></div>

          {/* Floating Leaves */}

          <FaLeaf className="absolute left-20 top-28 text-5xl text-green-300 animate-bounce" />

          <FaLeaf className="absolute right-32 top-40 text-4xl text-green-400 animate-pulse" />

          <FaLeaf className="absolute left-1/2 bottom-10 text-6xl text-green-200 animate-bounce" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 text-center">

            <span className="rounded-full bg-green-700 px-5 py-2 text-white font-semibold shadow-lg">
              🌿 GET IN TOUCH
            </span>

            <h1 className="mt-8 text-6xl font-black text-green-950 leading-tight">
              We'd Love
              <br />
              To Hear From You
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-700">
              Whether you're looking for premium herbal ingredients,
              wholesale supply, or business partnerships,
              our team is ready to assist you.
            </p>

          </div>
        </section>
        {/* CONTACT CARDS */}

<section className="py-24 px-6">
  <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
    

    {/* ADDRESS */}

    <div className="rounded-3xl bg-gradient-to-br from-green-900 to-green-700 p-10 text-white shadow-2xl transition duration-500 hover:-translate-y-2">

      <div className="mb-8 flex items-center gap-5">

        <div className="rounded-full bg-white/20 p-5">
          <FaMapMarkerAlt className="text-3xl text-yellow-300" />
        </div>

        <h2 className="text-3xl font-bold">
          Our Address
        </h2>

      </div>

      <div className="space-y-3 text-lg text-green-50">

        <p>25, Queens Valley Layout</p>

        <p>Nallur Road</p>

        <p>Hosur – 635103</p>

        <p>Krishnagiri District</p>

        <p>Tamil Nadu, India</p>

      </div>

    </div>



    {/* RIGHT SIDE */}

    <div className="lg:col-span-2 flex flex-col gap-8">

      {/* PHONE */}

      <div className="rounded-3xl bg-white p-10 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <div className="flex items-center gap-5">

          <div className="rounded-full bg-green-100 p-5">

            <FaPhoneAlt className="text-3xl text-green-700"/>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-green-900">
              Phone
            </h2>

            <p className="mt-3 text-xl text-gray-700">

              +91 95910 85566

              <br />

              +91 63615 95174

            </p>

          </div>

        </div>

      </div>



      {/* EMAIL */}

      <div className="rounded-3xl bg-white p-10 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl">

        <div className="flex items-center gap-5">

          <div className="rounded-full bg-green-100 p-5">

            <FaEnvelope className="text-3xl text-green-700"/>

          </div>

          <div>

            <h2 className="text-3xl font-bold text-green-900">

              Email

            </h2>

            <p className="mt-3 text-xl text-gray-700 break-all">

              sales@ganapathynaturals.com

            </p>

          </div>

        </div>

      </div>

    </div>

  </div>
</section>
{/* ASSISTANCE SECTION */}

<section className="px-6 pb-24">
  <div className="mx-auto max-w-7xl">

    <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-green-800 via-green-700 to-green-600 p-10 shadow-2xl">

      {/* Decorative circles */}

      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10"></div>
      <div className="absolute -left-16 bottom-0 h-44 w-44 rounded-full bg-white/10"></div>

      <div className="relative z-10 flex flex-col items-center justify-between gap-8 lg:flex-row">

        <div>

          <h2 className="text-4xl font-black text-white">
            Need Immediate Assistance?
          </h2>

          <p className="mt-4 max-w-xl text-lg text-green-100">
            Our herbal experts are available to help you with
            product enquiries, bulk orders, pricing,
            sourcing and partnership opportunities.
          </p>

        </div>

        <div className="flex flex-wrap gap-5">

          <a
            href="tel:+919591085566"
            className="rounded-xl bg-white px-8 py-4 font-bold text-green-700 shadow-lg transition hover:scale-105"
          >
            📞 Call Us
          </a>

          <a
            href="mailto:ganapathisamy@ganapathynaturals.com"
            className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-green-700"
          >
            ✉ Email
          </a>

          <a
            href="https://wa.me/919591085566"
            target="_blank"
            rel="noreferrer"
            className="rounded-xl bg-[#25D366] px-8 py-4 font-bold text-white shadow-lg transition hover:scale-105"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>

    </div>

  </div>
</section>
{/* WHY CHOOSE US */}

<section className="bg-white py-24">

  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">

      <span className="font-semibold uppercase tracking-[0.3em] text-green-700">
        Why Choose Us
      </span>

      <h2 className="mt-4 text-5xl font-black text-green-900">
        Trusted Across India
      </h2>

    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      {[
        ["🌿", "Premium Herbs"],
        ["🛡", "Lab Tested"],
        ["🤝", "Trusted Supplier"],
        ["⚡", "Fast Response"],
      ].map(([icon, title]) => (
        <div
          key={title}
          className="rounded-3xl border bg-[#F8F6F0] p-10 text-center shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
        >
          <div className="text-6xl">{icon}</div>

          <h3 className="mt-6 text-2xl font-bold text-green-800">
            {title}
          </h3>

          <p className="mt-4 text-gray-600">
            Delivering premium herbal ingredients with
            quality assurance and trusted sourcing.
          </p>

        </div>
      ))}

    </div>

  </div>

</section>
<section className="py-24 bg-[#F8F6F0]">

  <div className="mx-auto max-w-7xl px-6">

    <h2 className="mb-10 text-center text-5xl font-black text-green-900">
      Find Us
    </h2>

    <div className="overflow-hidden rounded-[30px] shadow-2xl">

      <iframe
        title="Ganapathy Naturals"
        src="https://www.google.com/maps?q=12.776500,77.831944&output=embed"
        width="100%"
        height="500"
        loading="lazy"
        style={{ border: 0 }}
      />

    </div>

  </div>

</section>


      </main>
    </>
  );
}

export default Contact;
