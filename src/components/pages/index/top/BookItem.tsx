import React, { FC } from "react"
import { Author, Book } from "@/api/types"
import { chain } from "lodash-es"
import { Box, Typography } from "@mui/material"
import { StyledImage } from "./styles"

export const BookItem: FC<{ book: Book; author: Author }> = ({ book, author }) => {
  const authorFullName = chain([author.firstName, author.lastName]).join(" ").value()

  return (
    <Box display="flex" gap={2}>
      <StyledImage src={book.image} />
      <Box>
        <Typography variant="body1" fontWeight={900}>
          {book.title}
        </Typography>
        <Typography variant="body1" color="secondary">
          {authorFullName}
        </Typography>
      </Box>
    </Box>
  )
}
