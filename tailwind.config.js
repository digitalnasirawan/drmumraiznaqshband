/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1265A8',        // Primary Medical Blue
          teal: '#008B83',        // Teal Green
          deep: '#123B5D',        // Deep Blue
          light: '#EAF5FC',       // Light Clinical Blue
          dark: '#17252F',        // Near Black Text
          border: '#DCE9F0',      // Light Border
          tealHover: '#006D67',   // Dark Teal Hover
          blueHover: '#0E5289',
        }
      },
      fontFamily: {
        sans: ['var(--font-body)', 'Jost', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Jost', 'system-ui', 'sans-serif'],
        heading: ['var(--font-heading)', 'Figtree', 'sans-serif'],
      },
      boxShadow: {
        'card': '0 4px 20px -2px rgba(18, 59, 93, 0.08), 0 2px 6px -1px rgba(18, 59, 93, 0.04)',
        'card-hover': '0 12px 30px -4px rgba(18, 59, 93, 0.12), 0 4px 10px -2px rgba(18, 59, 93, 0.06)',
      }
    },
  },
  plugins: [],
}
