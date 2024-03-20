"use client"

import { Button, TextField, Typography } from "@mui/material"
import { Link } from "@/components/Link"
import { Routes } from "@/config"

export const SignUp = () => {
  return (
    <>
      <Typography variant="h2" align="center" mb={1}>
        Welcome
      </Typography>
      <Typography variant="body1" mb={3}>
        Please enter your details
      </Typography>
      <TextField label="Name" margin="dense" size="small" fullWidth />
      <TextField label="Email" type="email" margin="dense" size="small" fullWidth />
      <TextField label="Password" type="password" margin="dense" size="small" fullWidth />
      <TextField label="Confirm Password" type="password" margin="dense" size="small" fullWidth />
      <Button variant="contained" fullWidth sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
      <Typography variant="body1">
        Already have an account? <Link href={Routes.SIGN_IN}>Sign in</Link>
      </Typography>
    </>
  )
}
