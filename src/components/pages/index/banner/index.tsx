import React from "react"
import Image from "next/image"
import styled from "@emotion/styled"
import { Grid, Paper, Typography } from "@mui/material"
import image from "/public/images/photograph.jpeg"

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`

const Banner = () => {
  return (
    <Paper variant="outlined" sx={{ overflow: "hidden", mb: 8 }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6} md={4} display="flex">
          <StyledImage src={image} alt="books" />
        </Grid>
        <Grid item xs={12} sm={6} md={8} p={[2, 5]}>
          <Typography variant="h3" pb={2}>
            Books are Uniquely Portable Magic
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
