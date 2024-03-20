import React from "react"
import { Box, Card, CardActionArea, CardContent, Grid, Typography } from "@mui/material"
import { categoriesMock } from "./mocks"

export const PopularCategories = () => {
  return (
    <Box mb={8}>
      <Typography variant="h4" mb={2}>
        Popular Categories
      </Typography>
      <Grid container>
        {categoriesMock.map(({ title, IconComponent }) => (
          <Grid item xs={6} sm={4} md={2} display="flex" key={title}>
            <Card variant="outlined" sx={{ width: "100%" }}>
              <CardActionArea>
                <CardContent sx={{ display: "flex", gap: 1 }}>
                  <IconComponent color="primary" />
                  <Typography variant="body1">{title}</Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
