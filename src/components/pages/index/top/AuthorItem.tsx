import React, { FC } from "react"
import { join } from "lodash-es"
import { Box, Typography } from "@mui/material"
import { Author } from "@/api/types"
import { StyledImage } from "./styles"

export const AuthorItem: FC<{ author: Author }> = ({ author }) => {
  const fullName = join([author.firstName, author.lastName], " ")

  return (
    <Box display="flex" gap={2}>
      <StyledImage src={author.image} alt={fullName} />
      <Box>
        <Typography variant="body1" fontWeight={900}>
          {fullName}
        </Typography>
        <Typography variant="body1">{author.description}</Typography>
      </Box>
    </Box>
  )
}
