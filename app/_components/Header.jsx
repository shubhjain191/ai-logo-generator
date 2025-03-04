import React from 'react'
import Image from 'next/image'
import {Button} from '@/components/ui/button'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4 sm:py-5 md:py-6">
        {/* Logo */}
        <div className="flex-shrink-0 transition-transform hover:scale-105">
          <Image 
            src={'/logo.svg'} 
            alt='logo' 
            width={180} 
            height={100}
            className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-[180px] h-auto"
            priority 
          />
        </div>

        {/* Button */}
        <Button className="
          px-4 sm:px-6 py-2 sm:py-2.5
          text-sm sm:text-base
          whitespace-nowrap
          transform transition-all duration-300
          hover:scale-105 active:scale-95
        ">
          Get Started
        </Button>
      </div>
    </header>
  )
}

export default Header
