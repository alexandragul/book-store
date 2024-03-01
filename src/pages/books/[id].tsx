import Layout from "@/components/layout"
import { useRouter } from "next/router"
import { Container, Typography } from "@mui/material"

export default function Book() {
  const router = useRouter()

  return (
    <Layout>
      <Container>
        <Typography variant="h1">{router.query.id}</Typography>
      </Container>
    </Layout>
  )
}
