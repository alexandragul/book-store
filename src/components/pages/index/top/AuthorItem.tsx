import React, { FC } from "react"
import { join } from "lodash-es"
import { Box, Typography } from "@mui/material"
import { Author } from "@/api/types"
import { StyledImage } from "./styles"

export const AuthorItem: FC<{ author: Author }> = ({ author }) => {
  const fullName = join([author.firstName, author.lastName], " ")

  return (
    <Box display="flex" gap={2}>
      {author.image && <StyledImage src={author.image} alt={fullName} width={100} height={100} />}
      <Box>
        <Typography variant="body1" fontWeight={900}>
          {fullName}
        </Typography>
        {author.summary && <Typography variant="body1">{author.summary}</Typography>}
      </Box>
    </Box>
  )
}
