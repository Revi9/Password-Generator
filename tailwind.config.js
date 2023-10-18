/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      keyframes: {
        fadein: {
        '0%': { transform: 'scale(0)' },
        
        '100%': { transform: 'scale(100)' },
      }
    }},
  },
  plugins: [require("daisyui")],
}

