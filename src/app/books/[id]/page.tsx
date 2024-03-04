import { Metadata } from "next"
import { Book } from "./book"

export const metadata: Metadata = {
  title: "Book",
}

const Page = () => {
  return <Book />
}

export default Page
