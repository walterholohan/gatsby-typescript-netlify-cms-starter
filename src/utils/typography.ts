import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  scaleRatio: 3,
  googleFonts: [
    {
      name: "Fira Sans",
      styles: ["300", "400", "400i", "600", "700", "700i"],
    },
  ],
  headerFontFamily: ["Fira Sans", "sans-serif"],
  headerColor: "#2C2C2E",
  bodyFontFamily: ["Fira Sans", "sans-serif"],
  bodyColor: "#57545B",
})
export default typography
