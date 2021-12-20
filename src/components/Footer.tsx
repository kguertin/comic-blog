import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Footer: React.FC = () => {
  const data = useStaticQuery(graphql`
    query FooterData {
      site {
        siteMetadata {
          author
          currentYear
        }
      }
    }
  `)

  return (
    <div>
      <p>
        Side made by {data.site.siteMetadata.author}. ©{" "}
        {data.site.siteMetadata.currentYear}
      </p>
    </div>
  )
}

export default Footer
