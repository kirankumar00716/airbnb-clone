import React from 'react'
import Image from 'next/image';

// const data = [
//     {
//       "img": "https://links.papareact.com/41m",
//       "location": "London",
//       "distance": "45-minute drive"
//     },
//     {
//       "img": "https://links.papareact.com/kji",
//       "location": "Manchester",
//       "distance": "4.5-hour drive"
//     },
//     {
//       "img": "https://links.papareact.com/2k3",
//       "location": "Liverpool",
//       "distance": "4.5-hour drive"
//     },
//     {
//       "img": "https://links.papareact.com/kji",
//       "location": "York",
//       "distance": "4-hour drive"
//     },
//     {
//       "img": "https://links.papareact.com/2k3",
//       "location": "Cardiff",
//       "distance": "45-minute drive"
//     },
//     {
//       "img": "https://links.papareact.com/kji",
//       "location": "Birkenhead",
//       "distance": "4.5-hour drive"
//     },
//     {
//       "img": "https://links.papareact.com/kji",
//       "location": "Newquay",
//       "distance": "6-hour drive"
//     },
//     {
//       "img": "https://links.papareact.com/41m",
//       "location": "Hove",
//       "distance": "2-hour drive"
//     }
//   ];
  

export default function SmallCard({img,location,distance}) {
  return (
              <div key={location} className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
                <div className='relative h-16 w-16'>
                <Image 
                className='rounded-lg'
                src={img}
                layout='fill'
                objectFit='cover'
                alt='images'
                />
                </div>
                <div>
                    <h2>{location}</h2>
                    <h3 className='text-gray-500'>{distance}</h3>
                </div>
              </div>
 
  )
}
