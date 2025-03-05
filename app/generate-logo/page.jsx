'use client'
import React, { useContext, useEffect, useState } from 'react'
import { UserDetailsContext } from '../_context/UserDetailsContext'
import Prompt from '../_data/Prompt'
import axios from 'axios'
import Image from 'next/image'


const page = () => {

  const {userDetails, setUserDetails} = useContext(UserDetailsContext)
  const [formData, setFormData] = useState()
  const [loading, setLoading] = useState(false)
  const [logoImage, setLogoImage] = useState(null)

  useEffect(() => {
    if(typeof window !== 'undefined' && userDetails?.email){
      const storage = localStorage.getItem('formData')
      if(storage){
        setFormData(JSON.parse(storage))
        console.log(JSON.parse(storage))
      }
    }
  }, [userDetails]) 

  useEffect(() => {
    if(formData?.title){
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

    const result = await axios.post('/api/ai-logo-model', {
      prompt: PROMPT,
      email: userDetails?.email,
      title: formData.title,
      desc: formData.desc
    })
    console.log(result?.data)
    setLogoImage(result.data?.image)
    setLoading(false)
  }


  return (
    <div>
      <h2>{loading && 'Loading...'}</h2>
      {!loading && <Image src={logoImage} alt='logo' width={300} height={300} />}
    </div>
  )
}

export default page
