/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'textD1': 'rgba(26, 25, 25, 1)',
        'textD2': 'rgba(117, 117, 117, 1)',
        'textD3': 'rgba(163, 163, 163, 1)',
        'textL1': 'rgba(255, 255, 255, 1)',
        'textL2': 'rgba(255, 255, 255, 0.7)',


        'bgL1': 'rgba(126, 144, 254, 1)',
        'bgD1': 'rgba(152, 115, 255, 1)',
        'bgL2': 'rgba(126, 144, 254, 0.1)',
        'bgD2': 'rgba(152, 115, 255, 0.1)',
        'bgL3': 'rgba(152, 115, 255, 0.05)',
        'bgD3': 'rgba(126, 144, 254, 0.05)',


      },

    },
  },
  plugins: [],
}

