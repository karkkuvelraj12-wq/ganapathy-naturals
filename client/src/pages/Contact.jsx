function Contact() {
  return (
    <section className="min-h-screen bg-[#F8F6F0] py-20">
      <div className="mx-auto max-w-7xl px-6">

        <h1 className="text-center text-4xl font-bold text-green-700">
          Contact Ganapathy Naturals
        </h1>

        <p className="mt-3 text-center text-gray-600">
          We're here to help with your herbal ingredient requirements.
        </p>

        <div className="mt-12 rounded-2xl bg-white p-8 shadow-lg">

          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-semibold text-green-700">
                📍 Address
              </h3>

              <p className="mt-2 text-gray-700 leading-8">
                25, Queens Valley Layout<br />
                Nallur Road<br />
                Hosur – 635103<br />
                Krishnagiri District<br />
                Tamil Nadu, India
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-700">
                📞 Phone
              </h3>

              <p className="mt-2 text-gray-700">
                +91 95910 85566<br />
                +91 63615 95174
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-green-700">
                ✉️ Email
              </h3>

              <p className="mt-2 text-gray-700">
                ganapathisamy@ganapathynaturals.com
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;