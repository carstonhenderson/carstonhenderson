import React from 'react'

const Section = ({ title, lastSection, children }) => (
  <div className={lastSection ? '' : 'mb-16'}>
    <h3 className="text-3xl font-bold mb-8">{title}</h3>

    <div>{children}</div>
  </div>
)

export default Section
