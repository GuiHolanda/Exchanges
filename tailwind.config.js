/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlueMessem: '#043c7a',
        lightBlueMessem: '#055bc4',
        chumboMessem: '#1d2028',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
