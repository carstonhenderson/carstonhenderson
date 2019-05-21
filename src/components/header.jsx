import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header>
    <div className="container mx-auto px-4 py-2 flex justify-between items-center">
      <h1>{siteTitle}</h1>

      <button className="text-yellow-500 border border-yellow-500 py-2 px-4 rounded bg-transparent hover:bg-yellow-500 hover:text-gray-900">
        Contact me
      </button>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
