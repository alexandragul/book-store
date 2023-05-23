import { Roboto } from "next/font/google"
import { createTheme } from "@mui/material/styles"

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

const theme = createTheme({
  palette: {
    primary: {
      main: "#6e50d5",
    },
    secondary: {
      main: "#6eb704",
    },
    background: {
      default: "rgba(0,0,0,0.04)",
    },
    text: {
      primary: "rgba(0,0,0,0.5)",
      secondary: "rgba(0,0,0,0.4)",
      disabled: "rgba(0,0,0,0.3)",
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
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
        },
      },
      defaultProps: {
        elevation: 0,
      },
    },
  },
})

export default theme
