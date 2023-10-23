/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    container : {
      center : true,
      padding : '16px',
    },
    extend: {
      colors : {
        primary : '#7e22ce',
        secondary : '#64748b',
        dark : '#0f172a',
      },
      screens : {
        'xl' : '1100px',
      }, 
      width : {
        smallin : '4px',
      }
    },
  },
  plugins: [],
}

