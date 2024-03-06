"use client"

import { Container } from "@mui/material"
import { Author, Book } from "@/api/types"

import { Banner, PopularCategories, Top } from "./_components"

interface HomeProps {
  books: Book[]
  authors: Author[]
}

export const Home = ({ books, authors }: HomeProps) => {
  return (
    <Container sx={{ py: 6 }}>
      <Banner />
      <PopularCategories />
      <Top books={books} authors={authors} />
    </Container>
  )
}
