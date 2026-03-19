import Link from 'next/link'

export default function Hero() {
  return (
    <section
      className="bg-uh-red hero-stripes py-24 px-4 text-center"
      aria-label="Hero banner"
    >
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display font-bold text-white text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-tight animate-fade-slide-up">
          Go Coogs.
          <br />
          Get Your Tickets.
        </h1>
        <p className="mt-5 text-red-100 text-lg sm:text-xl font-body animate-fade-slide-up-delay">
          Official UH Football &amp; Basketball Ticket Information
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center animate-fade-slide-up-delay-2">
          <Link
            href="/football"
            className="bg-white text-uh-red font-display font-bold uppercase tracking-wider px-8 py-3 rounded hover:bg-red-50 transition-colors shadow-md"
            aria-label="View football tickets"
          >
            Football Tickets
          </Link>
          <Link
            href="/basketball"
            className="bg-white text-uh-red font-display font-bold uppercase tracking-wider px-8 py-3 rounded hover:bg-red-50 transition-colors shadow-md"
            aria-label="View basketball tickets"
          >
            Basketball Tickets
          </Link>
        </div>
      </div>
    </section>
  )
}
