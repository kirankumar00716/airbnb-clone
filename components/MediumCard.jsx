import React from 'react'
import Image from 'next/image'

// const data2=[
//     {
//     "img": "https://links.papareact.com/2io",
//     "title": "Outdoor getaways"
//     },
//     {
//     "img": "https://links.papareact.com/q7j",
//     "title": "Unique stays"
//     },
//     {
//     "img": "https://links.papareact.com/s03",
//     "title": "Entire homes"
//     },
//     {
//     "img": "https://links.papareact.com/8ix",
//     "title": "Pet allowed"
//     }
//     ]

export default function MediumCard({img,title}) {
  return (
    <div>
            <div key={img} className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out'>
                <div className='relative h-80 w-80'>
                    <Image
                    src={img}
                    layout='fill'
                    alt='places images'
                    className='rounded-xl'
                    />
                </div>
                    <h3 className='text-2xl mt-3'>{title}</h3>
            </div>

    </div>
  )
}
