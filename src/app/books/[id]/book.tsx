"use client"

import { FC } from "react"
import { Container, Grid, Typography } from "@mui/material"
import { Book as IBook } from "@/api/types"
import { join } from "lodash-es"
import Image from "next/image"
import { styled } from "@mui/material/styles"

const StyledImage = styled(Image)`
  width: 100%;
  object-fit: contain;
`

interface BookProps {
  book: IBook
}

export const Book: FC<BookProps> = ({ book }) => {
  const { author } = book
  const authorFullName = join([author?.firstName, author?.lastName], " ")

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={4} position="relative">
          {book.image && <StyledImage src={book.image} alt={book.title} width={100} height={300} />}
        </Grid>
        <Grid item xs={12} md={8}>
          <Typography variant="h2" mb={1}>
            {book.title}
          </Typography>
          <Typography variant="h5" mb={3}>
            {authorFullName}
          </Typography>
          <Typography variant="body1">{book.description}</Typography>
        </Grid>
      </Grid>
    </Container>
  )
}
