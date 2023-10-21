import daisyui from "daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-color": "#FDFDFF",
        "primary-orange": "#DC4405",
        "primary-black": "#252525",
        "primary-grey": "#ECECEC",
        white: "#FFFFFF",
        black: "#000000",
      },
      fontFamily: {
        body: ["Roboto"],
      },
      width: {
        "36pc": "36%",
        "30pc": "30%",
        "25pc": "25%",
        "20pc": "20%",
        "10pc": "10%",
      },

      inset: {
        "30pc": "30%",
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [daisyui],
};
