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
      main: "#A0C587",
    },
    secondary: {
      main: "#1F1E2F",
    },
    background: {
      default: "rgba(0,0,0,0.04)",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "24px",
          borderWidth: "2px",
          boxShadow: "none",
        },
        contained: {
          color: "white",
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
