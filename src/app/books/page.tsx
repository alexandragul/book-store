import { Metadata } from "next"
import { Books } from "./books"
import { api } from "@/api/axios"

export const metadata: Metadata = {
  title: "Books",
}

const getBooks = async () => {
  const { data: books } = await api.get("/books")
  return books
}

const Page = async () => {
  const books = await getBooks()

  return <Books books={books} />
}

export default Page
