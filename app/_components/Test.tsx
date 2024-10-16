import React from 'react'

import { MeteorsDemo } from '../../app/_components/MeteorsDemo';
import { BarChart, Diamond, Rocket } from 'lucide-react';



const cards =[
    {icon: <Rocket className="mr-2" />,title : "Premium Ads, Websites & Designs" , description : "We deliver ads, websites, and designs that actually convert."},
    {icon: <BarChart className="mr-2" /> ,title : "Managed Ad Campaigns" , description :"We manage your Google, Instagram, and Facebook Ads so they bring you qualified leads, not just impressions."},
    {icon: <Diamond className="mr-2" /> ,title : "Top Quality, Affordable Prices" , description : "All of this at top quality, affordable prices, because effective marketing shouldn't break the bank."}
]
const Test = () => {
  return (
          <div>
              <MeteorsDemo items={cards}/>
          </div> 
  )
}

export default Test