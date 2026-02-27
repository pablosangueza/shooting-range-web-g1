/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        accent: '#b91c1c'
      },
      animation: {
        fade: 'fade 500ms ease-out both'
      },
      keyframes: {
        fade: {
          from: { opacity: '0', transform: 'translateY(6px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};
