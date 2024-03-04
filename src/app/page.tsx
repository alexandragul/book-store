import { Metadata } from "next"
import { api } from "@/api/axios"
import { Home } from "./home"

const getBooks = async () => {
  const { data: books } = await api.get("/books")
  return books
}

const getAuthors = async () => {
  const { data: authors } = await api.get("/authors")
  return authors
}

export const metadata: Metadata = {
  title: "Storybook",
}

const Page = async () => {
  const books = await getBooks()
  const authors = await getAuthors()

  return <Home books={books} authors={authors} />
}

export default Page
