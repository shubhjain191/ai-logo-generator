import React from 'react'
import Header from './_components/Header'

const Provider = ({children}) => {


  //Save User Data
  const CheckUserAuth=() => {
    //Save user to Database
  } 


  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1 w-full">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
          {children}
        </div>
      </div>
    </div>
  )
}

export default Provider
