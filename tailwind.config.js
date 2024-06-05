/** @type {import('tailwindcss').Config} */

const colors = {

  //Main Color
  main: '#121212',

  // Base Color (gray)
  base1: '#262626',
  base2: '#3A3A3A',
  base3: '#4e4e4e',

  // Text Colors (white)
  text1: '#FFFFFF',
  text2: '#EBEBEB',
  text3: '#A1A1AA',

  // Colors
  primary: '#1E88E5',
  secondary: '#491EE5 ',
  accent: '#3a3a3a',
  destructive: '#f87272',
  warning: '#FFB84D',
  success: '#36d399',
  info: "#DBC2AF"
}


module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        main: colors.main,
        base1: colors.base1,
        base2: colors.base2,
        base3: colors.base3,
        accent: colors.accent,
        primary: colors.primary,
        secondary: colors.secondary,
        destructive: colors.destructive,
        info: colors.info

      },
      colors: {
        base1: colors.base1,
        text1: colors.text1,
        text2: colors.text2,
        text3: colors.text3,
        border: colors.accent,
        primary: colors.primary,
        secondary: colors.secondary,
        accent: colors.accent,
        secondary1: colors.secondary1,
        destructive: colors.destructive,
        warning: colors.warning,
        success: colors.success,
        info: colors.info

      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}

