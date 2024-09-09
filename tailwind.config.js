/** @type {import('tailwindcss').Config} */
export const content = [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}',
];
export const theme = {
  extend: {
    colors: {
      'mainColor': '#1F1F1F',
      'secondaryColor': '#494949',
    }
  },
};
export const plugins = [];
