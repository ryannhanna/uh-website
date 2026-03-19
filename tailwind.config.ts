import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'uh-red':      '#C8102E',
        'uh-red-dark': '#9B0B22',
        'uh-white':    '#FFFFFF',
        'uh-gray':     '#F5F5F5',
        'uh-charcoal': '#1A1A1A',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body:    ['Source Serif 4', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
