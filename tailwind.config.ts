import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#bbf4ff',
          200: '#e6fbff',
          500: '#174d7b',
          700: '#053056',
        },
        beige: '#f5f5f5',
        dark: {
          700: '#384633',
          900: '#061800',
        },
      },
    },
  },
  plugins: [],
}
export default config
