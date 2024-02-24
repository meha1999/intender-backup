import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "services-card": "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
      },
      dropShadow: {
        card: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        banner: `url('/images/homepage/banner.png')`,
        auth: "url('/images/auth/background.svg')",
        events: `url('/images/homepage/events.svg')`,
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#191D27",
        secondary: "#1D1D25",
        brand: "#FF5117",
        common: "#1C274C",
        weeny: "#448CF6",
        "secondary-dark": "#131319",
        "secondary-light": "#414042",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
