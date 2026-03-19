'use client'

import { useState, useMemo } from 'react'
import FilterBar, { FilterState } from '@/components/FilterBar'
import TicketGrid from '@/components/TicketGrid'
import { FootballGame } from '@/types'
import footballData from '@/data/football.json'

const games = footballData as FootballGame[]
const DEFAULT_FILTERS: FilterState = { month: '', location: 'all', availableOnly: false }

export default function FootballPage() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS)

  const filtered = useMemo(() => {
    return games.filter((g) => {
      if (filters.month && !g.date.slice(5, 7).startsWith(filters.month)) return false
      if (filters.availableOnly && !g.ticketsAvailable) return false
      return true
    })
  }, [filters])

  return (
    <div>
      {/* Header */}
      <div className="bg-uh-red hero-stripes py-14 px-4 text-center">
        <h1 className="font-display font-bold text-white text-4xl sm:text-5xl uppercase tracking-tight">
          2026 Football Schedule &amp; Tickets
        </h1>
        <p className="text-red-100 mt-2 font-body">TDECU Stadium · Houston, TX</p>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <FilterBar filters={filters} onChange={setFilters} showLocation={false} />
        </div>
        <TicketGrid games={filtered} />

        {/* Contact callout */}
        <div className="mt-10 bg-uh-gray rounded-lg p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="font-body text-uh-charcoal">
            Questions about football tickets?
          </p>
          <a
            href="tel:7134626647"
            className="font-display font-bold text-uh-red uppercase tracking-wide text-sm hover:underline"
            aria-label="Call the ticket office at 713-GO-COOGS"
          >
            Call 713-GO-COOGS →
          </a>
        </div>
      </section>
    </div>
  )
}
