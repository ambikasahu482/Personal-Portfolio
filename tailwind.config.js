// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          '0%': { transform: 'scale(1)' },
          '33%': { transform: 'scale(1.2)' },
          '66%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        blob: 'blob 10s infinite',
      },
      backgroundImage: {
        'skills-gradient': 'linear-gradient(38.73deg, rgba(255, 165, 0, 0.15) 0%, rgba(255, 140, 0, 0) 50%), linear-gradient(141.27deg, rgba(0, 255, 0, 0) 50%, rgba(0, 200, 0, 0.15) 100%)',
      },
    },
  },
  plugins: [],
};