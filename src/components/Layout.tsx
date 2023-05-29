import React from "react"
import { Box, Button, Container, IconButton, Typography } from "@mui/material"
import { AccountCircleOutlined } from "@mui/icons-material"
import { Link } from "@/components/Link"

const Header = () => {
  return (
    <Box>
      <Container maxWidth="lg" sx={{ padding: "8px" }}>
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Box display="flex" alignItems="center" gap={5}>
            <Typography variant="h4" component="h1" color="primary" fontWeight="700">
              Storybook
            </Typography>
            <Box display="flex" alignItems="center" gap={3}>
              <Link href="/" color="secondary">
                Home
              </Link>
              <Link href="/books" color="secondary">
                Books
              </Link>
              <Link href="/about" color="secondary">
                About
              </Link>
            </Box>
          </Box>
          <Box display="flex" alignItems="center" gap={1}>
            <Button variant="contained" color="primary">
              Sign In / Sign Up
            </Button>
            <IconButton color="secondary" size="medium">
              <AccountCircleOutlined />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box>
      <Header />
      {children}
    </Box>
  )
}

export default Layout
