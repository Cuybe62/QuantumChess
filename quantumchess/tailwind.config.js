/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require('daisyui'),
    ],
    // (Optionnel) configuration des thèmes DaisyUI
    daisyui: {
      themes: ['light', 'dark', 'cupcake'],
    },
  }
  