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
        general: ["Roboto"],
      },
    },
  },
  daisyui: {
    themes: [],
  },
  plugins: [daisyui],
};
