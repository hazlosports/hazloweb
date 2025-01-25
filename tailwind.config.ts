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
        background: "hsl(var(--background))",
        blue: "hsl(var(--blue))",
        purple: "hsl(var(--purple))",
        orange: "hsl(var(--orange))",
        darkOrange: "hsl(var(--darkOrange))",
        border: "hsl(var(--border))",
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        hazloGreen: "hsl(var(--hazloGreen))",
        hazloDarkGreen: "hsl(var(--hazloDarkGreen))",
        hazloPink: "hsl(var(--hazloPink))",
        hazloDarkPink: "hsl(var(--hazloDarkPink))",
      },
    },
  },
  plugins: [],
};
export default config;
