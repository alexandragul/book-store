import { Roboto } from "next/font/google"
import { createTheme } from "@mui/material/styles"

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#6e50d5",
    },
    secondary: {
      main: "#b9cc4c",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "20px",
          borderWidth: "2px",
          boxShadow: "none",
        },
      },
    },
  },
})

export default theme
