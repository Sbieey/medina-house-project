/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#D3C00D',
        darkBlue: "#000248",
        green: "#007F61",
        bgGreencolor: "#006833"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'cinzel-decorative': ['Cinzel Decorative', 'serif'],
        '.dm-sans-regular': ['DM Sans', 'serif'],
        '.kumbh-sans-regular': ['Kumbh Sans'],
        'inter': ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
}
