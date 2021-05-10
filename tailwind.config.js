const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Wotfard", "Helvetica", "Arial", "sans-serif"],
      },
    },
    typography: {
      default: {
        css: {
          pre: false,
          code: false,
          "pre code": false,
          "code::before": false,
          "code::after": false,
          h1: {
            color: "var(--color-text-primary)",
          },
          h2: {
            color: "var(--color-text-primary)",
          },
          h3: {
            color: "var(--color-text-primary)",
          },
          p: {
            color: "var(--color-text-primary)",
          },
          blockquote: {
            border: "none",
            textAlign: "center",
            color: "var(--color-text-primary)",
            backgroundColor: "transparent",
            fontSize: "1.3rem",
            fontWeight: "medium",
            marginTop: "24px",
            marginBottom: "48px",
            fontFamily: "Indie Flower",
          },
          a: {
            color: "var(--color-text-primary)",
            "&:hover": {
              opacity: "0.8",
            },
          },
          strong: {
            color: "var(--color-text-primary)",
          },
        },
      },
    },
    backgroundColor: {
      accent: "var(--color-bg-accent)",
      primary: "var(--color-bg-primary)",
      secondary: "var(--color-bg-secondary)",
      card: "var(--color-bg-card)",
      hover: {
        accent: "var(--color-bg-accent-hover)",
      },
    },
    textColor: {
      accent: "var(--color-text-accent)",
      primary: "var(--color-text-primary)",
      secondary: "var(--color-text-secondary)",
      tertiary: "var(--color-text-tertiary)",
      on: {
        accent: "var(--color-text-on-accent)",
      },
      fill: {
        primary: "var(--color-fill-primary)",
        secondary: "var(--color-fill-secondary)",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
