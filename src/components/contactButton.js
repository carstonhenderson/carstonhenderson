import React from 'react'

const ContactButton = ({ handleClick }) => (
  <button
    className="text-yellow-500 border border-yellow-500 py-2 px-4 rounded bg-gray-900 hover:bg-yellow-500 hover:text-gray-900"
    onClick={handleClick}
  >
    Contact me
  </button>
)

export default ContactButton
