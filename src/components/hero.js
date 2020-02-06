import React from 'react'

const Hero = ({ header, content }) => (
  <div className="w-full md:p-4 mb-16 flex flex-col items-center">
    <h2 className="text-center w-full text-5xl my-16">{header}</h2>

    <p className="max-w-xl text-gray-500">{content}</p>
  </div>
)

export default Hero
