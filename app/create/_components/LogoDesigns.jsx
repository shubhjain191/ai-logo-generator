import React, { useState } from 'react' 
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import LogoDesign from '@/app/_data/LogoDesign'
import Image from 'next/image'

const LogoDesigns = ({onHandleInputChange, formData}) => {
  const [selectedDesign, setSelectedDesign] = useState(formData?.design?.title)

  return (
    <div className="space-y-8">
      <HeadingDescription 
        title={Lookup.LogoDesignTitle}
        description={Lookup.LogoDesignDesc}
      />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
        {LogoDesign.map((design, index) => (
          <div 
            key={index} 
            onClick={() => {
              setSelectedDesign(design.title)
              onHandleInputChange(design)
            }}
            className={`group flex flex-col bg-white rounded-xl overflow-hidden cursor-pointer
              transition-all duration-300 hover:shadow-lg hover:-translate-y-1
              ${selectedDesign === design.title 
                ? 'ring-2 ring-blue-500 shadow-lg scale-[1.02]' 
                : 'border border-gray-100 hover:border-gray-200'}`}
          >
            <div className="relative overflow-hidden">
              <Image 
                src={design.image} 
                alt={design.title} 
                width={300} 
                height={200}
                className="w-full h-[200px] object-cover transition-transform duration-300 
                  group-hover:scale-105"
              />
            </div>
            <div className="px-4 py-3 text-center border-t border-gray-200">
              <h3 className="text-sm font-semibold tracking-wide text-gray-800 
                group-hover:text-blue-600 transition-colors duration-200 uppercase">
                {design.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoDesigns
