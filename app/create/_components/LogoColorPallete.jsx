import React, { useState, useEffect } from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import Colors from '@/app/_data/Colors'
import { Check, Palette, AlertCircle } from 'lucide-react'

const LogoColorPallete = ({ onHandleInputChange, formData, setIsValid }) => {
  const [selectedOption, setSelectedOption] = useState(formData?.pallette || null)
  const [hoveredPalette, setHoveredPalette] = useState(null)
  const [showAlert, setShowAlert] = useState(!formData?.title || !formData?.desc)

  // Update parent about validation state
  useEffect(() => {
    const isStepValid = !showAlert && selectedOption !== null
    setIsValid?.(isStepValid)
  }, [showAlert, selectedOption, setIsValid])

  const handleSelect = (paletteName) => {
    if (!formData?.title || !formData?.desc) {
      setShowAlert(true)
      setIsValid?.(false)
      return
    }
    setSelectedOption(paletteName)
    onHandleInputChange(paletteName)
    setShowAlert(false)
  }

  return (
    <div className="space-y-8">
      <HeadingDescription
        title={Lookup.LogoColorPaletteTitle}
        description={Lookup.LogoColorPaletteDesc}
      />

      {/* Alert Message */}
      {showAlert && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex items-center gap-3 text-amber-800">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <p className="text-sm">
            Please complete the previous steps (Logo Name and Description) before selecting a color palette.
            You won't be able to proceed until all required steps are completed.
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {Colors.map((palette, index) => (
          <div 
            key={index}
            onClick={() => handleSelect(palette.name)}
            onMouseEnter={() => setHoveredPalette(palette.name)}
            onMouseLeave={() => setHoveredPalette(null)}
            className={`group bg-white border rounded-xl transition-all duration-300 
              ${!formData?.title || !formData?.desc 
                ? 'opacity-50 cursor-not-allowed' 
                : 'cursor-pointer hover:shadow-md'}
              ${selectedOption === palette.name 
                ? 'border-blue-500 shadow-lg' 
                : 'border-gray-200 hover:border-gray-300'}`}
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
