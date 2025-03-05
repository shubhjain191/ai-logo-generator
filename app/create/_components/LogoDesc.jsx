import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

const LogoDesc = ({onHandleInputChange, formData}) => {
  return (
    <div className="space-y-8">
      <HeadingDescription
        title={Lookup.LogoDescTitle}
        description={Lookup.LogoDescDescription}
      />
      <div className="relative">
        <input
          type="text"
          placeholder="Enter your organization name"
          className="w-full px-5 py-3.5 border border-gray-200 rounded-xl
            text-gray-800 placeholder:text-gray-400
            shadow-sm
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-all duration-200"
          value={formData?.desc || ''}
          onChange={(e) => onHandleInputChange(e.target.value)}
        />
      </div>
    </div>
  )
}

export default LogoDesc
