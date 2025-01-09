/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: '769px',
      desktop: '1228px',
    },
       fontFamily: {
        poppins: 'Poppins, serif',
        roboto: 'Roboto, serif',
      },
     
    extend: { colors: {
        Red:  'hsl(0, 78%, 62%)',
        Cyan: 'hsl(180, 62%, 55%)',
        Orange: 'hsl(34, 97%, 64%)',
        Blue: 'hsl(212, 86%, 64%)',
      },
    },
  },
  plugins: [],
};


