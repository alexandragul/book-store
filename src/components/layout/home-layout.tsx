"use client"

import React, { ReactNode } from "react"
import { Box } from "@mui/material"
import { Header } from "./header"

export const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Header />
      <Box boxSizing="border-box" pt="60px" bgcolor="background.default" minHeight="100vh">
        {children}
      </Box>
    </Box>
  )
}
