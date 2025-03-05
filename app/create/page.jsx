'use client'
import React, { useState, useEffect } from 'react'
import LogoTitle from './_components/LogoTitle'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import LogoDesc from './_components/LogoDesc'
import LogoColorPallete from './_components/LogoColorPallete'
import LogoDesign from './_components/LogoDesigns'
import Pricingmodel from './_components/Pricingmodel'

const CreateLogo = () => {
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState({})
    const [isStepValid, setIsStepValid] = useState(false)

    const onHandleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }))
    }

    // Validate current step
    useEffect(() => {
        const validateStep = () => {
            switch(step) {
                case 1:
                    setIsStepValid(!!formData?.title)
                    break
                case 2:
                    setIsStepValid(!!formData?.desc)
                    break
                case 3:
                    setIsStepValid(!!formData?.pallette)
                    break
                case 4:
                    setIsStepValid(!!formData?.design)
                    break
                case 5:
                    setIsStepValid(!!formData?.plan)
                    break
                default:
                    setIsStepValid(false)
            }
        }
        validateStep()
    }, [step, formData])

    const handleNext = () => {
        if (isStepValid && step < 5) {
            setStep(prev => prev + 1)
        }
    }

    const handlePrevious = () => {
        if (step > 1) {
            setStep(prev => prev - 1)
        }
    }

    return (
        <div className="min-h-screen">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="bg-white rounded-2xl shadow-sm p-6 md:p-8 border border-gray-200">
                    {/* Progress Bar */}
                    <div className="mb-8 relative">
                        <div className="h-2 bg-gray-100 rounded-full">
                            <div 
                                className="h-2 bg-blue-500 rounded-full transition-all duration-300"
                                style={{ width: `${(step / 5) * 100}%` }}
                            />
                        </div>
                        <div className="mt-2 text-sm text-gray-500 text-right">
                            Step {step} of 5
                        </div>
                    </div>

                    {/* Form Steps */}
                    {step === 1 && <LogoTitle onHandleInputChange={(value) => onHandleInputChange('title', value)} formData={formData}/>}
                    {step === 2 && <LogoDesc onHandleInputChange={(value) => onHandleInputChange('desc', value)} formData={formData}/>}
                    {step === 3 && <LogoColorPallete onHandleInputChange={(value) => onHandleInputChange('pallette', value)} formData={formData}/>}
                    {step === 4 && <LogoDesign onHandleInputChange={(value) => onHandleInputChange('design', value)} formData={formData}/>}
                    {step === 5 && <Pricingmodel onHandleInputChange={(value) => onHandleInputChange('plan', value)} formData={formData}/>}
                    
                    {/* Navigation Buttons */}
                    <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-6">
                        {step > 1 && (
                            <Button 
                                variant="outline" 
                                className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900"
                                onClick={handlePrevious}
                            >
                                <ArrowLeft className="w-4 h-4" /> 
                                Previous
                            </Button>
                        )}
                        
                        <Button 
                            onClick={handleNext}
                            disabled={!isStepValid}
                            className={`flex items-center gap-2 px-6 py-2 ml-auto
                                ${isStepValid 
                                    ? 'bg-blue-600 hover:bg-blue-700' 
                                    : 'bg-gray-200 cursor-not-allowed'} 
                                text-white`}
                        >
                            {step === 5 ? 'Generate Logo' : 'Continue'}
                            <ArrowRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateLogo
