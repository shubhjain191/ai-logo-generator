import React from 'react'
import HeadingDescription from './HeadingDescription'
import Lookup from '@/app/_data/Lookup'

const templatePrompts = [
  {
    title: "Modern & Minimal",
    prompt: "Create minimalist logo with clean lines"
  },
  {
    title: "Bold & Playful",
    prompt: "Design playful logo using bright colors"
  },
  {
    title: "Elegant & Luxurious",
    prompt: "Generate luxury logo with gold accents"
  },
  {
    title: "Nature-Inspired",
    prompt: "Make organic logo with natural elements"
  },
  {
    title: "Tech & Innovation",
    prompt: "Build modern tech-focused logo design"
  },
  {
    title: "Classic & Timeless",
    prompt: "Develop classic logo with timeless appeal"
  },
  {
    title: "Artistic & Creative",
    prompt: "Draw artistic logo with creative flair"
  },
  {
    title: "Corporate & Professional",
    prompt: "Make professional corporate brand mark"
  },
  {
    title: "Retro & Vintage",
    prompt: "Create vintage-style retro emblem"
  },
  {
    title: "3D & Dimensional",
    prompt: "Design 3D logo with depth effect"
  },
  {
    title: "Gradient & Colorful",
    prompt: "Generate colorful gradient-based logo"
  },
  {
    title: "Mascot & Character",
    prompt: "Create friendly mascot character logo"
  }
]

const LogoIdea = ({onHandleInputChange, formData}) => {
  return (
    <div className="space-y-8">
      <HeadingDescription
        title={Lookup.LogoIdeaTitle}
        description={Lookup.LogoIdeaDesc}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {templatePrompts.map((template, index) => (
          <div
            key={index}
            onClick={() => onHandleInputChange(template.prompt)}
            className={`p-4 border rounded-xl cursor-pointer transition-all duration-200
              ${formData?.idea === template.prompt 
                ? 'border-blue-500 bg-blue-50/50 shadow-sm' 
                : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'}`}
          >
            <h3 className="font-medium text-gray-900 mb-1">
              {template.title}
            </h3>
            <p className="text-sm text-gray-600">
              {template.prompt}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LogoIdea
