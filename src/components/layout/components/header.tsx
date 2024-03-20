"use client"

import { useDeviceDetect } from "@/hooks/use-device-detect"
import { HeaderContainer, HeaderWrapper } from "../styles"
import { MobileMenu } from "./mobile-menu"
import { DesktopMenu } from "./desktop-menu"

export const Header = () => {
  const { isMobile } = useDeviceDetect()

  return (
    <HeaderWrapper variant="outlined" elevation={0}>
      <HeaderContainer>{isMobile ? <MobileMenu /> : <DesktopMenu />}</HeaderContainer>
    </HeaderWrapper>
  )
}
