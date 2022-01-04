import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { HeaderContainer, HeaderItems, HeaderItem } from "./styles"

const Header: React.FC = () => {
  const data = useStaticQuery(graphql`
    query HeaderData {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <HeaderContainer>
      <h2>{data.site.siteMetadata.title}</h2>
      <HeaderItems>
        <HeaderItem>
          <Link to="/">Home</Link>
        </HeaderItem>
        <HeaderItem>
          <Link to="/community">Community</Link>
        </HeaderItem>
        <HeaderItem>
          <Link to="/reviews">Reviews</Link>
        </HeaderItem>
        <HeaderItem>
          <Link to="/series">Series Reads</Link>
        </HeaderItem>
      </HeaderItems>
    </HeaderContainer>
  )
}

export default Header
