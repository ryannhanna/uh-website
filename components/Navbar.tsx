'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { label: 'Home', href: '/' },
  { label: 'Football', href: '/football' },
  { label: 'Basketball', href: '/basketball' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 bg-uh-red shadow-md" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + wordmark */}
          <Link href="/" className="flex items-center gap-3" aria-label="UH Cougars Ticket Tracker home">
            <Image
              src="/uh-logo.svg"
              alt="UH Cougars logo"
              width={36}
              height={36}
              className="invert"
              priority
            />
            <span className="font-display font-bold text-white text-xl tracking-wider uppercase">
              Cougar Tickets
            </span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`font-display text-sm uppercase tracking-wide text-white transition-colors hover:text-red-200 pb-0.5 ${
                  pathname === href ? 'border-b-2 border-white' : ''
                }`}
                aria-current={pathname === href ? 'page' : undefined}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2 rounded"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden bg-uh-red-dark border-t border-red-800">
          {links.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className={`block px-6 py-3 font-display text-sm uppercase tracking-wide text-white hover:bg-uh-red transition-colors ${
                pathname === href ? 'bg-uh-red' : ''
              }`}
              onClick={() => setOpen(false)}
              aria-current={pathname === href ? 'page' : undefined}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
