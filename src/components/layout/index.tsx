import React from "react"
import { Box } from "@mui/material"
import { Header } from "./Header"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      <Box bgcolor="background.default" minHeight="100vh" py={4}>
        {children}
      </Box>
    </Box>
  )
}

export default Layout
