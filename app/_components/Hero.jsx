import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Star, CheckCircle2 } from 'lucide-react'
import HeroImage from '/public/image.png'

const Hero = () => {
  const features = [
    "Instant AI Generation",
    "Full Commercial Rights",
    "High Resolution Exports",
    "Multiple File Formats",
    "24/7 Customer Support"
  ]

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-white -z-10" />
      
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-32 py-4 sm:py-6 md:py-8 lg:py-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16">
          {/* Left Column - Content */}
          <div className="flex flex-col justify-center">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] sm:leading-[1.2]">
              Create stunning{' '}
              <span className="text-blue-600">
                logos with AI
              </span>
              {' '}in seconds
            </h1>

            <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              Transform your brand identity with our AI-powered logo generator. 
              Get professional, unique, and customizable logos tailored to your business.
            </p>

            {/* Feature List */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-6">
              <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 h-[52px] px-6 rounded-xl border border-gray-200 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 
                    text-gray-800 placeholder:text-gray-400
                    text-base"
                />
                <Button className="
                  w-full sm:w-auto
                  h-[52px]
                  px-6
                  text-base font-medium
                  bg-blue-600 hover:bg-blue-700
                  text-white
                  rounded-xl
                  transform transition-all duration-300
                  hover:scale-105 active:scale-95
                  shadow-lg hover:shadow-xl
                  flex items-center justify-center
                  min-w-[160px]
                ">
                  Get Started Free
                </Button>
              </div>
              <p className="mt-2 text-sm text-gray-500">
                No credit card required • Free 14-day trial
              </p>
            </div>
          </div>

          {/* Right Column - Preview */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-2xl mx-auto">
              {/* Preview Window */}
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                <div className="bg-gray-50 border-b border-gray-100 p-4 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                </div>
                <div className="aspect-[16/10]">
                  <Image
                    src={HeroImage}
                    alt="AI Logo Generator Interface"
                    width={1200}
                    height={800}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
