import { Routes } from "@/config"

type RouteConfig = Array<{ label: string; url: string }>

export const publicRoutes: RouteConfig = [
  { label: "Books", url: Routes.BOOKS },
  { label: "About", url: Routes.ABOUT },
]

export const loggedOutRoutes: RouteConfig = [
  { label: "Sign In", url: Routes.SIGN_IN },
  { label: "Sign Up", url: Routes.SIGN_UP },
]

export const loggedInRoutes: RouteConfig = [
  { label: "Books", url: Routes.BOOKS },
  { label: "About", url: Routes.ABOUT },
]
