'use client'

import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { API_KEY } from '@/utils/apiKey';
import Image from 'next/image';

export default function MainHome() {
    const [topHeadlines, setTopHeadlines] = useState([])

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: 'us',
                apiKey: API_KEY,
            }
        })
            .then((rs) => {
                console.log(rs.data.articles);
                setTopHeadlines(rs.data.articles);
            })
            .catch(error => console.log(error));
    }, [])

    return (
        <main className="divide-y pb-8">
            {/* Noticia destacada 1 */}
            <article>
                <div className="px-4">
                    {/* Título y descripción */}
                    <h2 className="pt-3 text-3xl font-semibold">{topHeadlines[0] && topHeadlines[0].title}</h2>
                    <h3 className="pt-1 text-lg font-normal text-justify">{topHeadlines[0] && topHeadlines[0].description}</h3>
                </div>

                <div className="mt-2 mb-4 w-full h-80 bg-red-300">
                    <Image
                        src={topHeadlines[0] && topHeadlines[0].urlToImage}
                        width={500}
                        height={500}
                        alt='Imagen'
                        className='h-full w-full object-cover'
                    />
                </div>
            </article>

            {/* Noticia destacada 2 */}
            <article className="px-4 pb-10">
                <h2 className="pt-1 text-xl font-semibold">Neque porro quisquam est qui dolorem ipsum quia dolor</h2>
                <h3 className="pt-1 text-sm font-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</h3>
            </article>

            {/* El resto de noticias destacadas */}
            <div className="flex flex-wrap">
                {/* Noticia destacada 3 */}
                <article className="w-1/2 p-2 h-48 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">

                    </div>
                    <h2 className="pt-1 text-sm font-medium text-center">Neque porro quisquam est qui dolorem ipsum quia dolor</h2>
                </article>

                <article className="w-1/2 p-2 h-48 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">

                    </div>
                    <h2 className="pt-1 text-sm font-medium text-center">Neque porro quisquam est qui dolorem ipsum quia dolor</h2>
                </article>

                <article className="w-1/2 p-2 h-48 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">

                    </div>
                    <h2 className="pt-1 text-sm font-medium text-center">Neque porro quisquam est qui dolorem ipsum quia dolor</h2>
                </article>

                <article className="w-1/2 p-2 h-48 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">

                    </div>
                    <h2 className="pt-1 text-sm font-medium text-center">Neque porro quisquam est qui dolorem ipsum quia dolor</h2>
                </article>

                <article className="w-1/2 p-2 h-48 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">

                    </div>
                    <h2 className="pt-1 text-sm font-medium text-center">Neque porro quisquam est qui dolorem ipsum quia dolor</h2>
                </article>

                <article className="w-1/2 p-2 h-48 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">

                    </div>
                    <h2 className="pt-1 text-sm font-medium text-center">Neque porro quisquam est qui dolorem ipsum quia dolor</h2>
                </article>

                <article className="w-1/2 p-2 h-48 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">

                    </div>
                    <h2 className="pt-1 text-sm font-medium text-center">Neque porro quisquam est qui dolorem ipsum quia dolor</h2>
                </article>

                <article className="w-1/2 p-2 h-48 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">

                    </div>
                    <h2 className="pt-1 text-sm font-medium text-center">Neque porro quisquam est qui dolorem ipsum quia dolor</h2>
                </article>
            </div>
        </main>
    )
}
