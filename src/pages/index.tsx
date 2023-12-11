import Head from "next/head"
import { Box, Container } from "@mui/material"
import { fetcher } from "@/api/axios"
import { Book } from "@/api/types"
import Layout from "@/components/Layout"
import Banner from "@/components/pages/index/Banner"
import PopularCategories from "@/components/pages/index/PopularCategories"
import BooksTop from "@/components/pages/index/booksTop"

export async function getServerSideProps() {
  const res = await fetcher.get("/books")
  return { props: { books: res.data } }
}

export default function Home({ books }: { books: Book[] }) {
  return (
    <>
      <Head>
        <title>Storybook</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Box bgcolor="background.default" minHeight="100vh" py={4}>
          <Container maxWidth="lg">
            <Banner />
            <PopularCategories />
            <BooksTop books={books} />
          </Container>
        </Box>
      </Layout>
    </>
  )
}
