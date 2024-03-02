import React from "react"
import { Box } from "@mui/material"
import { Header } from "./Header"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      <Box pt="92px" pb={8} bgcolor="background.default" minHeight="100vh">
        {children}
      </Box>
    </Box>
  )
}

export default Layout
