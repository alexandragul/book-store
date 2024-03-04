import React from "react"
import { Link as LinkMUI, LinkProps as LinkMUIProps } from "@mui/material"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

export interface LinkProps
  extends Omit<LinkMUIProps, "href" | "classes">,
    Pick<NextLinkProps, "href" | "replace" | "prefetch" | "scroll"> {}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, prefetch, scroll, replace, ...props }, ref) => (
    <NextLink
      href={href}
      prefetch={prefetch}
      scroll={scroll}
      replace={replace}
      passHref
      legacyBehavior
    >
      <LinkMUI ref={ref} {...props} />
    </NextLink>
  ),
)

Link.defaultProps = {
  underline: "none",
  color: "text",
  variant: "body1",
}
