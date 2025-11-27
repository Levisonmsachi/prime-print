import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2596be',
        'custom-yellow': '#ffc107',
      },
      backgroundImage: {
        'linear-to-br': 'linear-gradient(to bottom right, var(--tw-gradient-stops))',
        'linear-to-r': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config
