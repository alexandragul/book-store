"use client"

import { Button, TextField, Typography } from "@mui/material"
import { Link } from "@/components/Link"
import { Routes } from "@/config"

export const SignIn = () => {
  return (
    <>
      <Typography variant="h2" mb={1}>
        Welcome back
      </Typography>
      <Typography variant="body1" mb={3}>
        Please enter your details
      </Typography>
      <TextField label="Email" type="email" margin="dense" size="small" fullWidth />
      <TextField label="Password" type="password" margin="dense" size="small" fullWidth />
      <Button variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Typography variant="body1">
        Don’t have an account? <Link href={Routes.SIGN_UP}>Sign up</Link>
      </Typography>
    </>
  )
}
