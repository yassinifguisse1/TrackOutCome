"use client"
import React from 'react'

import { CheckCircle } from 'lucide-react'
import { ThreeDCardDemo } from './ThreeDCardDemo'

const cards =[
  {icon:<CheckCircle className="w-12 h-12 mb-4 text-primary" />, title : "We Win When You Win" , description : "Think of us as your dedicated and innovative marketing partner, not just another vendor. We take your success personally and strive for lasting results."},
  {icon:<CheckCircle className="w-12 h-12 mb-4 text-primary" />,title : "We're Here in Poland, Ready to Help" , description :"Not a call center. Not outsourced. We're real, local, and ready to sit down and discuss your needs face-to-face if that's what you want."},
  {icon:<CheckCircle className="w-12 h-12 mb-4 text-primary" />,title : "Focused on What Matters" , description : "We’re experienced, trusted specialists. By working with industries we deeply understand, we confidently promise real, measurable, and sustainable results."}
]

const Different = () => {
  return (
    <section className="py-10 ">
      <div className="container px-4">
        <h2 className="text-3xl font-bold font-mono mb-8 text-center">
          &quot;OK... But What Makes Us Different?&quot;
        </h2>

        {/* Add flex layout for cards */}
      <div className=" grid md:grid-cols-3 gap-8 w-full">
          <ThreeDCardDemo items={cards} />
      </div>
      </div>
    </section>
  );
}

export default Different











 