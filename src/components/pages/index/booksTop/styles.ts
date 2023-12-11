import { ComponentProps } from "react"
import styled from "styled-components"

export const StyledImage = styled.img<ComponentProps<"img">>`
  width: 100px;
  height: 150px;
  object-fit: cover;
  border-radius: 8px;
`
