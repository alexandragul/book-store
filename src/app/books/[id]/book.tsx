"use client"

import { FC } from "react"
import { Container, Grid, Typography } from "@mui/material"
import { Book as IBook } from "@/api/types"
import { join } from "lodash-es"
import Image from "next/image"
import { styled } from "@mui/material/styles"

const StyledImage = styled(Image)`
  width: 100%;
  height: auto;
  max-height: 450px;
  object-fit: cover;
`

interface BookProps {
  book: IBook
}

export const Book: FC<BookProps> = ({ book }) => {
  const { author } = book
  const authorFullName = join([author?.firstName, author?.lastName], " ")

  return (
    <Container sx={{ py: 6 }}>
      <Grid container>
        <Grid item xs={12} sm={4} md={3} position="relative">
          {book.image && <StyledImage src={book.image} alt={book.title} width={300} height={400} />}
        </Grid>
        <Grid item display={["none", "none", "block"]} md={1} />
        <Grid item xs={12} sm={8}>
          <Typography variant="h2" mb={1}>
            {book.title}
          </Typography>
          <Typography variant="h5" fontWeight={400} mb={3}>
            {authorFullName}
          </Typography>
          <Typography variant="body1">{book.description}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
