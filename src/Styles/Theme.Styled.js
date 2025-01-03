export const theme = {
  color: {
    primary: "#8faaff",
    secondary: "#1d2951",
    accent: "#5a76e7",
    text: "#e4e8ff",
    background: "#0a0d21",
  },
  grid: {
    breakpoints: {
      xs: "320px",
      s: "480px",
      m: "768px",
      l: "992px",
      xl: "1200px",
    },
    layout: {
      mobile: {
        rows: "1fr 9fr 1fr",
        columns: "5fr 1fr",
        areas: `
          "header navbar"
          "main main"
          "footer footer"
        `,
      },
      tablet: {
        rows: "1fr 10fr 1fr",
        columns: "repeat(6, 1fr)",
        areas: `
          "header header header header navbar navbar"
          "main main main main main main"
          "footer footer footer footer footer footer"
        `,
      },
      desktop: {
        rows: "1fr 10fr 1fr",
        columns: "repeat(6, 1fr)",
        areas: `
          "header header navbar navbar navbar navbar"
          "main main main main main main"
          "footer footer footer footer footer footer"
        `,
      },
    },
  },
};

export default theme;
