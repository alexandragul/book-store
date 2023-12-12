import React, { FC } from "react"
import { Box, Grid, Typography } from "@mui/material"
import { Author, Book } from "@/api/types"
import { BookItem } from "./BookItem"
import { AuthorItem } from "./AuthorItem"
import { authorsTopMock } from "./mocks"

const TOP_BOOKS_AMOUNT = 4
const TOP_AUTHORS_AMOUNT = 2

const BooksTop: FC<{ books: Book[] }> = ({ books }) => {
  const booksTop = books.slice(0, TOP_BOOKS_AMOUNT)
  const topBooksTitle = `Top ${TOP_BOOKS_AMOUNT} books`

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

const AuthorsTop: FC<{ authors: Author[] }> = ({ authors }) => {
  const authorsTop = authors.slice(0, TOP_AUTHORS_AMOUNT)
  const topAuthorsTitle = `Top ${TOP_AUTHORS_AMOUNT} authors`

  return (
    <Box bgcolor="white" borderRadius="16px" padding={3} my={[0, -3]}>
      <Grid container>
        <Grid item mb={1}>
          <Typography variant="h4">{topAuthorsTitle}</Typography>
        </Grid>
        {authorsTop.map((author) => (
          <Grid item key={author.id}>
            <AuthorItem author={author} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

const Top: FC<{ books: Book[] }> = ({ books }) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={8}>
        <BooksTop books={books} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <AuthorsTop authors={authorsTopMock} />
      </Grid>
    </Grid>
  )
}

export default Top
