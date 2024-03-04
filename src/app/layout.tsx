"use client"

import React, { ReactNode } from "react"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { ThemeProvider, HomeLayout } from "./_layout"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <AppRouterCacheProvider>
          <ThemeProvider>
            <HomeLayout>{children}</HomeLayout>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}

export default Layout
