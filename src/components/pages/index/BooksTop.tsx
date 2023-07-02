import React from "react"
import { Grid, Typography } from "@mui/material"

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
    <Grid container spacing={3}>
      <Grid container item xs={8} spacing={2} pb={2}>
        <Grid item xs={12} mb={1}>
          <Typography variant="h4">Top 6 books</Typography>
        </Grid>
        {booksTop.map(({ title, author, rating }) => (
          <Grid key={title} item xs={6}>
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1">{author}</Typography>
          </Grid>
        ))}
      </Grid>
      <Grid item xs={4}>
        <Grid
          container
          item
          xs={12}
          spacing={2}
          direction="column"
          bgcolor="white"
          borderRadius="15px"
          pb={2}
        >
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
      </Grid>
    </Grid>
  )
}

export default BooksTop
