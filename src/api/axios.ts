import axios from "axios"

const baseUrl = process.env.NEXT_PUBLIC_API_URL

export const fetcher = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
})
