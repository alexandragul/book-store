export type Author = {
  id: number
  firstName: string
  lastName: string
  books: Book[]
}

export type Book = {
  id: number
  title: string
  authorId: number
  author?: Author
  image: string
}
