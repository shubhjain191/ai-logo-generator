import React from 'react'

const HeadingDescription = ({title, description}) => {
  return (
    <div className="space-y-2">
      <h2 className="text-2xl font-semibold text-gray-900 tracking-tight">
        {title}
      </h2>
      <p className="text-base text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  )
}

export default HeadingDescription
