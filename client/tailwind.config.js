/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  rotate: {
    rotate: {
      '180': '180deg',
    },
  },
  theme: {
    extend: {
      backgroundImage: {
        'header': "url('/header.jpg')",
        'male-profile': "url('/male_profile.svg')",
      }
    }
  },
  plugins: [],
}

