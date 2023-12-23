/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    darkMode: "class",
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#009db5",

          secondary: "#009385",

          accent: "#00a700",

          neutral: "#36241d",

          "base-100": "#fff8ff",

          info: "#008ff3",

          success: "#79eb26",

          warning: "#b52c00",

          error: "#c12442",
        },
        dark: {
          primary: "#ff00ad",

          secondary: "#00df00",

          accent: "#ff0000",

          neutral: "#110c0d",

          "base-100": "#212827",

          info: "#00d4ff",

          success: "#00c35a",

          warning: "#ffa900",

          error: "#ff919a",
        },
      },
    ],
  },
};
