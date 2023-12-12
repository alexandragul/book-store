import { Box, Button, Container, IconButton, Typography } from "@mui/material"
import { AccountCircleOutlined } from "@mui/icons-material"
import { Link } from "@/components/Link"
import { useDeviceDetect } from "@/hooks/useDeviceDetect"

const navigation = [
  { label: "Home", url: "/" },
  { label: "books", url: "/books" },
  { label: "About", url: "/about" },
]

export const Header = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <Container maxWidth="lg" sx={{ paddingY: 1 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={5}>
          <Typography variant="h4" component="h1" color="primary" fontWeight="700">
            Storybook
          </Typography>
          <Box display="flex" alignItems="center" gap={3}>
            {!isMobile &&
              navigation.map((item) => (
                <Link href={item.url} key={item.url} color="secondary">
                  {item.label}
                </Link>
              ))}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          {!isMobile && (
            <Button variant="contained" color="primary">
              Sign In / Sign Up
            </Button>
          )}
          <IconButton color="secondary" size="medium">
            <AccountCircleOutlined />
          </IconButton>
        </Box>
      </Box>
    </Container>
  )
}
