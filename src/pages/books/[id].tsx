import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { Container, Typography } from "@mui/material"
import Head from "next/head"

export default function Book() {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Storybook - Book {router.query.id}</title>
      </Head>
      <Layout>
        <Container>
          <Typography variant="h1">{router.query.id}</Typography>
        </Container>
      </Layout>
    </>
  )
}
