import React, { FC } from "react"
import { join } from "lodash-es"
import { Box, Grid, Typography } from "@mui/material"
import { Author, Book } from "@/api/types"
import { BookCard, StyledImage } from "@/app/components/top/styles"

const TOP_BOOKS_AMOUNT = 4

export const BookItem: FC<{ book: Book; author: Author }> = ({ book, author }) => {
  const authorFullName = join([author.firstName, author.lastName], " ")
  const href = `/books/${book.id}`

  return (
    <BookCard href={href}>
      {book.image && <StyledImage src={book.image} alt={authorFullName} width={100} height={100} />}
      <Box>
        <Typography variant="body1" fontWeight={900}>
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {authorFullName}
        </Typography>
      </Box>
    </BookCard>
  )
}

export const BooksTop: FC<{ books: Book[] }> = ({ books }) => {
  const booksTop = books.slice(0, TOP_BOOKS_AMOUNT)
  const topBooksTitle = `Top ${TOP_BOOKS_AMOUNT} Books`

  return (
    <Grid container>
      <Grid item xs={12} mb={1}>
        <Typography variant="h4">{topBooksTitle}</Typography>
      </Grid>
      {booksTop.map((book) => (
        <Grid item xs={12} md={6} key={book.id}>
          <BookItem author={book.author as Author} book={book} />
        </Grid>
      ))}
    </Grid>
  )
}
