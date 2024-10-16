"use client"

import React from 'react'
import { Check } from 'lucide-react';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import UnderHero from './UnderHero';


const CardHoverEffect = () => {
  return (
    <div className=" md:px-8 -mt-[106px] lg:-mt-[90px] rounded-b-5xl container mx-auto w-full">
      <HoverEffect items={projects} />
      <UnderHero />
    </div>
  );
}

export default CardHoverEffect



export const projects = [
  {
    icon:  <Check className="h-6 w-6" />,
    description:
      "Design",

  },
  {
    icon:  <Check className="h-6 w-6" />,
    description:
      "Devlopments",

  },
  {
    icon:  <Check className="h-6 w-6" />,
    description:
      "Markiting",

  },
  {
    icon:  <Check className="h-6 w-6" />,
    description:
      "Strategy",

  }
];
