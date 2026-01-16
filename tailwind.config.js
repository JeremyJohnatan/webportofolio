/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F2F2F2',    // Background abu-abu muda ala koran
        ink: '#1A1A1A',      // Hitam teks
        red: {
          600: '#FF2E00',    // Merah menyala persis poster Jepang
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], 
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}