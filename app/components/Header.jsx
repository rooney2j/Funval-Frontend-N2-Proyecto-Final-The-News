'use client'

import React, { useState } from 'react'
import NavCategories from './NavCategories'
import Burger from './svg/Burger'
import SearchIcon from './svg/SearchIcon';
import Link from 'next/link';
import CloseIcon from './svg/CloseIcon';
import DropdownCloseIcon from './svg/DropdownCloseIcon';
import DropdownOpenIcon from './svg/DropdownOpenIcon';
import Drawer from './Drawer';

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);

    return (
        <>
            <header className='hidden md:flex h-16 justify-between bg-black text-white items-center'>
                <div className='flex items-center'>
                    <button className='h-full w-16 flex justify-center items-center'>
                        <Burger />
                    </button>

                    <div className='h-full flex items-center'>
                        <button className='h-full w-16 flex justify-center items-center'>
                            <SearchIcon />
                        </button>

                        <Link href="/" className='min-w-40 text-4xl font-extrabold'>The News</Link>
                    </div>
                </div>

                <div className='overflow-auto no-scrollbar overscroll-auto pointer-events-auto transition-opacity duration-700 ease-in-out opacity-100'>
                    <NavCategories />
                </div>

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

            {/* <header className='md:hidden py-3 flex flex-col text-white bg-black'>
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
            </div> */}

            <header className='GlobalNav md:hidden'>
                <div id='new-nav' className='NewGlobalNav'>
                    <div className='css-rgzt88'>
                        <div id='top-nav-container' className='flex h-14 m-0 bg-black z-10 relative'>
                            <div className='css-1smju7m flex w-14 z-10'>
                                <button
                                    className='min-h-14 min-w-14 text-white flex justify-center items-center'
                                    onClick={() => setDrawerOpen(!drawerOpen)}
                                >
                                    {drawerOpen ? (
                                        <CloseIcon />
                                    ) : (
                                        <Burger />
                                    )
                                    }
                                </button>
                            </div>

                            <div className='absolute w-full h-full flex justify-center items-center'>
                                <Link href="/" className='text-4xl font-extrabold text-white'>The News</Link>
                            </div>
                        </div>

                        {/* Login, Subscribe y NavCategories */}
                        <div className='css-gtx15o flex flex-col'>
                            {/* Login y Subscribe */}
                            <div className='css-vsx5i0 h-16 flex items-center justify-center bg-black text-white'>
                                <div className='w-5/6 h-3/4 flex justify-center gap-3'>
                                    <button className='h-full w-36 py-1 px-2 border rounded-md'>Login</button>
                                    <button className='h-full w-36 py-1 px-2 border bg-blue-600 rounded-md'>Subscribe</button>
                                </div>
                            </div>

                            {/* Categories */}
                            <div className={drawerOpen ? 'hidden' :'h-10'}>
                                <NavCategories />
                            </div>
                        </div>
                    </div>

                    <Drawer
                        drawerOpen={drawerOpen}
                        setDrawerOpen={setDrawerOpen}
                    />
                </div>
            </header>
        </>
    )
}
