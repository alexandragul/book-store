import React from "react"
import { Box, Container, Grid, Paper, Typography } from "@mui/material"
import image from "public/images/hero.png"

const Hero = () => {
  return (
    <Box bgcolor="background.default" minHeight="100vh" py={4}>
      <Container maxWidth="lg">
        <Paper sx={{ overflow: "hidden" }}>
          <Grid container>
            <Grid item xs={4} display="flex">
              <img src={image.src} alt="books" width="100%" />
              {/*TODO: find out why NextImage component don't work */}
              {/*<Image src={image.src} width={500} height={500} alt="books" />*/}
            </Grid>
            <Grid item xs={8} p={3}>
              <Typography variant="h4" color="primary" pb={2} fontWeight={500}>
                Books Are Uniquely Portable Magic
              </Typography>
              <Typography variant="body1" color="text.primary">
                A growing body of research indicates that reading literally changes your mind. Using
                MRI scans, researches have confirmed Trusted Source that reading involves a complex
                networks of circuits and signals in the brain. As your reading ability matures,
                those networks also get stronger and more sophisticated.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  )
}

export default Hero
