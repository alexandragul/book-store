"use client"

import { Box, Button, IconButton, Typography } from "@mui/material"
import { AccountCircleOutlined } from "@mui/icons-material"
import { Link } from "@/components/Link"
import { Routes } from "@/config"
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
                <Link href={item.url} key={item.url} color="text.primary">
                  {item.label}
                </Link>
              ))}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          {!isMobile && (
            <Link href={Routes.SIGN_IN}>
              <Button variant="outlined" color="secondary" component="span">
                Sign In / Sign Up
              </Button>
            </Link>
          )}
          <IconButton color="secondary" size="medium">
            <AccountCircleOutlined />
          </IconButton>
        </Box>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
