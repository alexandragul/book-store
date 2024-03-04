import { Metadata } from "next"
import { Books } from "./books"

export const metadata: Metadata = {
  title: "Books",
}

const Page = () => {
  return <Books />
}

export default Page
