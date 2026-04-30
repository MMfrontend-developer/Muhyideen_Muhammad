/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        dark: '#030712',
        card: '#111827',
        primary: '#6366f1',
        'primary-dark': '#4f46e5',
        secondary: '#06b6d4',
        accent: '#f43f5e',
      },
    },
  },
  plugins: [],
}
