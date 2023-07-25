/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontFamily: {
        manrope: "'Manrope', sans-serif"
      },
      colors: {
        'title-color': "#1C1C1C",
        'para-color': "#777777",
        'light-color': "#F4F4F4",
        'star-color': "#FFC850",
        'footer-gray': "#F4F4F4"
      },
      backgroundImage: {
        'btn-gradient': "linear-gradient(270deg, #F00, #FF8938)",
        'grid-gradient-2': "linear-gradient(90deg, #D9D9D9, rgba(255, 255, 255, 0.00))",
        'footer-bg': "linear-gradient(270deg, rgba(255, 0, 0, 0.10), rgba(255, 137, 56, 0.10))",
        'featured-gradient': "linear-gradient(180deg, #F4F4F4 0%, rgba(244, 244, 244, 0.00) 100%)",
        'bg-img': "linear-gradient(270deg, #F00, #FF8938), url('./../images/bg_cup.png')"
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem'
      }
    }
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light']
  }
}