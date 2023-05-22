import React from "react"
import { Link as LinkMUI, LinkProps as LinkMUIProps } from "@mui/material"
import NextLink, { LinkProps as NextLinkProps } from "next/link"

export type LinkProps = Omit<LinkMUIProps, "href" | "classes"> &
  Pick<NextLinkProps, "href" | "as" | "prefetch">

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, as, prefetch, underline, color, variant, ...props }, ref) => (
    // TODO: get rid of this legacyBehavior
    // Without 2 "a" tags are rendered
    <NextLink href={href} as={as} prefetch={prefetch} passHref legacyBehavior>
      {/* TODO: check this error!!*/}
      <LinkMUI ref={ref} underline={underline} color={color} variant={variant} {...props} />
    </NextLink>
  ),
)
Link.defaultProps = {
  underline: "none",
  color: "text",
  variant: "body1",
}
