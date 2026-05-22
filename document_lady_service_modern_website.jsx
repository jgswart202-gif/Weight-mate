export default function DocumentLadyService() {
  const services = [
    {
      title: 'Police Clearance Certificates',
      description:
        'Professional assistance with SAPS police clearance applications and updates.',
    },
    {
      title: 'Unabridged Birth Certificates',
      description:
        'Support with obtaining full birth certificates for travel, legal, and immigration purposes.',
    },
    {
      title: 'Marriage Certificates',
      description:
        'Application assistance for official marriage documentation.',
    },
    {
      title: 'Death Certificates',
      description:
        'Compassionate and professional assistance with death certificate applications.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black px-6 py-24 text-center">
        <div className="mx-auto max-w-5xl">
          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-yellow-500 md:text-7xl">
            The Document Lady Service
          </h1>

          <p className="mx-auto mb-8 max-w-3xl text-lg text-zinc-300 md:text-2xl">
            Fast, Reliable Assistance With Official South African Documents.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-2xl bg-red-700 px-8 py-4 text-lg font-semibold transition hover:bg-red-800">
              Get Assistance Today
            </button>

            <button className="rounded-2xl border border-yellow-500 px-8 py-4 text-lg font-semibold text-yellow-500 transition hover:bg-yellow-500 hover:text-black">
              View Services
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-zinc-950 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-6 text-4xl font-bold text-yellow-500">About Us</h2>

          <p className="text-lg leading-8 text-zinc-300">
            At The Document Lady Service, we help individuals and families obtain
            important official documents quickly and professionally. Our goal is
            to make the process simple, stress-free, and reliable.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-4xl font-bold text-yellow-500">
              Our Services
            </h2>
            <p className="text-zinc-400">
              Professional document assistance tailored to your needs.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl transition hover:border-yellow-500"
              >
                <h3 className="mb-4 text-2xl font-bold text-red-500">
                  {service.title}
                </h3>

                <p className="leading-7 text-zinc-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-zinc-950 px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="mb-10 text-4xl font-bold text-yellow-500">
            Why Choose Us
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {[
              'Fast & Professional Service',
              'Reliable Communication',
              'Friendly Support',
              'Modern & Secure Process',
              'Client-Focused Assistance',
              'Trusted Document Guidance',
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-zinc-800 bg-black p-6 text-lg text-zinc-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-900 p-10 shadow-2xl">
          <div className="mb-10 text-center">
            <h2 className="mb-4 text-4xl font-bold text-yellow-500">
              Contact Us
            </h2>

            <p className="text-zinc-400">
              Need assistance with your documents? Send us a message and we’ll
              get back to you.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                className="rounded-2xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="rounded-2xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500"
              />
            </div>

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-2xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500"
            />

            <select className="w-full rounded-2xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500">
              <option>Select Service Needed</option>
              <option>Police Clearance Certificate</option>
              <option>Unabridged Birth Certificate</option>
              <option>Marriage Certificate</option>
              <option>Death Certificate</option>
            </select>

            <textarea
              rows="5"
              placeholder="Message"
              className="w-full rounded-2xl border border-zinc-700 bg-black p-4 text-white outline-none focus:border-yellow-500"
            />

            <button className="w-full rounded-2xl bg-red-700 py-4 text-lg font-semibold transition hover:bg-red-800">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 bg-black px-6 py-10 text-center">
        <h3 className="mb-2 text-2xl font-bold text-yellow-500">
          The Document Lady Service
        </h3>

        <p className="mb-4 text-zinc-400">
          Professional Document Assistance
        </p>

        <p className="text-sm text-zinc-600">
          © 2026 The Document Lady Service. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
