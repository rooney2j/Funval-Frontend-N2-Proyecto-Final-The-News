'use client'

import React, { useEffect } from 'react'

import categories from '@/data/categories'

export default function NavCategories() {
  useEffect(() => {
    console.log(categories)
  }, [])
  
  return (
    <nav className='overflow-x-scroll no-scrollbar'>
        <ul className='py-3 flex justify-evenly gap-5 text-xs md:text-sm'>
          {
            categories.map((category, index) => (
              <li key={index} className='capitalize font-semibold md:font-normal cursor-pointer'>{category}</li>
            ))
          }
        </ul>
    </nav>
  )
}
