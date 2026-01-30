/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {  
      colors: {
        primary: "hsl(var(--primary))",
        secondary: "hsl(var(--secondary))",
        lightHero: "#faf8ff",
        accent: "hsl(var(--accent))",
      },
    },
  },
  plugins: [], 
}
