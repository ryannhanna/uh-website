export interface FootballGame {
  id: string
  opponent: string
  date: string
  time: string
  venue: string
  isHome: boolean
  ticketsAvailable: boolean
  ticketUrl: string
  priceRange: string
  notes: string
  sport?: never
}

export interface BasketballGame {
  id: string
  sport: "Men's Basketball" | "Women's Basketball"
  opponent: string
  date: string
  time: string
  venue: string
  isHome: boolean
  ticketsAvailable: boolean
  ticketUrl: string
  priceRange: string
  notes: string
}

export type Game = FootballGame | BasketballGame

export type SportFilter = 'All' | 'Football' | "Men's Basketball" | "Women's Basketball"
