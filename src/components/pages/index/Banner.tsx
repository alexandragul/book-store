import React from "react"
import styled from "styled-components"
import { Grid, Paper, Typography } from "@mui/material"
import image from "public/images/photograph.jpeg"

const StyledImage = styled("img")`
  object-fit: cover;
`

const Banner = () => {
  return (
    <Paper sx={{ overflow: "hidden", mb: 8 }}>
      <Grid container>
        <Grid item xs={4} display="flex">
          <StyledImage src={image.src} alt="books" width="100%" />
          {/*TODO: find out why NextImage component doesn't work */}
          {/*<Image src={image.src} width={500} height={500} alt="books" />*/}
        </Grid>
        <Grid item xs={8} p={6}>
          <Typography variant="h4" color="text.primary" pb={2} fontWeight={500}>
            Books Are Uniquely Portable Magic
          </Typography>
          <Typography variant="body1" color="text.secondary">
            A growing body of research indicates that reading literally changes your mind. Using MRI
            scans, researches have confirmed Trusted Source that reading involves a complex networks
            of circuits and signals in the brain. As your reading ability matures, those networks
            also get stronger and more sophisticated.
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Banner
