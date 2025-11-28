/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        circular: ["circular-web", "sans-serif"],
        "circular-web": ["circular-web", "sans-serif"],
        general: ["general", "sans-serif"],
        zentry: ["zentry", "sans-serif"],
        robMedium: ["robert-medium", "sans-serif"],
        robRegular: ["robert-regular", "sans-serif"],
      },
        colors: {
        blue: {
          50: "#dfdff0",
          75: "#dfdff2",
          100: "#f0f2fa",
          200: "#010101",
          300: "#f4b7dd",
        },
        violet: {
          300: "#5724ff",
        },
        yellow: {
          100: "#8e983f",
          300: "#edff66",
        },
      },
    },
  },
  plugins: [],
};
