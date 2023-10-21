import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
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
  plugins: [],
};
export default config;
