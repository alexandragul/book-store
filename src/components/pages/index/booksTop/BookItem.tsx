import React, { FC } from "react"
import { Author, Book } from "@/api/types"
import { chain } from "lodash-es"
import { Box, Grid, Typography } from "@mui/material"
import { StyledImage } from "./styles"

export const BookItem: FC<{ title: Book["title"]; image: Book["image"]; author: Author }> = ({
  title,
  image,
  author,
}) => {
  const authorFullName = chain([author.firstName, author.lastName]).join(" ").value()

  return (
    <Grid item xs={12} md={6}>
      <Box display="flex" gap={2}>
        <StyledImage src={image} />
        <Box>
          <Typography variant="body1" fontWeight={900}>
            {title}
          </Typography>
          <Typography variant="body1" color="secondary">
            {authorFullName}
          </Typography>
        </Box>
      </Box>
    </Grid>
  )
}
