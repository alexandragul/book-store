import { Metadata } from "next"
import { Books } from "./books"

export const metadata: Metadata = {
  title: "Books",
}

export default function Page() {
  return <Books />
}
