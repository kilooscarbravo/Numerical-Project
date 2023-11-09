/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        brightColor: "#AB2EA3",
        backgroundColor: "#FDCCCC",
      },
    },
  },
  plugins: [],
}

