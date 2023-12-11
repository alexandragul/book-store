import React, { FC } from "react"
import { Box, Grid, Typography } from "@mui/material"
import { Author, Book } from "@/api/types"
import { BookItem } from "./BookItem"
import { AuthorItem } from "./AuthorItem"
import { authorsTop } from "./mocks"

const BooksTop: FC<{ books: Book[] }> = ({ books }) => {
  return (
    <Grid container>
      <Grid item xs={12} mb={1}>
        <Typography variant="h4">Top 6 books</Typography>
      </Grid>
      {books.map((book) => (
        <Grid item xs={12} md={6} key={book.id}>
          <BookItem author={book.author as Author} book={book} />
        </Grid>
      ))}
    </Grid>
  )
}

const AuthorsTop: FC<{ authors: Author[] }> = ({ authors }) => {
  return (
    <Box bgcolor="white" borderRadius="16px" padding={3} my={[0, -3]}>
      <Grid container>
        <Grid item mb={1}>
          <Typography variant="h4">Top 6 authors</Typography>
        </Grid>
        {authors.map((author) => (
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
      <Grid item xs={12} sm={6} md={4} direction="column">
        <AuthorsTop authors={authorsTop} />
      </Grid>
    </Grid>
  )
}

export default Top
