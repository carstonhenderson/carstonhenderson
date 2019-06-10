import React from 'react'

const listItems = details => {
  return details.map((item, index) => (
    <li key={index} className="mb-2">
      {item}
    </li>
  ))
}

const Job = ({ title, company, startDate, endDate, details }) => (
  <div className="md:flex md:justify-between mb-4">
    <div className="mb-4 md:mb-0">
      <h4 className="text-xl">
        {title}
        <span className="text-base text-gray-500 ml-2">{company}</span>
      </h4>

      <div className="text-yellow-500">
        {startDate} - {endDate}
      </div>
    </div>

    <ul className="list-disc px-8 md:px-0 md:w-2/5">{listItems(details)}</ul>
  </div>
)

export default Job
