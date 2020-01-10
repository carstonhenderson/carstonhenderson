import React from 'react'

const listItems = details => {
  return details.map((item, index) => (
    <li key={index} className="mb-2">
      {item}
    </li>
  ))
}

const Job = ({ title, company, startDate, endDate, details }) => (
  <div className="mb-8">
    <div className="mb-4">
      <h4 className="text-xl mb-2">
        {title}
        <span className="text-base text-gray-500 ml-2">{company}</span>
      </h4>

      <div className="text-green-500">
        {startDate} - {endDate}
      </div>
    </div>

    <ul className="list-disc px-8">{listItems(details)}</ul>
  </div>
)

export default Job
