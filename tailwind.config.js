/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        // main: "url('/images/background.png')",
        "white-gradient": `linear-gradient(360.58deg, #FFFFFF 43.76%, rgba(255, 255, 255, 0) 106.82%)`,
      },
      fontFamily: {
        primary: "Forma Bold",
        secondary: "MK Hell",
        "forma-medium": "Forma Medium",
        "forma-bold": "Forma Bold",
        "forma-extrabold": "Forma Extra Bold",
        pangram: "Pangram",
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      fontStyle: {
        italic: "italic",
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        tertiary: "var(--color-tertiary)",
        //scum
        "scum-beige": {
          DEFAULT: "#F6EFD3",
          500: "#F6EFD3",
          600: "#FDC3AE",
        },
        "scum-teal": "#86E4C5",
        "scum-red": "#B12F4E",
        "scum-black": {
          DEFAULT: "#2C2524",
          800: "#1D201F",
          900: "#2C2524",
          950: "#072018",
        },

        //template
        "template-black": "#121212",
        "template-white": "#F3F1EA",
        "template-yellow": "#FFBA21",
        "template-green": "#56BC78",
        "template-orange": "#FF5722",
        "template-red": "#DF1D00",
      },
      screens: {
        "2xs": "360px",
        xs: "460px",
        880: "880px",
        1690: "1690px",
        max: "1921px",
        "3xl": "2160px",
        "4xl": "3000px",
      },
    },
  },
  plugins: [],
};
