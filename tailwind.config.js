/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6A8FFF',
        accent: '#8BB4FF',
        bg: '#050C1C',
        surface: '#0B1833',
        surface2: '#102549',
        text: '#E5ECFF',
        muted: '#94A3C6',
      },
    },
  },
  plugins: [],
};
