import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react'

interface Props {
  compact?: boolean
}

export default function ContactSection({ compact = false }: Props) {
  return (
    <section
      className="bg-uh-gray rounded-lg p-6 sm:p-8"
      aria-label="Ticket office contact information"
    >
      <h2 className="font-display font-bold text-uh-charcoal text-2xl uppercase tracking-wide mb-5">
        Ticket Office
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-body text-sm text-uh-charcoal">
        <div className="flex items-start gap-3">
          <MapPin size={18} className="text-uh-red mt-0.5 shrink-0" aria-hidden="true" />
          <div>
            <p className="font-semibold">Houston Athletics Ticket Office</p>
            <p>3700 Cullen Blvd, Suite E115</p>
            <p>Houston, TX 77204</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Phone size={18} className="text-uh-red shrink-0" aria-hidden="true" />
            <a href="tel:7134626647" className="hover:text-uh-red transition-colors">
              713-GO-COOGS (713-462-6647)
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail size={18} className="text-uh-red shrink-0" aria-hidden="true" />
            <a href="mailto:tickets@uh.edu" className="hover:text-uh-red transition-colors">
              tickets@uh.edu
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock size={18} className="text-uh-red shrink-0" aria-hidden="true" />
            <span>Monday–Friday, 9 AM–5 PM</span>
          </div>
        </div>
      </div>

      <a
        href="https://uh.evenue.net/list/ATH"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 mt-6 bg-uh-red hover:bg-uh-red-dark text-white font-display font-bold uppercase tracking-wider text-sm px-6 py-3 rounded transition-colors"
        aria-label="Open official UH ticket portal in a new tab"
      >
        Official Ticket Portal
        <ExternalLink size={14} aria-hidden="true" />
      </a>

      {!compact && (
        <div className="mt-6 pt-5 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm font-body text-gray-600">
          <div>
            <p className="font-semibold text-uh-charcoal mb-1">Will Call — Basketball</p>
            <p>Holman Ticket Office at Fertitta Center</p>
            <p>Opens 60 minutes before tip-off</p>
          </div>
          <div>
            <p className="font-semibold text-uh-charcoal mb-1">Will Call — Football</p>
            <p>TDECU Stadium, Gate 1</p>
            <p>Opens before each game</p>
          </div>
          <div>
            <p className="font-semibold text-uh-charcoal mb-1">Accepted Payment</p>
            <p>Amex, Discover, MasterCard, Visa</p>
            <p className="text-xs text-gray-500">(Checks accepted by mail)</p>
          </div>
          <div>
            <p className="font-semibold text-uh-charcoal mb-1">Accessible Seating</p>
            <p>Contact the ticket office directly to arrange accessible seating.</p>
          </div>
        </div>
      )}
    </section>
  )
}
