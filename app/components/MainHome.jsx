'use client'

import React, { useContext, useEffect, useState } from 'react';

import axios from 'axios';
import { API_KEY } from '@/utils/apiKey';
import Image from 'next/image';

import Link from 'next/link';
import { CurrentNewContext } from '@/context/CurrentNewContext';

export default function MainHome() {
    const { setCurrentNew } = useContext(CurrentNewContext);

    const [topHeadlines, setTopHeadlines] = useState([])

    useEffect(() => {
        axios.get('https://newsapi.org/v2/top-headlines', {
            params: {
                country: 'us',
                apiKey: API_KEY,
            }
        })
            .then((rs) => {
                const firstResults = rs.data.articles.slice(0, 15);

                // Alguna de las noticias puede tener su contenido removido
                const firstResultsFilter = firstResults.filter((result) => {
                    return result.title != '[Removed]' && result.urlToImage;
                })

                console.log(firstResults);
                console.log(firstResultsFilter);
                setTopHeadlines(firstResultsFilter);
            })
            .catch(error => console.log(error));
    }, [])

    function truncateText(text, wordLimit) {
        if (!text) return 'Título no disponible'; // Si el título no existe
        const words = text.split(' '); // Dividir el texto en palabras
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + '...'; // Tomar solo las primeras 10 palabras y añadir "..."
        }
        return text; // Si el texto tiene menos de 10 palabras, mostrarlo completo
    }

    return (
        <main className="divide-y pb-8 md:px-64">
            {/* Noticia destacada 1 */}
            <article>
                <div className="px-4">
                    {/* Título y descripción */}
                    <Link href="/detail">
                        <h2 className="pt-3 text-3xl font-semibold cursor-pointer hover:text-blue-600" onClick={() => setCurrentNew(topHeadlines[0])}>{topHeadlines[0] && topHeadlines[0].title}</h2>
                    </Link>
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
                <Link href="/detail">
                    <h2 className="pt-1 text-xl font-semibold cursor-pointer hover:text-blue-600" onClick={() => setCurrentNew(topHeadlines[1])}>{topHeadlines[1] && topHeadlines[1].title}</h2>
                </Link>
                <h3 className="pt-1 text-sm font-normal text-justify">{topHeadlines[1] && topHeadlines[1].description}</h3>
            </article>

            {/* El resto de noticias destacadas */}
            <div className="flex flex-wrap">
                {/* Noticia destacada 3 */}
                <article className="w-1/2 p-2 h-48 md:h-64 flex flex-col items-center cursor-pointer" onClick={() => setCurrentNew(topHeadlines[2])}>
                    <div className="w-5/6 h-3/4 bg-red-200">
                        <Image
                            src={topHeadlines[2] && topHeadlines[2].urlToImage ? topHeadlines[2].urlToImage : '/images/default_image.png'}
                            width={500}
                            height={500}
                            alt='Imagen'
                            className='h-full w-full object-cover'
                        />
                    </div>

                    <Link href="/detail">
                        <h2 className="pt-1 text-sm font-medium text-center hover:text-blue-600">{truncateText(topHeadlines[2]?.title, 10)}</h2>
                    </Link>
                </article>

                <article className="w-1/2 p-2 h-48 md:h-64 flex flex-col items-center cursor-pointer" onClick={() => setCurrentNew(topHeadlines[3])}>
                    <div className="w-5/6 h-3/4 bg-red-200">
                        <Image
                            src={topHeadlines[3] && topHeadlines[3].urlToImage ? topHeadlines[3].urlToImage : '/images/default_image.png'}
                            width={500}
                            height={500}
                            alt='Imagen'
                            className='h-full w-full object-cover'
                        />
                    </div>

                    <Link href="/detail">
                        <h2 className="pt-1 text-sm font-medium text-center hover:text-blue-600">{truncateText(topHeadlines[3]?.title, 10)}</h2>
                    </Link>
                </article>

                <article className="w-1/2 p-2 h-48 md:h-64 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">
                        <Image
                            src={topHeadlines[4] && topHeadlines[4].urlToImage ? topHeadlines[4].urlToImage : '/images/default_image.png'}
                            width={500}
                            height={500}
                            alt='Imagen'
                            className='h-full w-full object-cover'
                        />
                    </div>
                    <Link href="/detail">
                        <h2 className="pt-1 text-sm font-medium text-center cursor-pointer hover:text-blue-600" onClick={() => setCurrentNew(topHeadlines[4])}>{truncateText(topHeadlines[4]?.title, 10)}</h2>
                    </Link>
                </article>

                <article className="w-1/2 p-2 h-48 md:h-64 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">
                        <Image
                            src={topHeadlines[5] && topHeadlines[5].urlToImage ? topHeadlines[5].urlToImage : '/images/default_image.png'}
                            width={500}
                            height={500}
                            alt='Imagen'
                            className='h-full w-full object-cover'
                        />
                    </div>

                    <Link href="/detail">
                    <h2 className="pt-1 text-sm font-medium text-center cursor-pointer hover:text-blue-600" onClick={() => setCurrentNew(topHeadlines[5])}>{truncateText(topHeadlines[5]?.title, 10)}</h2>
                    </Link>
                </article>

                <article className="w-1/2 p-2 h-48 md:h-64 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">
                        <Image
                            src={topHeadlines[6] && topHeadlines[6].urlToImage ? topHeadlines[6].urlToImage : '/images/default_image.png'}
                            width={500}
                            height={500}
                            alt='Imagen'
                            className='h-full w-full object-cover'
                        />
                    </div>

                    <Link href="/detail">
                    <h2 className="pt-1 text-sm font-medium text-center cursor-pointer hover:text-blue-600" onClick={() => setCurrentNew(topHeadlines[6])}>{truncateText(topHeadlines[6]?.title, 10)}</h2>
                    </Link>
                </article>

                <article className="w-1/2 p-2 h-48 md:h-64 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">
                        <Image
                            src={topHeadlines[7] && topHeadlines[7].urlToImage ? topHeadlines[7].urlToImage : '/images/default_image.png'}
                            width={500}
                            height={500}
                            alt='Imagen'
                            className='h-full w-full object-cover'
                        />
                    </div>

                    <Link href="/detail">
                    <h2 className="pt-1 text-sm font-medium text-center cursor-pointer hover:text-blue-600" onClick={() => setCurrentNew(topHeadlines[7])}>{truncateText(topHeadlines[7]?.title, 10)}</h2>
                    </Link>
                </article>

                <article className="w-1/2 p-2 h-48 md:h-64 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">
                        <Image
                            src={topHeadlines[8] && topHeadlines[8].urlToImage ? topHeadlines[8].urlToImage : '/images/default_image.png'}
                            width={500}
                            height={500}
                            alt='Imagen'
                            className='h-full w-full object-cover'
                        />
                    </div>

                    <Link href="/detail">
                    <h2 className="pt-1 text-sm font-medium text-center cursor-pointer hover:text-blue-600" onClick={() => setCurrentNew(topHeadlines[8])}>{truncateText(topHeadlines[8]?.title, 10)}</h2>
                    </Link>
                </article>

                <article className="w-1/2 p-2 h-48 md:h-64 flex flex-col items-center">
                    <div className="w-5/6 h-3/4 bg-red-200">
                        <Image
                            src={topHeadlines[9] && topHeadlines[9].urlToImage ? topHeadlines[9].urlToImage : '/images/default_image.png'}
                            width={500}
                            height={500}
                            alt='Imagen'
                            className='h-full w-full object-cover'
                        />
                    </div>

                    <Link href="/detail">
                    <h2 className="pt-1 text-sm font-medium text-center cursor-pointer hover:text-blue-600" onClick={() => setCurrentNew(topHeadlines[9])}>{truncateText(topHeadlines[9]?.title, 10)}</h2>
                    </Link>
                </article>
            </div>
        </main>
    )
}
