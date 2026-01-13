/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Industrial Palette with Expanded Scales
        obsidian: '#e5e5e5',
        charcoal: {
          DEFAULT: '#888888',
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#888888',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        pewter: {
          DEFAULT: '#0a0a0a',
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        steel: {
          DEFAULT: '#121212',
          50: '#f3f4f6',
          100: '#e5e7eb',
          200: '#d1d5db',
          300: '#9ca3af',
          400: '#6b7280',
          500: '#4b5563',
          600: '#374151',
          700: '#1f2937',
          800: '#121212',
          900: '#111827',
        },
        vapor: {
          DEFAULT: '#0a0a0a',
          50: '#fafafa',
          100: '#f5f5f5',
          500: '#737373',
          900: '#171717',
          950: '#0a0a0a',
        },

        // Accents
        brandOrange: {
          DEFAULT: '#ff4d00',
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          accent: '#ff4d00',
        },
        brandblue: {
          DEFAULT: '#0066cc',
          500: '#0066cc',
          600: '#0052a3',
          700: '#003d7a',
        },
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
