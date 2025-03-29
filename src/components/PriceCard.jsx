import React from 'react'
import { pricingCards } from '../constants'

const PriceCard = () => {
  return (
    <div className='w-full p-12'>
      <div className='max-w-[1340px] w-full mx-auto grid lg:grid-cols-3 place-items-center gap-5'>
        {pricingCards.map((card) => (
          <div className={`max-w-[400px] w-full rounded-lg flex flex-col items-center justify-center border border-gray-400 ${card.gradient} ${card.textColor} ${card.headingColor}`}>
                <h2 className='font-semibold py-3 text-xl'>{card.title}</h2>
                <h1 className='font-bold text-xl'>{card.price} / Month</h1>
                <ul key={card.id} className='mt-4 w-full px-9 space-y-2'>
                    {card.features.map((feature, i) => (
                        <li className="text-sm border-b w-full border-gray-500 py-2 mb-4 font-semibold tracking-wide flex items-center justify-center" key={i}>
                            {feature}
                        </li>
                    ))}
                </ul>
                <button className='bg-blue-400 px-4 py-2 mb-4 font-semibold rounded-lg text-sm hover:bg-blue-800 cursor-pointer transition-all ease-in'>Order Now</button>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PriceCard
