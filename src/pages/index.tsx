import Head from "next/head"
import { Box, Container } from "@mui/material"
import Layout from "@/components/Layout"
import Banner from "@/components/pages/index/Banner"

export default function Home() {
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
          </Container>
        </Box>
      </Layout>
    </>
  )
}
