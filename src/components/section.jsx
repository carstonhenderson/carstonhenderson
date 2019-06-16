import React from 'react'

const Section = ({ title, children }) => (
  <div className="mb-16">
    <h3 className="text-3xl mb-8">{title}</h3>

    <div>{children}</div>
  </div>
)

export default Section