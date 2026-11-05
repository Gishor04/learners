/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#DC2626',
          rose: '#E11D48',
          blue: '#2563EB',
          amber: '#F59E0B',
          dark: '#0F172A',
          card: '#1E293B'
        }
      },
      fontFamily: {
        heading: ['Outfit', 'Noto Sans Tamil', 'Noto Sans Sinhala', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Noto Sans Tamil', 'Noto Sans Sinhala', 'sans-serif']
      }
    },
  },
  plugins: [],
};
