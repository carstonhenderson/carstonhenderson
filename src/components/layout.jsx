import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="bg-gray-900 text-white">
        <Header siteTitle={data.site.siteMetadata.title} />

        <main className="container mx-auto overflow-auto p-4">{children}</main>
      </div>
    )}
  />
)

export default Layout
