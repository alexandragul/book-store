"use client"

import { FC } from "react"
import Image from "next/image"
import { map } from "lodash-es"
import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material"
import { styled } from "@mui/material/styles"
import { Book } from "@/api/types"
import { Link } from "@/components/Link"

const StyledImage = styled(Image)`
  object-fit: cover;
`

const StyledCard = styled(Card)(
  ({ theme }) => `
  :hover {
    box-shadow: ${theme.shadows[3]};
  }
`,
)

interface BooksProps {
  books: Book[]
}

export const Books: FC<BooksProps> = ({ books }) => {
  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h3" mb={3}>
        Books
      </Typography>
      <Grid container>
        {map(books, (book) => (
          <Grid item xs={12} sm={6} md={4} lg={3} height="100%">
            <Link color="text.primary" underline="none" href={`/books/${book.id}`}>
              <StyledCard variant="outlined">
                <Box display="flex">
                  {book.image && (
                    <StyledImage src={book.image} alt={book.title} width={100} height={150} />
                  )}
                  <CardContent sx={{ p: 1 }}>
                    <Typography variant="body1" fontWeight={900}>
                      {book.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {book.author?.firstName} {book.author?.lastName}
                    </Typography>
                  </CardContent>
                </Box>
              </StyledCard>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
