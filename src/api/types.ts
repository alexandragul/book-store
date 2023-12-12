// TODO: remove it after update on api side
interface MockedAuthorFields {
  description?: string
  image: string
}

export interface Author extends MockedAuthorFields {
  id: number
  firstName: string
  lastName: string
  books: Book[]
}

export interface Book {
  id: number
  title: string
  authorId: number
  author?: Author
  image: string
}
