module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron, sans-serif",
      secondary: "Inter, sans-serif",
    },
    container: {
      padding: {
        DEFAULT: "1.5rem",
        lg: "3rem",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        body: "#010208",
        white: "#fff",
        Cpink: "#B936F5",
        Cred: "#f1006c",
        transparent: "transparent",
      },

      boxShadow: {
        primary: "14px 31px 38px rgba(24, 23, 55, 0.58)",
      },
      backgroundImage: {
        radialBgCircle:
          "url('/src/assets/img/radial-bg.svg')",
        videoBg: "url('/src/assets/img/video-bg.png')",
        circle: "url('/src/assets/img/circle.png')",
        explore: "url('/src/assets/img/explore.png')",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
}
