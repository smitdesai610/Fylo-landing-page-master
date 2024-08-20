

/** @type {import('tailwindcss').Config} */
export const content = ["./**/*.{html,js}"];
export const theme = {
  extend: {
    colors: {
      "light-grayish-blue": "hsl(240,75%,98%)",
      "light-gray": "hsl(0,0%,75%)",
      "bright-blue": "hsl(224,93%,58%)",
      "moderate-cyan": "hsl(170,45%,43%)",
      "very-dark-blue": "hsl(243,87%,12%)",
      "desaturated-blue": "hsl(238, 22%, 44%)",
    },
    fontFamily: {
      "raleway": ["Raleway", "sans-serif"],
      "open-sans": ["Open Sans", "sans-serif"],
    },
    width: {
      '20p': '20%',
      '30p': '30%',
    },
  },
};
export const plugins = [];
