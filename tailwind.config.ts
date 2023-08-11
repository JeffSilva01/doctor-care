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
          100: '#F7F9F9',
          200: '#DCE9E2',
          500: '#00856F',
          700: '#00453A',
        },
        beige: '#FFFAF1',
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
