"use client"

import React, { ReactNode } from "react"
import { Box, Container, Grid, Paper } from "@mui/material"
import { BackgroundImage, PaperContainer } from "./styles"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <BackgroundImage>
      <Container sx={{ height: "100%" }}>
        <Grid container alignItems="flex-start" spacing={0} height="100%">
          <PaperContainer item xs={12} lg={5}>
            <Paper sx={{ alignSelf: "stretch" }}>
              <Box p={8} display="flex" flexDirection="column" alignItems="center">
                {children}
              </Box>
            </Paper>
          </PaperContainer>
        </Grid>
      </Container>
    </BackgroundImage>
  )
}

export default Layout
