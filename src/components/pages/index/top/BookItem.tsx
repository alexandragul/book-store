import React, { FC } from "react"
import { join } from "lodash-es"
import { Author, Book } from "@/api/types"
import { Box, Typography } from "@mui/material"
import { StyledImage } from "./styles"

export const BookItem: FC<{ book: Book; author: Author }> = ({ book, author }) => {
  const authorFullName = join([author.firstName, author.lastName], " ")

  return (
    <Box display="flex" gap={2}>
      {book.image && <StyledImage src={book.image} alt={authorFullName} width={100} height={100} />}
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
