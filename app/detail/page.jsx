'use client'

import React, { useState, useEffect, useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image'

import dayjs from 'dayjs';

import { faker } from '@faker-js/faker';
import { CurrentNewContext } from '@/context/CurrentNewContext';

// Función para formatear la fecha al estilo dd/MM/YYYY
const formatDate = (date) => {
    let fecha = dayjs(date);
    return fecha.format('dddd, MMMM D, YYYY');
};

let fakeNewsIdCounter = 1;

// Plantilla para la generación de datos falsos para la tabla
const templateFakeRelatedNews = () => ({
    id: fakeNewsIdCounter++,
    title: faker.lorem.sentence({ min: 10, max: 18 }),
    author: faker.person.fullName(),
    description: faker.lorem.sentence({ min: 18, max: 36 }),
    content: faker.lorem.sentence({ min: 147, max: 408 }),
    published_at: formatDate(dayjs(faker.date.past())),
    source: faker.lorem.sentence({ min: 1, max: 4 }),
    image: faker.image.urlLoremFlickr()
});

// Función para generar datos falsos para la tabla
const createFakeRelatedNews = (numberOfFakeRelatedNews = 3) => Array.from({ length: numberOfFakeRelatedNews }, templateFakeRelatedNews);

export default function page() {
    const [fakeRelatedNews, setFakeRelatedNews] = useState([]);

    // Consumimos el cambio hecho a nivel global
    const { currentNew } = useContext(CurrentNewContext);

    useEffect(() => {
        // Generar n datos falsos
        const generatedFakeRelatedNews = createFakeRelatedNews();
        setFakeRelatedNews(generatedFakeRelatedNews);

        console.log("state changed in component", currentNew);
    }, [currentNew]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % fakeRelatedNews.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + fakeRelatedNews.length) % fakeRelatedNews.length);
    };

    return (
        <div className='min-h-[calc(100vh-(56px+64px+128px))] pb-4 md:px-36 md:flex md:flex-col md:items-center'>
            <div className='mt-5 w-screen md:w-1/2 h-80'>
                <Image
                    src={currentNew && currentNew.urlToImage ? currentNew.urlToImage : '/images/default_image.png'}
                    width={500}
                    height={500}
                    alt='Image'
                    className='h-full w-full object-cover'
                />
            </div>

            <div className='px-6 md:w-3/4'>
                {/* Descripción */}
                <p className='text-sm text-justify'>
                    {currentNew && currentNew.description ? currentNew.description : 'No description'}
                </p>

                {/* Autor */}
                <p className='mt-2 mb-4 text-xs'>{currentNew && currentNew.author ? currentNew.author : 'No author'}</p>

                {/* Title */}
                <h2 className='text-3xl font-semibold mb-3'>
                    {currentNew && currentNew.title ? currentNew.title : 'No title'}
                </h2>

                {/* Desarrollo de la noticia */}
                <p className='text-justify'>
                    {currentNew && currentNew.content ? currentNew.content : 'No content'}
                </p>
            </div>

            {/* Carrusel */}
            {fakeRelatedNews.length > 0 && (
                <div className="md:hidden mt-8 flex flex-col items-center">
                    <h2 className="text-xl font-medium text-gray-800 mb-4">See also</h2>

                    <div className="relative w-3/4 overflow-hidden">
                        {/* Noticias */}
                        <div
                            className="flex transition-transform duration-500"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {fakeRelatedNews.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="flex-none w-full px-4"
                                >
                                    <Link href={`/detail/${item.id}`}>
                                        <div className="bg-white rounded-lg shadow p-4">
                                            <img
                                                src={item.image}
                                                alt={item.title}
                                                className="w-full h-40 object-cover rounded-lg"
                                            />
                                            <h3 className="mt-2 text-sm font-semibold text-gray-800">
                                                {item.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {/* Controles */}
                        <button
                            onClick={prevSlide}
                            className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700"
                        >
                            ◀
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow hover:bg-gray-700"
                        >
                            ▶
                        </button>
                    </div>
                </div>
            )}

            {fakeRelatedNews.length > 0 && (
                <div className="hidden mt-8 md:flex md:flex-col md:items-center">
                    <h2 className="text-xl font-medium text-gray-800 mb-4">See also</h2>

                    <div className="relative w-5/6 overflow-hidden">
                        {/* Noticias */}
                        <div
                            className="flex gap-3"
                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                        >
                            {fakeRelatedNews.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-1/3"
                                >
                                    <div className="bg-white rounded-lg shadow p-4">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-40 object-cover rounded-lg"
                                        />
                                        <h3 className="mt-2 text-sm font-semibold text-gray-800">
                                            {item.title}
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
