import Home from "@/app/home"
import { api } from "@/api/axios"

async function getBooks() {
  const { data: books } = await api.get("/books")
  return books
}

async function getAuthors() {
  const { data: authors } = await api.get("/authors")
  return authors
}

const Page = async () => {
  const books = await getBooks()
  const authors = await getAuthors()

  return <Home books={books} authors={authors} />
}

export default Page
