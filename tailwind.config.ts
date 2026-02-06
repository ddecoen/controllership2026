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
        coder: {
          purple: "#7C3AED",
          blue: "#3B82F6",
          dark: "#1E293B",
          light: "#F8FAFC",
        },
      },
    },
  },
  plugins: [],
};
export default config;
