import React from "react"
import { Box, Grid, Typography } from "@mui/material"
import romeoAndJulietImage from "public/images/romeo-and-juliet.jpeg"
import emotionalDesignImage from "public/images/emotional-design.jpg"
import prideAndPrejudiceImage from "public/images/pride-and-prejudice.jpg"
import millionMilesImage from "public/images/million-miles.jpeg"
import responsiveWebDesignImage from "public/images/responsive-web-design.jpg"
import thisIsTheWayImage from "public/images/this-is-the-way.jpg"
import edgarAllanPoeImage from "public/images/edgar-allan-poe.webp"
import markTwainImage from "public/images/mark-twain.jpeg"
import williamShakespeareImage from "public/images/william-shakespeare.jpeg"
import styled from "styled-components"

const booksTop = [
  {
    title: "Romeo and Juliet",
    author: "William Shakespeare",
    rating: 9,
    image: romeoAndJulietImage,
  },
  {
    title: "Emotional Design",
    author: "Donald Norman",
    rating: 9,
    image: emotionalDesignImage,
  },
  { title: "Pride and Prejudice", author: "Jane Austen", rating: 9, image: prideAndPrejudiceImage },
  {
    title: "A million miles in a thousand years",
    author: "Donald Miles",
    rating: 9,
    image: millionMilesImage,
  },
  {
    title: "Responsive Web Design",
    author: "Ethan Marcotte",
    rating: 4,
    image: responsiveWebDesignImage,
  },
  { title: "This is the way", author: "Gavin Corbett", rating: 4, image: thisIsTheWayImage },
]

const authorsTop = [
  {
    author: "Edgar Allan Poe",
    description: "American short story author, poet",
    image: edgarAllanPoeImage,
  },
  {
    author: "Mark Twain",
    description: "American humorist, novelist, short story author",
    image: markTwainImage,
  },
  {
    author: "William Shakespeare",
    description: "Greatest english dramatist and poet",
    image: williamShakespeareImage,
  },
]

const StyledImage = styled.img`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`

const BooksTop = () => {
  return (
    <Grid container columnSpacing={2}>
      <Grid container item xs={6} md={8}>
        <Box py={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} mb={1}>
              <Typography variant="h4">Top 6 books</Typography>
            </Grid>
            {booksTop.map(({ title, author, rating, image }) => (
              <Grid key={title} item xs={12} md={6}>
                <Box display="flex" gap={2}>
                  <StyledImage src={image.src} />
                  <Box>
                    <Typography variant="body1" fontWeight={900}>
                      {title}
                    </Typography>
                    <Typography variant="body1" color="secondary">
                      {author}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
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
