/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
          "2xl": "1200px",
      },
  },
    extend: {
      colors: {
        'off-blue': '#191A42',
        'off-white': '#F7F9FB',
        'off-purple': '#24254B',
        'dark-purple': '#7C7EB9',
        'off-sky': '#48C3D7',
        'off-blue': '#111235'
      },
      fontSize: {
        'custom-md': '64px',
        'custom-sm': '32px'
      },
      lineHeight: {
        'custom-sm': '110%',
        'custom-md': '120%',
        'custom-lg': '175%',
        'custom-xl': '225%'
      },
      backgroundImage: {
        'hero-bg': 'url(../public/assets/images/hero-bg.webp)',
        'footer-bg': 'url(../public/assets/images/footer-bg.webp)'
      }
      
    },
  },
  plugins: [],
}