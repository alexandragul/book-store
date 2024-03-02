import React, { FC } from "react"
import { Grid } from "@mui/material"
import { Author, Book } from "@/api/types"
import { BooksTop } from "./BooksTop"
import { AuthorsTop } from "./AuthorsTop"

const Top: FC<{ books: Book[]; authors: Author[] }> = ({ books, authors }) => {
  return (
    <Grid container pb={3}>
      <Grid item xs={12} sm={6} md={8}>
        <BooksTop books={books} />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <AuthorsTop authors={authors} />
      </Grid>
    </Grid>
  )
}

export default Top
