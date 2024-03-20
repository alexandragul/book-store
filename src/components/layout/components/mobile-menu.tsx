import { useState } from "react"
import { HeaderLink } from "@/components/layout/styles"
import { Divider, Drawer, IconButton, MenuItem, Typography } from "@mui/material"
import { Menu as MenuIcon } from "@mui/icons-material"
import { loggedInRoutes, loggedOutRoutes, publicRoutes } from "@/components/layout/utils"
import { Link } from "@/components/Link"
import { isLoggedIn } from "@/config"

export const MobileMenu = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  const authRoutes = isLoggedIn ? loggedInRoutes : loggedOutRoutes

  return (
    <>
      <HeaderLink href="/" underline="none">
        <Typography variant="h4" component="h1" color="primary" fontWeight={900}>
          Storybook
        </Typography>
      </HeaderLink>
      <IconButton color="secondary" size="medium" onClick={() => setDrawerOpen(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        anchor="right"
        PaperProps={{ sx: { borderRadius: 0, minWidth: 300 } }}
      >
        {authRoutes.map((route) => (
          <Link href={route.url} key={route.url} color="text.primary">
            <MenuItem onClick={() => setDrawerOpen(false)}>{route.label}</MenuItem>
          </Link>
        ))}
        <Divider />
        {publicRoutes.map((route) => (
          <Link href={route.url} key={route.url} color="text.primary">
            <MenuItem onClick={() => setDrawerOpen(false)}>{route.label}</MenuItem>
          </Link>
        ))}
      </Drawer>
    </>
  )
}
