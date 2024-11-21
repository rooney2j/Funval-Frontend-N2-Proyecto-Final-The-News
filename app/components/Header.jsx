'use client'

import React, { useState } from 'react'
import NavCategories from './NavCategories'
import Burger from './svg/Burger'
import SearchIcon from './svg/SearchIcon';
import Link from 'next/link';
import CloseIcon from './svg/CloseIcon';
import Drawer from './Drawer';

import { useRouter } from 'next/navigation';

export default function Header() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [desktopSearchBarOpen, setDesktopSearchBarOpen] = useState(false);

    // para la búsqueda
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim() != '') {
            router.push(`/search?query=${encodeURIComponent(query)}`);
            setDesktopSearchBarOpen(false);
        }
    }

    return (
        <>
            {/* Header para la versión Desktop */}
            <header className='hidden md:flex h-16 justify-between bg-black text-white items-center'>
                <div className='flex items-center relative'>
                    <button className='h-full w-16 flex justify-center items-center text-black'
                        onClick={() => setDrawerOpen(!drawerOpen)} disabled
                    >
                        <Burger />
                    </button>

                    <div className='h-full flex items-center'>
                        <button className='h-full w-16 flex justify-center items-center'
                            onClick={() => setDesktopSearchBarOpen(true)}
                        >
                            <SearchIcon />
                        </button>

                        <Link href="/" className='min-w-40 text-4xl font-extrabold'>The News</Link>
                    </div>

                    {
                        desktopSearchBarOpen ? (
                            <div className='absolute top-0 left-0 z-20 flex items-center bg-black'>
                                <button className='h-full w-16 flex justify-center items-center'
                                    onClick={() => setDesktopSearchBarOpen(false)}
                                >
                                    <CloseIcon />
                                </button>

                                <form onSubmit={handleSearch} className='w-full bg-slate-600 flex items-center rounded-lg'>
                                    <input type="text"
                                        className='h-full w-full bg-slate-600 outline-none text-white font-medium p-3 rounded-e-lg'
                                        placeholder='Search term'
                                        onChange={(e) => {
                                            setQuery(e.target.value)
                                        }}
                                    />

                                    <button className='text-white px-2'>
                                        <SearchIcon />
                                    </button>
                                </form>
                            </div>
                        ) : null
                    }
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

            {/* Header para la versión mobile */}
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
                            <div className={drawerOpen ? 'hidden' : 'h-10'}>
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
