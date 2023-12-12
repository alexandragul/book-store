import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { categoriesMock } from "./mocks"

const PopularCategories = () => {
  return (
    <Box mb={8}>
      <Typography variant="h5" color="text.primary" fontWeight={700} mb={2}>
        Popular categories
      </Typography>
      <Grid container>
        {categoriesMock.map(({ title, IconComponent }) => (
          <Grid item xs={6} sm={4} md={2} display="flex" key={title}>
            <Box
              bgcolor="common.white"
              borderRadius="15px"
              p={2}
              width="100%"
              display="flex"
              gap={1}
              alignItems="center"
              justifyContent="center"
            >
              <IconComponent color="primary" />
              <Typography variant="body1">{title}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PopularCategories
