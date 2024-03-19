"use client"

import { useState, MouseEvent } from "react"
import { Box, Button, Divider, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { AccountCircleOutlined, Menu as MenuIcon } from "@mui/icons-material"
import { Link } from "@/components/Link"
import { isLoggedIn, Routes } from "@/config"
import { useDeviceDetect } from "@/hooks/use-device-detect"
import { HeaderContainer, HeaderLink, HeaderWrapper } from "./styles"

const navigation = [
  { label: "Books", url: Routes.BOOKS },
  { label: "About", url: Routes.ABOUT },
]

const AVATAR_BUTTON_ID = "avatar-button"
const ACCOUNT_MENU_ID = "account-menu"

export const Header = () => {
  const { isMobile } = useDeviceDetect()
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(menuAnchor)

  const handleClickAvatar = (e: MouseEvent<HTMLElement>) => {
    setMenuAnchor(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setMenuAnchor(null)
  }

  return (
    <HeaderWrapper variant="outlined" elevation={0}>
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
          {(isLoggedIn || isMobile) && (
            <>
              <IconButton
                id={AVATAR_BUTTON_ID}
                color="secondary"
                size="medium"
                onClick={handleClickAvatar}
                aria-haspopup="true"
                {...(isMenuOpen && {
                  "aria-controls": ACCOUNT_MENU_ID,
                  "aria-expanded": "true",
                })}
              >
                {isMobile ? <MenuIcon /> : <AccountCircleOutlined />}
              </IconButton>
              <Menu
                id={ACCOUNT_MENU_ID}
                anchorEl={menuAnchor}
                open={isMenuOpen}
                onClose={handleCloseMenu}
                MenuListProps={{
                  "aria-labelledby": AVATAR_BUTTON_ID,
                }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                PaperProps={{ sx: { width: 200 } }}
              >
                {isLoggedIn && <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>}
                {isLoggedIn && <MenuItem onClick={handleCloseMenu}>Logout</MenuItem>}
                {isLoggedIn && isMobile && <Divider />}
                {isMobile &&
                  navigation.map((item) => (
                    <Link key={item.url} underline="none" color="text.primary" href={item.url}>
                      <MenuItem onClick={handleCloseMenu}>{item.label}</MenuItem>
                    </Link>
                  ))}
              </Menu>
            </>
          )}
        </Box>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
