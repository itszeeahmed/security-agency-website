/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0b0c0f',
          surface: '#111318',
        },
        accent: {
          gold: '#c8973a',
          light: '#e8b84b',
        },
        text: {
          primary: '#d4cfc8',
          muted: '#6b6860',
        },
        border: 'rgba(200,151,58,0.18)',
      },
      fontFamily: {
        'bebas': ['Bebas Neue', 'cursive'],
        'barlow': ['Barlow', 'sans-serif'],
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
      },
      animation: {
        'grid-drift': 'gridDrift 20s linear infinite',
        'pulse-gold': 'pulseGold 3s ease-in-out infinite',
        'border-sweep': 'borderSweep 0.4s ease-out',
      },
      keyframes: {
        gridDrift: {
          '0%': { transform: 'translate(0, 0)' },
          '100%': { transform: 'translate(-50px, -50px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(200, 151, 58, 0.7)' },
          '50%': { boxShadow: '0 0 0 10px rgba(200, 151, 58, 0)' },
        },
        borderSweep: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
