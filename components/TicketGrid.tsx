import { Game } from '@/types'
import TicketCard from './TicketCard'

interface Props {
  games: Game[]
}

export default function TicketGrid({ games }: Props) {
  if (games.length === 0) {
    return (
      <div className="text-center py-16 text-gray-500 font-body">
        <p className="text-xl">No games match your filters.</p>
        <p className="text-sm mt-2">Try adjusting or clearing the filters above.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {games.map((game) => (
        <TicketCard key={game.id} game={game} />
      ))}
    </div>
  )
}
