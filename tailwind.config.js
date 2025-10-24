/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lora: ['Lora', 'serif'],
        cursive: ['Dancing Script', 'Pacifico', 'Great Vibes', 'cursive'],
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        primary: {
          light: '#3E7591',
          dark: '#265E78',
          darkblue: '#111827',
          borderblue: '#0f172a',
          ocean: '#64A1C0',
          DEFAULT: '#447991',
          inputbg: '#64A1C0',
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
