import React from "react"
import { Box } from "@mui/material"
import { Header } from "./Header"

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}

export default Layout
