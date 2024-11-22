'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link';

import DropdownCloseIcon from './svg/DropdownCloseIcon';
import DropdownOpenIcon from './svg/DropdownOpenIcon';
import SearchIcon from './svg/SearchIcon';

import categories from '@/data/categories';
import { useRouter } from 'next/navigation';

export default function Drawer({ drawerOpen, setDrawerOpen }) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  // para la búsqueda
  const [query, setQuery] = useState('');
  const router = useRouter();

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() != '') {
      router.push(`/search?query=${encodeURIComponent(query)}`);
      setDrawerOpen(false);
    }
  }

  // Maneja el clic en una categoría
  const handleCategoryClick = (category) => {
    // Redirige a la página /search con el parámetro correspondiente
    router.push(`/search?query=${encodeURIComponent(category)}`);
    setDrawerOpen(false);
  };

  return (
    <>
      {drawerOpen ? (
        <div className='css-zxpkw8'>
          <menu id='hamburger-menu' className='h-[calc(100vh-(56px+64px))] bg-black'>
            <div>
              <div className='px-4 py-4'>
                <form onSubmit={handleSearch} className='w-full bg-slate-600 flex items-center rounded-lg'>
                  <div className='text-white pl-2'>
                    <SearchIcon />
                  </div>
                  <input type="text"
                    className='h-full w-full bg-slate-600 outline-none text-white font-medium p-3 rounded-e-lg'
                    placeholder='Search term'
                    onChange={(e) => {
                      setQuery(e.target.value)
                    }}
                  />
                </form>
              </div>
            </div>

            <button
              className='p-4'
              onClick={() => setDrawerOpen(false)}
            >
              <Link href="/" className='text-white text-sm'>Home</Link>
            </button>

            <button
              className='px-4 w-full flex justify-between items-center text-white text-sm'
              onClick={toggleDropdown}
            >
              <span>Categories</span>

              {isOpenDropdown ? (
                <DropdownCloseIcon />
              ) : (
                <DropdownOpenIcon />
              )
              }
            </button>

            {isOpenDropdown ? (
              <ul className='py-3 flex flex-col gap-3 text-sm'>
                {
                  categories.map((category, index) => (
                    <li key={index} className='px-8 capitalize cursor-pointer text-white'
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </li>
                  ))
                }
              </ul>
            ) : null
            }
          </menu>
        </div>
      ) : null
      }
    </>
  )
}
