import React from 'react'

const Degree = ({ major, school, graduationDate, type }) => (
  <div className="border border-gray-500 rounded p-4 mb-4">
    <div className="flex justify-between">
      <h4 className="text-xl">{major}</h4>
      <div className="border border-yellow-500 rounded px-2 py-1 bg-yellow-500 text-gray-900 text-sm">
        {type}
      </div>
    </div>

    <div className="text-gray-500">
      {school} - {graduationDate}
    </div>
  </div>
)

export default Degree
