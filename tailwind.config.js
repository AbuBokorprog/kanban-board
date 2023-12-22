/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#009db5",

          secondary: "#009385",

          accent: "#00a700",

          neutral: "#36241d",

          "base-100": "#e5e7eb",

          info: "#008ff3",

          success: "#79eb26",

          warning: "#b52c00",

          error: "#c12442",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
