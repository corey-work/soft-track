import React from 'react'
import { pricingCards } from '../constants'

const PriceCard = () => {
  return (
    <div className='w-full p-12'>
      <div className='max-w-[1340px] w-full mx-auto grid lg:grid-cols-3 place-items-center gap-5'>
        {pricingCards.map((card) => (
            <div className={`max-w-[400px] w-full rounded-lg flex flex-col items-center justify-center border ${card.gradient} ${card.textColor}`}>
                <h2 className='font-semibold py-3 text-xl text-gray-800'>{card.title}</h2>
                <h1 className='font-bold text-3xl text-black'>{card.price}</h1>
                <ul key={card.id} className='mt-4 w-full px-9 space-y-2'>
                    {card.features.map((feature, i) => (
                        <li className="text-xl border-b w-full border-gray-500 py-4 mb-4 font-semibold tracking-wide flex items-center justify-center" key={i}>
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
        ))}
      </div>
    </div>
  )
}

export default PriceCard
