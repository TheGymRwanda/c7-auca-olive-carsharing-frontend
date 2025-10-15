/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          light: '#3E7591',
          dark: '#265E78',
          darkblue: '#111827',
          borderblue: '#0f172a',
          DEFAULT: '#447991',
        },
        accent: {
          yellow: '#EBF3AB',
        },
        ghost: {
          light: '#B8B8B8',
          dark: '#d1d1d1',
        },
      },
      letterSpacing: {
        tight: '-0.05em',
      },
    },
  },
  plugins: [],
}
