import React from 'react'
import Header from './header'
import './layout.css'

const Layout = ({ children }) => (
  <div className="bg-gray-900 text-white">
    <main className="container mx-auto p-4 max-w-3xl">
      <Header siteTitle="Carston Henderson" />
      {children}
    </main>
  </div>
)

export default Layout
