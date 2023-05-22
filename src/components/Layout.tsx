import React from "react"
import { Box, Button, Container, Divider, IconButton, Typography } from "@mui/material"
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
              <Link href="/">Home</Link>
              <Link href="/books">Books</Link>
              <Link href="/about">About</Link>
            </Box>
          </Box>
          <Box>
            <Button variant="contained" color="primary">
              Sign In / Sign Up
            </Button>
            <IconButton color="primary" size="medium">
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
      <Divider />
      {children}
    </Box>
  )
}

export default Layout
