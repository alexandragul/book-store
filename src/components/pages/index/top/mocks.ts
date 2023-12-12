import edgarAllanPoeImage from "public/images/edgar-allan-poe.webp"
import markTwainImage from "public/images/mark-twain.jpeg"
import williamShakespeareImage from "public/images/william-shakespeare.jpeg"
import { Author } from "@/api/types"

export const authorsTopMock: Author[] = [
  {
    id: 1,
    firstName: "Edgar",
    lastName: "Poe",
    description: "American short story author, poet",
    image: edgarAllanPoeImage.src,
    books: [],
  },
  {
    id: 2,
    firstName: "Mark",
    lastName: "Twain",
    description: "American humorist, novelist, short story author",
    image: markTwainImage.src,
    books: [],
  },
  {
    id: 3,
    firstName: "William",
    lastName: "Shakespeare",
    description: "Greatest english dramatist and poet",
    image: williamShakespeareImage.src,
    books: [],
  },
]
