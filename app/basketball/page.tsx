'use client'

import { useState, useMemo } from 'react'
import SportTabs from '@/components/SportTabs'
import FilterBar, { FilterState } from '@/components/FilterBar'
import TicketGrid from '@/components/TicketGrid'
import { BasketballGame, SportFilter } from '@/types'
import basketballData from '@/data/basketball.json'

const games = basketballData as BasketballGame[]
const BASKETBALL_TABS: SportFilter[] = ["Men's Basketball", "Women's Basketball"]
const DEFAULT_FILTERS: FilterState = { month: '', location: 'all', availableOnly: false }

export default function BasketballPage() {
  const [sport, setSport] = useState<SportFilter>("Men's Basketball")
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS)

  const filtered = useMemo(() => {
    return games.filter((g) => {
      if (g.sport !== sport) return false
      if (filters.month && !g.date.slice(5, 7).startsWith(filters.month)) return false
      if (filters.availableOnly && !g.ticketsAvailable) return false
      return true
    })
  }, [sport, filters])

  return (
    <div>
      {/* Header */}
      <div className="bg-uh-red hero-stripes py-14 px-4 text-center">
        <h1 className="font-display font-bold text-white text-4xl sm:text-5xl uppercase tracking-tight">
          2026–27 Basketball Schedule &amp; Tickets
        </h1>
        <p className="text-red-100 mt-2 font-body">Fertitta Center · Houston, TX</p>
      </div>

      {/* Sport sub-tabs on red band */}
      <div className="bg-uh-red pb-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SportTabs active={sport} onChange={setSport} tabs={BASKETBALL_TABS} />
        </div>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <FilterBar filters={filters} onChange={setFilters} showLocation={false} />
        </div>
        <TicketGrid games={filtered} />
      </section>
    </div>
  )
}
