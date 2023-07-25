/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily:{
      mono:['Poppins', 'sans-serif'],
      sans:['Philosopher', 'sans-serif']
    },
    screens:{
      xs:'550px',
      sm:'676px',
      md:'768px',
      lg:'992px',
      xl:'1200px',
      xxl:'1400px',
    },
    extend: {
      colors: {
        primary:'#5A8F7B',
        secondary:"#f8f9fa",
        gray:'#676768',
        danger:'#fc0000',
        border:'#D5D5D5',
        lightColor:'#ffffff',
        shadowColor:'rgba(1,6,33,0.06)',
      },
    },
  },
  plugins: [],
}

