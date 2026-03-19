'use client'

import { useState, useMemo } from 'react'
import Hero from '@/components/Hero'
import SportTabs from '@/components/SportTabs'
import FilterBar, { FilterState } from '@/components/FilterBar'
import TicketGrid from '@/components/TicketGrid'
import ContactSection from '@/components/ContactSection'
import { Game, SportFilter } from '@/types'
import footballData from '@/data/football.json'
import basketballData from '@/data/basketball.json'

const allGames = [
  ...(footballData as Game[]),
  ...(basketballData as Game[]),
]

const DEFAULT_FILTERS: FilterState = { month: '', location: 'all', availableOnly: false }

export default function HomePage() {
  const [sport, setSport] = useState<SportFilter>('All')
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS)

  const filtered = useMemo(() => {
    return allGames.filter((g) => {
      if (sport === 'Football' && 'sport' in g) return false
      if (sport === "Men's Basketball" && ('sport' in g ? g.sport !== "Men's Basketball" : true)) return false
      if (sport === "Women's Basketball" && ('sport' in g ? g.sport !== "Women's Basketball" : true)) return false

      if (filters.month && !g.date.slice(5, 7).startsWith(filters.month)) return false
      if (filters.location === 'home' && !g.isHome) return false
      if (filters.location === 'away' && g.isHome) return false
      if (filters.availableOnly && !g.ticketsAvailable) return false

      return true
    })
  }, [sport, filters])

  return (
    <>
      <Hero />

      {/* Tabs + Filters on red band */}
      <div className="bg-uh-red py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center gap-4">
          <SportTabs active={sport} onChange={setSport} />
        </div>
      </div>

      {/* Filter bar + grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <FilterBar filters={filters} onChange={setFilters} />
        </div>
        <TicketGrid games={filtered} />
      </section>

      {/* Contact */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <ContactSection />
      </section>
    </>
  )
}
