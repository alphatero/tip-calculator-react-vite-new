// const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        cyan: {
          logo: `#3D6666`,
          dollar: `#9EBBBD`,
          DEFAULT: `#00474B`,
          darkest: `hsl(183, 100%, 15%)`,
          normal: `#5E7A7D`,
          light: `hsl(185, 41%, 84%)`,
          lightest: `hsl(189, 41%, 97%)`,
          focus: `#26C2AE`
        }
      }
    },
  },
}