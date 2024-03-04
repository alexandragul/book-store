"use client"

import { ReactNode } from "react"
import { ThemeProvider as MuiThemeProvider } from "@mui/material"
import theme from "@/theme"

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}
