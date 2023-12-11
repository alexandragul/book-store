import React, { FC } from "react"
import { Box, Grid, Typography } from "@mui/material"
import { Author, Book } from "@/api/types"
import { BookItem } from "./BookItem"
import { authorsTop } from "./mocks"
import { StyledImage } from "./styles"

const BooksTop: FC<{ books: Book[] }> = ({ books }) => {
  return (
    <Grid container columnSpacing={2}>
      <Grid container item xs={6} md={8}>
        <Box py={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} mb={1}>
              <Typography variant="h4">Top 6 books</Typography>
            </Grid>
            {books.map(({ author, title, image, id }) => (
              <BookItem author={author as Author} title={title} image={image} key={id} />
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid container item xs={6} md={4} direction="column">
        <Box bgcolor="white" borderRadius="15px" p={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} mb={1}>
              <Typography variant="h4">Top 6 authors</Typography>
            </Grid>
            {authorsTop.map(({ author, description, image }) => (
              <Grid item xs={12} key={author}>
                <Box display="flex" gap={2}>
                  <StyledImage src={image.src} />
                  <Box>
                    <Typography variant="body1" fontWeight={900}>
                      {author}
                    </Typography>
                    <Typography variant="body1">{description}</Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default BooksTop
