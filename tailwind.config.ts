import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#f8f4ee',
        cream: '#efe5d7',
        taupe: '#a18a74',
        walnut: '#4a3528',
        sand: '#d9c8b2'
      },
      fontFamily: {
        serif: ['"Times New Roman"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 12px 30px rgba(92, 71, 53, 0.12)'
      }
    }
  },
  plugins: []
};

export default config;
