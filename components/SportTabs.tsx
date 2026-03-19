import { SportFilter } from '@/types'

const TABS: SportFilter[] = ['All', 'Football', "Men's Basketball", "Women's Basketball"]

interface Props {
  active: SportFilter
  onChange: (tab: SportFilter) => void
  tabs?: SportFilter[]
}

export default function SportTabs({ active, onChange, tabs = TABS }: Props) {
  return (
    <div
      className="flex flex-wrap gap-2"
      role="tablist"
      aria-label="Filter by sport"
    >
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={active === tab}
          onClick={() => onChange(tab)}
          className={`font-display text-sm uppercase tracking-wide px-4 py-2 rounded-full border transition-colors ${
            active === tab
              ? 'bg-white text-uh-red border-white font-bold'
              : 'bg-transparent text-white border-white/50 hover:border-white'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
