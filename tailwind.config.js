/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cyberpunk: ['Cyberpunk', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 2s infinite',
        glow: 'glow 2s ease-in-out infinite',
        float: 'float 3s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 2em #646cffaa)' },
          '50%': { filter: 'drop-shadow(0 0 4em #646cffaa)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};