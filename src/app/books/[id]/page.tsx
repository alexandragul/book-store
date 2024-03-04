import { Metadata } from "next"
import Book from "./book"

export const metadata: Metadata = {
  title: "Book",
}

export default function Page() {
  return <Book />
}
