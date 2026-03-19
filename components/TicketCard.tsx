import { MapPin, Clock, Tag } from 'lucide-react'
import { Game } from '@/types'

function formatDate(dateStr: string) {
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

function getSportEmoji(game: Game) {
  if ('sport' in game) {
    return game.sport === "Women's Basketball" ? '🏀' : '🏀'
  }
  return '🏈'
}

function getSportLabel(game: Game) {
  if ('sport' in game) return game.sport
  return 'Football'
}

interface Props {
  game: Game
}

export default function TicketCard({ game }: Props) {
  const soldOut = !game.ticketsAvailable

  return (
    <article
      className={`relative bg-white rounded-lg shadow-md border-l-4 transition-all duration-200 ${
        soldOut
          ? 'border-gray-300 opacity-60'
          : 'border-uh-red hover:shadow-xl hover:scale-[1.02]'
      }`}
      style={{ boxShadow: soldOut ? undefined : 'var(--card-shadow)' }}
      aria-label={`${game.opponent} ticket info`}
    >
      {soldOut && (
        <span className="absolute top-3 right-3 bg-gray-500 text-white text-xs font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded">
          Sold Out
        </span>
      )}

      <div className="p-5">
        {/* Sport + date row */}
        <div className="flex items-center gap-2 text-xs text-gray-500 font-body mb-1">
          <span>{getSportEmoji(game)}</span>
          <span className="uppercase tracking-wide font-semibold">
            {getSportLabel(game)}
          </span>
          <span className="mx-1">·</span>
          <span>{game.isHome ? 'HOME' : 'AWAY'}</span>
          <span className="mx-1">·</span>
          <span>{formatDate(game.date)}</span>
        </div>

        {/* Opponent */}
        <h2 className="font-display font-bold text-uh-charcoal text-2xl uppercase leading-tight mt-1">
          vs. {game.opponent}
        </h2>

        {/* Venue + time */}
        <div className="mt-3 flex flex-col gap-1 text-sm text-gray-600 font-body">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-uh-red shrink-0" />
            <span>{game.venue}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={14} className="text-uh-red shrink-0" />
            <span>{game.time}</span>
          </div>
        </div>

        {/* Notes */}
        {game.notes && (
          <p className="mt-2 text-xs text-gray-500 font-body italic">{game.notes}</p>
        )}

        {/* Price + CTA */}
        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-uh-charcoal font-body font-semibold text-sm">
            <Tag size={14} className="text-uh-red" />
            <span>{game.priceRange}</span>
          </div>

          {soldOut ? (
            <button
              disabled
              className="bg-gray-300 text-gray-500 font-display font-bold uppercase text-xs tracking-wider px-4 py-2 rounded cursor-not-allowed"
              aria-label={`Tickets unavailable for ${game.opponent} on ${formatDate(game.date)}`}
            >
              Sold Out
            </button>
          ) : (
            <a
              href={game.ticketUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-uh-red hover:bg-uh-red-dark text-white font-display font-bold uppercase text-xs tracking-wider px-4 py-2 rounded transition-colors"
              aria-label={`Buy tickets for ${game.opponent} on ${formatDate(game.date)}`}
            >
              Buy Tickets
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
