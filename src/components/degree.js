import React from 'react'

const Degree = ({ major, school, graduationDate, type }) => (
  <div className="border border-gray-800 rounded p-4 mb-8 bg-gray-800 shadow">
    <div className="flex justify-between items-center mb-2">
      <h4 className="text-xl">{major}</h4>

      <div className="bg-green-500 rounded px-2 py-1 text-sm">{type}</div>
    </div>

    <div className="text-gray-500">
      {school} - {graduationDate}
    </div>
  </div>
)

export default Degree
