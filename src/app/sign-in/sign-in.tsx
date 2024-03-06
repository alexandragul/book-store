"use client"

import { Box, Button, Container, Grid, Paper, TextField, Typography } from "@mui/material"
import { BackgroundImage, PaperContainer } from "./styles"

export const SignIn = () => {
  return (
    <BackgroundImage>
      <Container sx={{ height: "100%" }}>
        <Grid container alignItems="flex-start" spacing={0} height="100%">
          <PaperContainer item xs={12} lg={5}>
            <Paper sx={{ alignSelf: "stretch" }}>
              <Box p={10} display="flex" flexDirection="column" alignItems="center">
                <Typography variant="h2" mb={1}>
                  Welcome back
                </Typography>
                <Typography variant="body1" mb={5}>
                  Please enter your details
                </Typography>
                <TextField label="Email" margin="dense" size="small" fullWidth />
                <TextField label="Password" margin="dense" size="small" fullWidth />
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Sign In
                </Button>
              </Box>
            </Paper>
          </PaperContainer>
        </Grid>
      </Container>
    </BackgroundImage>
  )
}
