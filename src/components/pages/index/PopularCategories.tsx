import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { AlienIcon, HeartIcon, PaletteIcon, PenIcon, PuzzleIcon, SpyIcon } from "@/components/icons"

const categories = [
  {
    title: "Thriller",
    IconComponent: SpyIcon,
  },
  {
    title: "Science",
    IconComponent: AlienIcon,
  },
  {
    title: "Art",
    IconComponent: PaletteIcon,
  },
  {
    title: "History",
    IconComponent: PenIcon,
  },
  {
    title: "Romance",
    IconComponent: HeartIcon,
  },
  {
    title: "Children",
    IconComponent: PuzzleIcon,
  },
]

const PopularCategories = () => {
  return (
    <Box mb={8}>
      <Typography variant="h5" color="text.primary" fontWeight={700} mb={2}>
        Popular categories
      </Typography>
      <Grid container>
        {categories.map(({ title, IconComponent }) => (
          <Grid item xs={2} display="flex" key={title}>
            <Box
              bgcolor="common.white"
              borderRadius="15px"
              m={1}
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
