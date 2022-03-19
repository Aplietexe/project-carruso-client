import type { ReactNode } from "react"
import styled from "styled-components"

import StyledLink from "../../components/StyledLink"
import type { DeepReadonly } from "../../utils/types"

type NavLinkProps = DeepReadonly<{
  children: ReactNode
  to: string
}>

const StyledLinkForNav = styled(StyledLink)`
  color: var(--bs-primary) !important;
  font-weight: 600;
  text-align: center;
`

const NavLink = ({ children, to }: NavLinkProps) => (
  <StyledLinkForNav className="nav-link" to={to}>
    {children}
  </StyledLinkForNav>
)

export default NavLink
