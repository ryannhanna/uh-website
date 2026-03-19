const MONTHS = [
  { value: '', label: 'All Months' },
  { value: '09', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '01', label: 'January' },
]

export interface FilterState {
  month: string
  location: 'all' | 'home' | 'away'
  availableOnly: boolean
}

interface Props {
  filters: FilterState
  onChange: (f: FilterState) => void
  showLocation?: boolean
}

export default function FilterBar({ filters, onChange, showLocation = true }: Props) {
  return (
    <div
      className="flex flex-wrap items-center gap-3"
      role="group"
      aria-label="Filter options"
    >
      {/* Month */}
      <select
        value={filters.month}
        onChange={(e) => onChange({ ...filters, month: e.target.value })}
        className="font-body text-sm bg-white border border-gray-200 rounded px-3 py-2 text-uh-charcoal focus:outline-none focus:ring-2 focus:ring-uh-red"
        aria-label="Filter by month"
      >
        {MONTHS.map((m) => (
          <option key={m.value} value={m.value}>
            {m.label}
          </option>
        ))}
      </select>

      {/* Home / Away */}
      {showLocation && (
        <select
          value={filters.location}
          onChange={(e) => onChange({ ...filters, location: e.target.value as FilterState['location'] })}
          className="font-body text-sm bg-white border border-gray-200 rounded px-3 py-2 text-uh-charcoal focus:outline-none focus:ring-2 focus:ring-uh-red"
          aria-label="Filter by home or away"
        >
          <option value="all">Home &amp; Away</option>
          <option value="home">Home Only</option>
          <option value="away">Away Only</option>
        </select>
      )}

      {/* Available only */}
      <label className="flex items-center gap-2 font-body text-sm text-uh-charcoal cursor-pointer select-none">
        <input
          type="checkbox"
          checked={filters.availableOnly}
          onChange={(e) => onChange({ ...filters, availableOnly: e.target.checked })}
          className="accent-uh-red w-4 h-4"
          aria-label="Show available tickets only"
        />
        Available only
      </label>

      {/* Reset */}
      {(filters.month || filters.location !== 'all' || filters.availableOnly) && (
        <button
          onClick={() => onChange({ month: '', location: 'all', availableOnly: false })}
          className="font-body text-xs text-uh-red underline hover:no-underline"
          aria-label="Clear all filters"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}
