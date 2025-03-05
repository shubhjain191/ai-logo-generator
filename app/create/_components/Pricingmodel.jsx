import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'
import { Check, Star } from 'lucide-react'

const Pricingmodel = ({ onHandleInputChange, formData }) => {
  return (
    <div className="space-y-8">
      <HeadingDescription 
        title="Choose Your Plan"
        description="Select the perfect plan for your logo needs"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Lookup.pricingOptions.map((plan, index) => (
          <div
            key={index}
            onClick={() => onHandleInputChange(plan.title)}
            className={`relative bg-white rounded-xl border transition-all duration-300 overflow-hidden
              cursor-pointer hover:shadow-lg
              ${formData?.plan === plan.title 
                ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-lg scale-[1.02]' 
                : 'border-gray-200 hover:border-gray-300'}`}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <div className="absolute top-4 right-4 flex items-center gap-1 bg-blue-100 
                text-blue-600 px-2 py-1 rounded-full text-xs font-medium">
                <Star className="w-3 h-3 fill-current" />
                Popular
              </div>
            )}

            {/* Plan Header */}
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900">
                {plan.title}
              </h3>
              <div className="mt-2 flex items-baseline">
                <span className="text-3xl font-bold text-gray-900">
                  {plan.price}
                </span>
                {plan.price !== '$0' && (
                  <span className="text-gray-500 text-sm ml-1">/month</span>
                )}
              </div>
              <p className="mt-2 text-sm text-gray-500">
                {plan.desc}
              </p>
            </div>

            {/* Features List */}
            <div className="p-6 space-y-4">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="p-6 pt-0">
              <button
                className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200
                  ${plan.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
              >
                {plan.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pricingmodel
