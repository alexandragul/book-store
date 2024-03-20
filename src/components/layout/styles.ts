import { styled } from "@mui/material/styles"
import { AppBar, Container } from "@mui/material"
import { Link } from "@/components/Link"

export const HeaderWrapper = styled(AppBar)`
  height: 60px;
  justify-content: center;
`

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderLink = styled(Link)`
  all: unset;
  cursor: pointer;
`
