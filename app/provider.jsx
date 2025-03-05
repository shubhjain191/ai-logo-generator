'use client'
import React from 'react'
import Header from './_components/Header'
import { useUser } from '@clerk/nextjs'
import { useEffect, useState } from 'react'
import { UserDetailsContext } from './_context/UserDetailsContext'

const Provider = ({children}) => {
   const {user} = useUser();
   const [userDetails, setUserDetails] = useState()

   useEffect(() => {
    if (user) {
      CheckUserAuth();
    }
   }, [user])

   //Save User Data
   const CheckUserAuth = async () => {
     try {
       const userData = {
         userName: user?.fullName,
         userEmail: user?.primaryEmailAddress?.emailAddress,
         credits: 5
       };
       
       console.log('Sending user data:', userData);

       const response = await fetch('/api/users', {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(userData),
       });

       console.log('Response status:', response.status);

       const responseText = await response.text();
       console.log('Raw response:', responseText);

       if (responseText) {
         const result = JSON.parse(responseText);
         console.log('Parsed response:', result);
         
         // Set user details from the API response
         if (result.success && result.data) {
           setUserDetails(result.data);
         }
       }
     } catch (error) {
       console.log('Error in CheckUserAuth:', error);
     }
   } 

   return (
    <div>
      <UserDetailsContext.Provider value={{ userDetails, setUserDetails }}>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <div className="flex-1 w-full">
            <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32">
              {children}
            </div>
          </div>
        </div>
      </UserDetailsContext.Provider>
    </div>
   )
}

export default Provider
