import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        avgard: ['"Avgard"', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};
export default config;
