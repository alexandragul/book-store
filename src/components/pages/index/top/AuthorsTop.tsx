import React, { FC } from "react"
import { join } from "lodash-es"
import { Box, Grid, Typography } from "@mui/material"
import { Author } from "@/api/types"
import { StyledImage } from "./styles"

const TOP_AUTHORS_AMOUNT = 2

export const AuthorItem: FC<{ author: Author }> = ({ author }) => {
  const fullName = join([author.firstName, author.lastName], " ")

  return (
    <Box display="flex" gap={2}>
      {author.image && <StyledImage src={author.image} alt={fullName} width={100} height={100} />}
      <Box>
        <Typography variant="body1" fontWeight={900}>
          {fullName}
        </Typography>
        {author.summary && <Typography variant="body1">{author.summary}</Typography>}
      </Box>
    </Box>
  )
}

export const AuthorsTop: FC<{ authors: Author[] }> = ({ authors }) => {
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
