'use client'

import React, { useState } from 'react'
import NavCategories from './NavCategories'
import Burger from './svg/Burger'
import SearchIcon from './svg/SearchIcon';
import Link from 'next/link';

export default function Header() {
    const [showCategories, setShowCategories] = useState(true);

    return (
        <>
            <header className='h-16 flex justify-between bg-black text-white items-center'>
                <div className='flex items-center'>
                    <button className='h-full w-16 flex justify-center items-center'>
                        <Burger />
                    </button>

                    <div className='h-full flex items-center'>
                        <button className='h-full w-16 flex justify-center items-center'>
                            <SearchIcon />
                        </button>

                        <Link href="/" className='text-4xl font-extrabold'>The News</Link>
                    </div>
                </div>

                <NavCategories />

                <menu className='pr-4'>
                    <ul className='h-full flex items-center gap-6'>
                        <li>
                            <button className='h-full py-1 px-2'>Login</button>
                        </li>

                        <li>
                            <button className='h-full py-1 px-2 border bg-blue-600'>Subscribe</button>
                        </li>
                    </ul>
                </menu>
            </header>

            <header className='md:hidden py-3 flex flex-col text-white bg-black'>
                <div className='relative'>
                    <div className='absolute top-2 left-2'>
                        <Burger />
                    </div>

                    <h1 className='text-5xl w-full text-center font-extrabold'>The News</h1>
                </div>

                <p className='p-1 w-full text-center text-xs'>Wed, Nov 13, 2024</p>

                <div className='pt-1 flex justify-center gap-12'>
                    <button className='w-36 h-9 border rounded-md'>Login</button>
                    <button className='w-36 border rounded-md bg-blue-600'>Subscribe</button>
                </div>
            </header>

            <div className='md:hidden'>
                <NavCategories />
            </div>
        </>
    )
}
