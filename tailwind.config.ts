import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#098AFF",
        "bg-dark": "#000816",
      },
      backgroundImage: {
        "primary-gradient": "linear-gradient(180deg, #007CFF 0%, #23B0FF 100%)",
        
      },

      animation: {
        marquee: "marquee 15s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        "3xl": "1700px",
        "4xl": "2100px",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
