import React, { useState } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'
import { Check, Palette } from 'lucide-react'

const LogoColorPallete = ({ onHandleInputChange }) => {
  const [selectedOption, setSelectedOption] = useState(null)
  const [hoveredPalette, setHoveredPalette] = useState(null)

  const handleSelect = (paletteName) => {
    setSelectedOption(paletteName)
    onHandleInputChange(paletteName)
  }

  return (
    <div className="space-y-8">
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Colors.map((palette, index) => (
          <div 
            key={index}
            onClick={() => handleSelect(palette.name)}
            onMouseEnter={() => setHoveredPalette(palette.name)}
            onMouseLeave={() => setHoveredPalette(null)}
            className={`group bg-white border rounded-xl transition-all duration-300 
              ${selectedOption === palette.name 
                ? 'border-blue-500 shadow-lg' 
                : 'border-gray-200 hover:border-gray-300 hover:shadow-md'}`}
          >
            {/* Palette Header */}
            <div className="p-4 border-b border-gray-100 flex items-center justify-between">
              <span className="font-medium text-gray-800 flex items-center gap-2">
                <Palette className="w-4 h-4 text-gray-500" />
                {palette.name}
              </span>
              {selectedOption === palette.name && (
                <Check className="w-5 h-5 text-blue-500" />
              )}
            </div>

            {/* Color Grid Container */}
            <div className="p-4">
              {/* Top Row - First 4 Colors */}
              <div className="grid grid-cols-4 gap-3 mb-3">
                {palette.colors.slice(0, 4).map((color, colorIndex) => (
                  <div
                    key={colorIndex}
                    className="relative group/color"
                  >
                    <div
                      className="aspect-square rounded-lg shadow-sm transition-transform duration-200 
                        group-hover:shadow-md group-hover:scale-105"
                      style={{ backgroundColor: color }}
                    />
                    <div className="opacity-0 group-hover/color:opacity-100 transition-opacity
                      absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-gray-900 
                      text-white px-2 py-1 rounded-md whitespace-nowrap z-10">
                      {color}
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom Row - Last 4 Colors */}
              <div className="grid grid-cols-4 gap-3">
                {palette.colors.slice(4, 8).map((color, colorIndex) => (
                  <div
                    key={colorIndex + 4}
                    className="relative group/color"
                  >
                    <div
                      className="aspect-square rounded-lg shadow-sm transition-transform duration-200 
                        group-hover:shadow-md group-hover:scale-105"
                      style={{ backgroundColor: color }}
                    />
                    <div className="opacity-0 group-hover/color:opacity-100 transition-opacity
                      absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs bg-gray-900 
                      text-white px-2 py-1 rounded-md whitespace-nowrap z-10">
                      {color}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoColorPallete
