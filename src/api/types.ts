import { Nullable } from "@/utils/types"

export interface Author {
  id: number
  firstName: string
  lastName: string
  summary: Nullable<string>
  image: Nullable<string>
  books?: Book[]
}

export interface Book {
  id: number
  title: string
  authorId: number
  author?: Author
  image: Nullable<string>
}
