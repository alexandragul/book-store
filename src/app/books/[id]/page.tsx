import { Metadata } from "next"
import { Book } from "./book"
import { api } from "@/api/axios"

export const metadata: Metadata = {
  title: "Book",
}

const getBook = async (id: string) => {
  const { data: book } = await api.get(`/books/${id}`)
  return book
}

const Page = async ({ params }: { params: { id: string } }) => {
  const book = await getBook(params.id)

  return <Book book={book} />
}

export default Page
