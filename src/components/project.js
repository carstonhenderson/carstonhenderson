import React from 'react'

const Project = ({ title, url, description, details }) => (
  <div className="mb-8 border-b border-gray-700 pb-4">
    <h4 className="text-xl mb-4">
      <a href={url} className="text-blue-300 hover:text-blue-500 underline">
        {title}
      </a>
    </h4>

    <p>{description}</p>
  </div>
)

export default Project
