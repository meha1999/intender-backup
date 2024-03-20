import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        "3xl": "1600px",
      },
      boxShadow: {
        "services-card": "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
        "company-card": "0px 30px 40px 0px #0000001A",
        auth: "0px 23px 90px 0px #00000026",
        faq: "0px 10px 30px 0px #0000001A",
      },
      dropShadow: {
        card: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        banner: `url('/images/homepage/banner.png')`,
        "company-background": "url('/images/company/background.png')",
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
        milky: "#F5F5F5",
        "light-weeny": "#E1EDFF",
        "light-gray": "#EFEFEF",
        "dark-gray": "#6C6C6C",
        "light-brand": "#FFE6DD",
        "secondary-dark": "#131319",
        "secondary-light": "#CDCDCD",
        platinum: "#424A5C",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
