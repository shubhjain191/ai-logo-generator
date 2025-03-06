'use client'
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailsContext } from '../_context/UserDetailsContext'
import Prompt from '../_data/Prompt'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'

const page = () => {
  const { userDetails, setUserDetails } = useContext(UserDetailsContext)
  const [formData, setFormData] = useState()
  const [loading, setLoading] = useState(false)
  const [logoImage, setLogoImage] = useState(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && userDetails?.email) {
      const storage = localStorage.getItem('formData')
      if (storage) {
        setFormData(JSON.parse(storage))
        console.log(JSON.parse(storage))
      }
    }
  }, [userDetails])

  useEffect(() => {
    if (formData?.title) {
      GenerateAILogo()
    }
  }, [formData])

  const GenerateAILogo = async () => {
    setLoading(true)
    const PROMPT = Prompt.LOGO_PROMPT
      .replace('{logoTitle}', formData?.title)
      .replace('{logoDesc}', formData?.desc)
      .replace('{logoColor}', formData?.pallette)
      .replace('{logoDesign}', formData?.design?.title)
      .replace('{logoPrompt}', formData?.design?.prompt)

    console.log(PROMPT)

    try {
      const result = await axios.post('/api/ai-logo-model', {
        prompt: PROMPT,
        email: userDetails?.email,
        title: formData.title,
        desc: formData.desc
      })
      console.log(result?.data)
      setLogoImage(result.data?.image)
    } catch (error) {
      console.error('Error generating logo:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 sm:px-8 lg:px-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
            <h2 className="mt-6 text-2xl font-semibold text-gray-700">Generating your logo...</h2>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {logoImage ? (
              <Image 
                src={logoImage} 
                alt="Generated Logo" 
                width={400} 
                height={400}
                className="rounded-lg shadow-md" 
              />
            ) : (
              <p className="text-gray-500">No logo generated yet.</p>
            )}
            
            <div className="flex gap-6 mt-10">
              <button
                onClick={() => {
                  const link = document.createElement('a')
                  link.href = logoImage
                  link.download = `${formData?.title || 'logo'}.png`
                  link.click()
                }}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                disabled={!logoImage} // Disable button if no image
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download Logo
              </button>
              
              <Link
                href="/"
                className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                </svg>
                Generate New Logo
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default page
