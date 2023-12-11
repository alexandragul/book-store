import { authorsTop } from "@/components/pages/index/top/mocks"
import React, { FC } from "react"
import { StyledImage } from "@/components/pages/index/top/styles"
import { Box, Typography } from "@mui/material"

export const AuthorItem: FC<AuthorItemProps<typeof authorsTop>> = ({ author }) => {
  return (
    <Box display="flex" gap={2}>
      <StyledImage src={author.image.src} />
      <Box>
        <Typography variant="body1" fontWeight={900}>
          {author.author}
        </Typography>
        <Typography variant="body1">{author.description}</Typography>
      </Box>
    </Box>
  )
}

interface AuthorItemProps<T extends typeof authorsTop> {
  author: T extends Array<infer I> ? I : never
}
