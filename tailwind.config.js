/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#334155",
        secondary: "#94a3b8",
        accent: "#f59e0b",
        background: "#f8fafc",
        card: "#ffffff"
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
        serif: ['var(--font-noto-serif)']
      }
    },
  },
  plugins: [],
}; 