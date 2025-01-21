import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      transitionTimingFunction: {
        easeOutExpo: "cubic-bezier(0.16, 1, 0.3, 1)",
        easeOutBack: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      boxShadow: {
        defaultButton: "0px 0px 15px 2px #FF8D35",
      },
    },
  },
  plugins: [],
} satisfies Config;
