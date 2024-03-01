import { Container, Typography } from "@mui/material"
import Layout from "@/components/layout"
import Head from "next/head"

export default function Index() {
  return (
    <>
      <Head>
        <title>Books</title>
      </Head>
      <Layout>
        <Container>
          <Typography variant="h1">Books</Typography>
        </Container>
      </Layout>
    </>
  )
}
