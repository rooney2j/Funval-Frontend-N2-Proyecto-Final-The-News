'use client'

import React, { useEffect } from 'react'

import { useRouter } from 'next/navigation';

import categories from '@/data/categories'

export default function NavCategories() {
  // para la búsqueda
  const router = useRouter();

  // Maneja el clic en una categoría
  const handleCategoryClick = (category) => {
    // Redirige a la página /search con el parámetro correspondiente
    router.push(`/search?query=${encodeURIComponent(category)}`);
  };


  useEffect(() => {
    console.log(categories)
  }, [])

  return (
    <nav className='w-full h-full'>
      <ul className='py-3 flex justify-evenly md:gap-5 text-xs md:text-sm'>
        {
          categories.map((category, index) => (
            <li key={index} className='capitalize font-semibold md:font-normal cursor-pointer'
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))
        }
      </ul>
    </nav>
  )
}
