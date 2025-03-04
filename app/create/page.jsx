'use client'
import React, { useState } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoColorPallete from './_components/LogoColorPallete'
import LogoDesign from './_components/LogoDesign'
import LogoIdea from './_components/LogoIdea'

const CreateLogo = () => {

    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState()
    const onHandleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    console.log(formData)


  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Main Content Area */}
        <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-200">
          {step === 1? <LogoTitle onHandleInputChange={(value) => onHandleInputChange('title', value)} /> : 
          step === 2? <LogoDesc onHandleInputChange={(value) => onHandleInputChange('desc', value)} /> : 
          step === 3? <LogoColorPallete onHandleInputChange={(value) => onHandleInputChange('pallette', value)} /> : 
          step === 4? <LogoDesign onHandleInputChange={(value) => onHandleInputChange('design', value)} /> : 
          step === 5? <LogoIdea onHandleInputChange={(value) => onHandleInputChange('idea', value)} /> : 
          null }
          
          {/* Navigation Buttons */}
          <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
           {step !=1 && <Button 
              variant="outline" 
              className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900"
              onClick={() => setStep(step - 1)}
            >
              <ArrowLeft className="w-4 h-4" /> 
              Previous
            </Button>
            }
            
            <Button 
              onClick={() => setStep(step + 1)}
              className="flex items-center gap-2 px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              Continue 
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateLogo
