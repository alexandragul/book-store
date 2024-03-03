"use client"

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
      main: "#519E8A",
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
    h1: {
      fontSize: 48,
      fontWeight: 700,
      lineHeight: 1,
    },
    h2: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 1,
    },
    h3: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 1,
    },
    h4: {
      fontSize: 28,
      fontWeight: 500,
      lineHeight: 1,
    },
    h5: {
      fontSize: 24,
      fontWeight: 500,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: 16,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.4,
    },
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
    MuiGrid: {
      defaultProps: {
        spacing: 2,
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: "lg",
      },
    },
  },
})

export default theme
