export default function Footer() {
  return (
    <footer className="bg-uh-charcoal text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* Left */}
          <div>
            <p className="text-gray-400">
              © 2026 UH Cougars Ticket Tracker
            </p>
            <p className="text-gray-500 mt-1 text-xs">
              Fan site — not officially affiliated with the University of Houston or UH Athletics.
            </p>
          </div>

          {/* Center */}
          <div className="flex flex-col gap-1">
            <p className="font-display text-xs uppercase tracking-widest text-gray-400 mb-1">
              Quick Links
            </p>
            <a href="/" className="hover:text-uh-red transition-colors">Home</a>
            <a href="/football" className="hover:text-uh-red transition-colors">Football</a>
            <a href="/basketball" className="hover:text-uh-red transition-colors">Basketball</a>
            <a href="/contact" className="hover:text-uh-red transition-colors">Contact</a>
            <a
              href="https://uhcougars.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-uh-red transition-colors"
            >
              uhcougars.com ↗
            </a>
          </div>

          {/* Right */}
          <div>
            <p className="font-display text-xs uppercase tracking-widest text-gray-400 mb-1">
              Official Tickets
            </p>
            <p className="text-gray-300">
              All ticket purchases are processed through the official UH Athletics portal.
            </p>
            <a
              href="https://uh.evenue.net/list/ATH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-uh-red hover:text-red-400 transition-colors font-semibold"
            >
              uh.evenue.net ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
