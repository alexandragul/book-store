import { styled } from "@mui/material/styles"
import { Box, Container } from "@mui/material"
import { Link } from "@/components/Link"

export const HeaderWrapper = styled(Box)(
  ({ theme }) => `
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  background-color: ${theme.palette.common.white};
  border-bottom: 1px solid ${theme.palette.divider};
`,
)

export const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const HeaderLink = styled(Link)`
  all: unset;
  cursor: pointer;
`
