"use client"

import { Box, Button, IconButton, Typography } from "@mui/material"
import { AccountCircleOutlined } from "@mui/icons-material"
import { Link } from "@/components/Link"
import { isLoggedIn, Routes } from "@/config"
import { useDeviceDetect } from "@/hooks/use-device-detect"
import { HeaderContainer, HeaderLink, HeaderWrapper } from "./styles"

const navigation = [
  { label: "Books", url: Routes.BOOKS },
  { label: "About", url: Routes.ABOUT },
]

export const Header = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Box display="flex" alignItems="center" gap={5}>
          <HeaderLink href="/" underline="none">
            <Typography variant="h4" component="h1" color="primary" fontWeight={900}>
              Storybook
            </Typography>
          </HeaderLink>
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
          {!isMobile && !isLoggedIn && (
            <>
              <Link href={Routes.SIGN_IN}>
                <Button variant="text" color="secondary" component="span">
                  Sign In
                </Button>
              </Link>
              <Link href={Routes.SIGN_UP}>
                <Button variant="contained" color="secondary" component="span">
                  Sign Up
                </Button>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <IconButton color="secondary" size="medium">
              <AccountCircleOutlined />
            </IconButton>
          )}
        </Box>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
