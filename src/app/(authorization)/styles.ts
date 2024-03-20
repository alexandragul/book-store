import { Box, Grid } from "@mui/material"
import { styled } from "@mui/material/styles"
import hero from "/public/images/sign-in-hero.jpeg"

export const PaperContainer = styled(Grid)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BackgroundImage = styled(Box)`
  background-image: url(${hero.src});
  background-size: cover;
  height: calc(100vh - 60px);
`
