'use client'

import React, { useState } from 'react'
import Link from 'next/link';

import DropdownCloseIcon from './svg/DropdownCloseIcon';
import DropdownOpenIcon from './svg/DropdownOpenIcon';
import SearchIcon from './svg/SearchIcon';

import categories from '@/data/categories';

export default function Drawer({ drawerOpen }) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  return (
    <>
      {drawerOpen ? (
        <div className='css-zxpkw8'>
          <menu id='hamburger-menu' className='h-[calc(100vh-(56px+64px))] bg-black'>
            <div>
              <div className='px-4 py-4'>
                <form action="" className='w-full bg-slate-600 flex items-center rounded-lg'>
                  <div className='text-white pl-2'>
                    <SearchIcon />
                  </div>
                  <input type="text" className='h-full w-full bg-slate-600 outline-none text-white font-medium p-3 rounded-e-lg' />
                </form>
              </div>
            </div>

            <div className='p-4'>
              <Link href="/" className='text-white text-sm'>Home</Link>
            </div>

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
                    <li key={index} className='px-8 capitalize cursor-pointer text-white'>{category}</li>
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
