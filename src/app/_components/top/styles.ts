import Image from "next/image"
import { styled } from "@mui/material/styles"
import { Link } from "@/components/Link"

export const StyledImage = styled(Image)`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`

export const BookCard = styled(Link)(
  ({ theme }) => `
  all: unset;
  cursor: pointer;

  display: flex;
  box-sizing: border-box;
  gap: ${theme.spacing(2)};
`,
)
