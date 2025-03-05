'use client'
import { useUser } from '@clerk/nextjs'
import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { UserButton, SignInButton } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

const Header = () => {
  const { user, isLoaded } = useUser()
  const router = useRouter()

  const handleLogoClick = () => {
    router.push('/')
  }

  const handleGetStartedClick = () => {
    if (user) {
      // If user is logged in, start creating logo
      router.push('/create')
    } else {
      // If not logged in, show sign in modal
      return
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-[1920px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4 sm:py-5 md:py-6">
        {/* Logo Section */}
        <div 
          onClick={handleLogoClick}
          className="flex-shrink-0 cursor-pointer"
        >
          <Image 
            src={'/logo.svg'} 
            alt='logo' 
            width={180} 
            height={100}
            className="w-28 sm:w-32 md:w-36 lg:w-40 xl:w-[180px] h-auto transform transition-transform duration-300 hover:scale-105"
            priority 
          />
        </div>

        {/* Actions Section */}
        <div className="flex items-center space-x-4 sm:space-x-6">
          {isLoaded && (
            <>
              {user ? (
                <>
                  <Button
                    onClick={() => router.push('/create')}
                    className="
                      px-4 sm:px-6 py-2 sm:py-2.5
                      text-sm sm:text-base
                      font-medium
                      bg-blue-600 hover:bg-blue-700
                      text-white
                      rounded-lg
                      shadow-sm hover:shadow-md
                      transform transition-all duration-300
                      hover:scale-105 active:scale-95
                      whitespace-nowrap
                    "
                  >
                    Create Logo
                  </Button>
                  <UserButton 
                    afterSignOutUrl="/"
                    appearance={{
                      elements: {
                        avatarBox: "h-8 w-8 sm:h-10 sm:w-10",
                        userButtonPopover: "shadow-lg border border-gray-200"
                      }
                    }}
                  />
                </>
              ) : (
                <>
                  <SignInButton mode="modal">
                    <Button
                      className="
                        px-4 sm:px-6 py-2 sm:py-2.5
                        text-sm sm:text-base
                        font-medium
                        bg-blue-600 hover:bg-blue-700
                        text-white
                        rounded-lg
                        shadow-sm hover:shadow-md
                        transform transition-all duration-300
                        hover:scale-105 active:scale-95
                        whitespace-nowrap
                      "
                    >
                      Get Started
                    </Button>
                  </SignInButton>
                  <SignInButton mode="modal">
                    <Button
                      variant="outline"
                      className="transition-all duration-300 hover:bg-gray-100"
                    >
                      Sign In
                    </Button>
                  </SignInButton>
                </>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
