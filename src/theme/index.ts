"use client"

import { Roboto } from "next/font/google"
import { createTheme, ThemeOptions } from "@mui/material/styles"

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
})

const defaultTheme = createTheme()

const palette: ThemeOptions["palette"] = {
  ...defaultTheme.palette,
  primary: {
    main: "#CC2936",
  },
  secondary: {
    main: "#3B3561",
  },
  background: {
    default: "rgba(0,0,0,0.04)",
  },
}

const typography: ThemeOptions["typography"] = {
  ...defaultTheme.typography,
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
  h6: {
    fontSize: 20,
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
}

export const theme = createTheme({
  palette,
  typography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          borderWidth: 2,
          boxShadow: "none",
          ":hover": {
            borderWidth: 2,
          },
        },
        contained: {
          color: palette?.common?.white,
        },
      },
    },
    MuiLink: {
      defaultProps: {
        underline: "hover",
        variant: "body1",
        color: palette?.text?.primary,
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
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
    MuiAppBar: {
      defaultProps: {
        sx: {
          bgcolor: palette?.common?.white,
          borderRadius: 0,
        },
      },
    },
  },
})
