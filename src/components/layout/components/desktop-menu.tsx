import { MouseEvent, useState } from "react"
import { Box, Button, IconButton, Menu, MenuItem, Typography } from "@mui/material"
import { HeaderLink } from "@/components/layout/styles"
import { loggedInRoutes, loggedOutRoutes, publicRoutes } from "@/components/layout/utils"
import { Link } from "@/components/Link"
import { isLoggedIn } from "@/config"
import { AccountCircleOutlined } from "@mui/icons-material"

export const DesktopMenu = () => {
  const [menuAnchor, setMenuAnchor] = useState<null | HTMLElement>(null)
  const isMenuOpen = Boolean(menuAnchor)

  const handleClickAvatar = (e: MouseEvent<HTMLElement>) => {
    setMenuAnchor(e.currentTarget)
  }

  const handleCloseMenu = () => {
    setMenuAnchor(null)
  }

  return (
    <>
      <Box display="flex" alignItems="center" gap={5}>
        <HeaderLink href="/" underline="none">
          <Typography variant="h4" component="h1" color="primary" fontWeight={900}>
            Storybook
          </Typography>
        </HeaderLink>
        <Box display="flex" alignItems="center" gap={3}>
          {publicRoutes.map((route) => (
            <Link href={route.url} key={route.url} color="secondary">
              {route.label}
            </Link>
          ))}
        </Box>
      </Box>
      <Box display="flex" alignItems="center" gap={1}>
        {!isLoggedIn &&
          loggedOutRoutes.map((route, i) => {
            const variant = i === 0 ? "text" : "contained"
            return (
              <Link href={route.url} key={route.url}>
                <Button variant={variant} color="secondary" component="span">
                  {route.label}
                </Button>
              </Link>
            )
          })}
        {isLoggedIn && (
          <>
            <IconButton
              id="avatar-button"
              color="secondary"
              size="medium"
              onClick={handleClickAvatar}
              aria-haspopup="true"
              {...(isMenuOpen && {
                "aria-controls": "account-menu",
                "aria-expanded": "true",
              })}
            >
              <AccountCircleOutlined />
            </IconButton>
            <Menu
              id="account-menu"
              anchorEl={menuAnchor}
              open={isMenuOpen}
              onClose={handleCloseMenu}
              MenuListProps={{
                "aria-labelledby": "avatar-button",
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
              PaperProps={{ sx: { width: 200 } }}
            >
              {loggedInRoutes.map((route) => (
                <Link href={route.url} key={route.url}>
                  <MenuItem onClick={handleCloseMenu}>{route.label}</MenuItem>
                </Link>
              ))}
            </Menu>
          </>
        )}
      </Box>
    </>
  )
}
