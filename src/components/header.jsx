import React, { useState } from 'react'
import ContactButton from '../components/contactButton'
import ContactModal from '../components/contactModal'

const Header = ({ siteTitle }) => {
  const [showModal, toggleModal] = useState(false)

  return (
    <header className="fixed inset-x-0 mb-16 container mx-auto px-4 py-2 bg-gray-900 flex justify-between items-center">
      <h1>{siteTitle}</h1>

      <ContactButton handleClick={() => toggleModal(true)} />

      <ContactModal show={showModal} handleClick={() => toggleModal(false)} />
    </header>
  )
}

export default Header
