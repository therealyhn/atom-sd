/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Industrial Dark Palette
        obsidian: '#e5e5e5', // Main background
        charcoal: '#888888', // Surface
        pewter: '#0a0a0a',   // Borders / Dividers
        steel: '#121212',    // Muted text 
        vapor: '#0a0a0a',    // Primary text 

        // Accents
        brandOrange: '#ff4d00', // Industrial interaction (ticks, active states)
        brandblue: '#0066cc', // Secondary accent (rare use)
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'], // For labels/chips
      },
      fontSize: {
        // Editorial Scale
        'display': ['4.5rem', { lineHeight: '0.9', letterSpacing: '-0.04em' }],
        'h1': ['3.5rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
        'h2': ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
        'label': ['0.75rem', { lineHeight: '1.2', letterSpacing: '0.05em' }],
      },
      borderRadius: {
        'none': '0px',
        'sm': '2px', // Sharp, industrial corners
        'md': '4px',
        'full': '9999px', // For chips only
      },
      boxShadow: {
        'glow': '0 0 15px rgba(255, 77, 0, 0.2)', // Subtle focused state
      },
      keyframes: {
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'tick-swipe': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
      animation: {
        reveal: 'reveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'tick-swipe': 'tick-swipe 0.4s ease-out forwards',
      },
      spacing: {
        // Consistent grid/spacer units
        'rail': '24rem', // Width of the sticky rail
      }
    },
  },
  plugins: [],
}
