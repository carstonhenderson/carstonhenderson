import React from 'react'
import github from '../images/github.png'
import linkedin from '../images/linkedin.png'
import twitter from '../images/twitter.png'

const ContactModal = ({ handleClick, show }) => (
  <div className={show ? 'block' : 'hidden'}>
    <div
      className="fixed inset-0 w-full h-full"
      style={{ backgroundColor: 'rgba(26, 32, 44, 0.75)' }}
    >
      <div className="flex w-full h-full flex items-center justify-center">
        <div className="bg-gray-900 border rounded w-full md:w-1/2 p-4 mx-4 md:mx-0">
          <h3 className="text-2xl mb-8">Contact me</h3>

          <div className="border rounded w-full mb-8">
            <a
              href="https://github.com/carstonhenderson"
              className="border-b flex justify-between p-4 hover:bg-gray-800"
            >
              GitHub
              <img src={github} alt="GitHub" />
            </a>

            <a
              href="https://linkedin.com/in/carstonhenderson"
              className="border-b flex justify-between p-4 hover:bg-gray-800"
            >
              LinkedIn
              <img src={linkedin} alt="LinkedIn" />
            </a>

            <a
              href="https://twitter.com/carston_h"
              className="flex justify-between p-4 hover:bg-gray-800"
            >
              Twitter
              <img src={twitter} alt="Twitter" />
            </a>
          </div>

          <button
            className="text-yellow-500 border border-yellow-500 py-2 px-4 rounded bg-gray-900 hover:bg-yellow-500 hover:text-gray-900 float-right"
            onClick={handleClick}
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default ContactModal
