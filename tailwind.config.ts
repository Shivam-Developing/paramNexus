import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#050507",
        eerieBlack: "#0B0B0E",
        neonIndigo: "#6366F1",
        cyberCyan: "#06B6D4",
        offWhite: "#f7f6f2",
        warmGray: "#edeae5",
        deepTeal: "#0f3638",
        teal: {
          DEFAULT: "#01696f",
          dark: "#0c4e54",
          light: "#0d7d84",
        },
        gold: {
          DEFAULT: "#c8a961",
          light: "#d4bd7e",
          dark: "#b8953f",
        },
        darkFooter: "#1a1814",
        nearBlack: "#0d0d0d",
        charcoal: "#2a2a2a",
      },
      fontFamily: {
        display: ["var(--font-outfit)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      animation: {
        "blob-pulse": "blobPulse 12s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "sonar-ping": "sonarPing 3s ease-out infinite",
        "border-glow": "borderGlow 4s linear infinite",
        "traveling-dot": "travelingDot 2s linear infinite",
        typewriter: "typewriter 3s steps(40) infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-down": "slideDown 0.4s ease-out forwards",
        "slide-right": "slideRight 0.5s ease-out forwards",
        "count-up": "countUp 2s linear forwards",
        shimmer: "shimmer 2s linear infinite",
        marquee: "marquee 30s linear infinite",
        "marquee-reverse": "marqueeReverse 30s linear infinite",
        "spin-slow": "spin 8s linear infinite",
        "card-flip": "cardFlip 0.6s ease forwards",
        "gradient-shift": "gradient-shift 8s ease infinite",
      },
      keyframes: {
        blobPulse: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.6" },
          "50%": { transform: "scale(1.08)", opacity: "0.8" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        sonarPing: {
          "0%": { transform: "scale(1)", opacity: "0.8" },
          "100%": { transform: "scale(2.5)", opacity: "0" },
        },
        borderGlow: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        travelingDot: {
          "0%": { left: "0%" },
          "100%": { left: "100%" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        cardFlip: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(180deg)" },
        },
        "gradient-shift": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      backgroundSize: {
        "400%": "400% 400%",
      },
    },
  },
  plugins: [],
};

export default config;
