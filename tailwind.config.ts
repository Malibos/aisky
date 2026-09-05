import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        pendulum: {
          "0%, 100%": { transform: "rotateY(-22deg)" },
          "50%": { transform: "rotateY(22deg)" },
        },
      },
      animation: {
        pendulum: "pendulum 7.5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
