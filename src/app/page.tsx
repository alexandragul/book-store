import Home from "@/app/home"
import { api } from "@/api/axios"

const getBooks = async () => {
  const { data: books } = await api.get("/books")
  return books
}

const getAuthors = async () => {
  const { data: authors } = await api.get("/authors")
  return authors
}

const Page = async () => {
  const books = await getBooks()
  const authors = await getAuthors()

  return <Home books={books} authors={authors} />
}

export default Page
