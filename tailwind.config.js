/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#1434CB',
          dark: '#102CA9',
        },
        page: '#EBF0FF',
        surface: '#F6FBF8',
        ink: {
          DEFAULT: '#101010',
          muted: '#515151',
        },
        accent: '#C45F00',
        success: '#1F8A4C',
        danger: '#C7371F',
        line: {
          DEFAULT: '#DEE6FF',
          footer: '#CCD7F4',
        },
        field: {
          DEFAULT: '#F9FAFF',
          placeholder: '#6B7280',
        },
      },
    },
  },
  plugins: [],
}
