import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import { HeaderContainer } from "./Header.styles"

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
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/community">Community</Link>
        </li>
        <li>
          <Link to="/reviews">Reviews</Link>
        </li>
        <li>
          <Link to="/series">Series Reads</Link>
        </li>
      </ul>
    </HeaderContainer>
  )
}

export default Header
