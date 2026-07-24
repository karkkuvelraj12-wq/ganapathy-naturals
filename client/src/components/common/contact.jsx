function Contact() {
  return (
    <section className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-green-700">
        Contact Ganapathy Naturals
      </h1>

      <div className="mt-8 space-y-6">
        <div>
          <h4 className="font-semibold">📍 Address</h4>
          <p>
            25, Queens Valley Layout
            <br />
            Nallur Road
            <br />
            Hosur – 635103
            <br />
            Krishnagiri District
            <br />
            Tamil Nadu, India
          </p>
        </div>

        <div>
          <h4 className="font-semibold">📞 Phone</h4>
          <p>
            +91 95910 85566
            <br />
            +91 63615 95174
          </p>
        </div>

        <div>
          <h4 className="font-semibold">✉️ Email</h4>
          <p>ganapathisamy@ganapathynaturals.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;