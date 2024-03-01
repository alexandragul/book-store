import React from "react"
import { Box } from "@mui/material"
import { Header } from "./Header"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      <Box pt="84px" pb={4} bgcolor="background.default" minHeight="100vh">
        {children}
      </Box>
    </Box>
  )
}

export default Layout
