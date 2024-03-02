import { Box, Button, Container, IconButton, Typography } from "@mui/material"
import { AccountCircleOutlined } from "@mui/icons-material"
import { Link } from "@/components/Link"
import { useDeviceDetect } from "@/hooks/useDeviceDetect"
import { styled } from "@mui/material/styles"

const navigation = [
  { label: "Books", url: "/books" },
  { label: "About", url: "/about" },
]

const HeaderWrapper = styled(Box)(
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

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLink = styled(Link)`
  all: unset;
  cursor: pointer;
`

export const Header = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Box display="flex" alignItems="center" gap={5}>
          <HeaderLink href="/">
            <Typography variant="h4" component="h1" color="primary" fontWeight={900}>
              Storybook
            </Typography>
          </HeaderLink>
          <Box display="flex" alignItems="center" gap={3}>
            {!isMobile &&
              navigation.map((item) => (
                <Link href={item.url} key={item.url} color="text.primary">
                  {item.label}
                </Link>
              ))}
          </Box>
        </Box>
        <Box display="flex" alignItems="center" gap={1}>
          {!isMobile && (
            <Button variant="contained" color="primary">
              Sign In / Sign Up
            </Button>
          )}
          <IconButton color="secondary" size="medium">
            <AccountCircleOutlined />
          </IconButton>
        </Box>
      </HeaderContainer>
    </HeaderWrapper>
  )
}
