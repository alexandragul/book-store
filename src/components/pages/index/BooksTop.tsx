import React from "react"
import { Box, Grid, Typography } from "@mui/material"

const booksTop = [
  {
    title: "Rome and Juliet",
    author: "William Shakespeare",
    rating: 9,
  },
  {
    title: "Emotional Design",
    author: "Donald Norman",
    rating: 9,
  },
  { title: "Pride and Prejudice", author: "Jane Austen", rating: 9 },
  {
    title: "A million miles in a thousand years",
    author: "Donald Miles",
    rating: 9,
  },
  {
    title: "Responsive Web Design",
    author: "Ethan Marcotte",
    rating: 4,
  },
  { title: "This is the way", author: "Gavin Corbett", rating: 4 },
]

const authorsTop = [
  {
    author: "Edgar Allan Poe",
    description: "American short story author, poet",
  },
  {
    author: "Mark Twain",
    description: "American humorist, novelist, short story author",
  },
  {
    author: "William Shakespeare",
    description: "Greatest english dramatist and poet",
  },
]

const BooksTop = () => {
  return (
    <Grid container spacing={2}>
      <Grid container item xs={6} md={8}>
        <Box p={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} mb={1}>
              <Typography variant="h4">Top 6 books</Typography>
            </Grid>
            {booksTop.map(({ title, author, rating }) => (
              <Grid key={title} item xs={12} md={6}>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body1">{author}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
      <Grid container item xs={6} md={4} direction="column">
        <Box bgcolor="white" borderRadius="15px" p={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} mb={1}>
              <Typography variant="h4">Top 6 authors</Typography>
            </Grid>
            {authorsTop.map(({ author, description }) => (
              <Grid item xs={12} key={author}>
                <Typography variant="h5">{author}</Typography>
                <Typography variant="body1">{description}</Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default BooksTop
