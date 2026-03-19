import ContactSection from '@/components/ContactSection'

export default function ContactPage() {
  return (
    <div>
      {/* Header */}
      <div className="bg-uh-red hero-stripes py-14 px-4 text-center">
        <h1 className="font-display font-bold text-white text-4xl sm:text-5xl uppercase tracking-tight">
          Contact &amp; Ticket Info
        </h1>
        <p className="text-red-100 mt-2 font-body">Everything you need to reach the UH ticket office</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">

        {/* Full contact section */}
        <ContactSection />

        {/* Google Map */}
        <section aria-label="Map of TDECU Stadium">
          <h2 className="font-display font-bold text-uh-charcoal text-xl uppercase tracking-wide mb-3">
            Find Us
          </h2>
          <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <iframe
              title="TDECU Stadium map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.258!2d-95.4014!3d29.7210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640be2b8e4a9b9b%3A0x1e3d5a7c8b9c4a1e!2sTDECU%20Stadium!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>

        {/* Season ticket payment plans */}
        <section aria-label="Season ticket payment plans">
          <h2 className="font-display font-bold text-uh-charcoal text-xl uppercase tracking-wide mb-3">
            Season Ticket Payment Plans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-sm">
            <div className="bg-uh-gray rounded-lg p-5">
              <h3 className="font-semibold text-uh-charcoal mb-2">7-Month Plan</h3>
              <p className="text-gray-600">Payment on purchase date, then monthly Feb 1 – Jul 1.</p>
            </div>
            <div className="bg-uh-gray rounded-lg p-5">
              <h3 className="font-semibold text-uh-charcoal mb-2">3-Month Plan</h3>
              <p className="text-gray-600">Payment on purchase date, Feb 1, and Mar 1.</p>
            </div>
          </div>
        </section>

        {/* Important dates */}
        <section aria-label="Important ticket dates">
          <div className="bg-uh-red rounded-lg p-6 text-white">
            <h2 className="font-display font-bold text-xl uppercase tracking-wide mb-4">
              Important Dates
            </h2>
            <ul className="font-body text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="font-semibold shrink-0">Sept 17, 2026</span>
                <span className="text-red-100">Non-Conference Basketball single-game tickets on sale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold shrink-0">Oct 8, 2026</span>
                <span className="text-red-100">Big 12 Basketball single-game tickets on sale</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-semibold shrink-0">Early Oct 2026</span>
                <span className="text-red-100">Season tickets mailed to holders</span>
              </li>
            </ul>
          </div>
        </section>

      </div>
    </div>
  )
}
