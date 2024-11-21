'use client'

import React, { useState, useEffect } from 'react'
import SearchIcon from '../components/svg/SearchIcon'

import dayjs from 'dayjs';

import { faker } from '@faker-js/faker';

// Función para formatear la fecha al estilo dd/MM/YYYY
const formatDate = (date) => {
    let fecha = dayjs(date);
    return fecha.format('dddd, MMMM D, YYYY');
};

let fakeNewsIdCounter = 1;

// Plantilla para la generación de datos falsos para la tabla
const templateFakeNew = () => ({
    id: fakeNewsIdCounter++,
    title: faker.lorem.sentence({ min: 10, max: 18 }),
    author: faker.person.fullName(),
    description: faker.lorem.sentence({ min: 18, max: 36 }),
    published_at: formatDate(dayjs(faker.date.past())),
    source: faker.lorem.sentence({ min: 1, max: 4 }),
});

// Función para generar datos falsos para la tabla
const createFakeNews = (numberOfFakeNews = 5) => Array.from({ length: numberOfFakeNews }, templateFakeNew);

export default function page() {
    // Simulación de registros
    const [allData, setAllData] = useState([]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;    // registros por página
    const maxPageButtons = 7;   // máximo número de botones visibles en la paginación

    useEffect(() => {
        // Generar n datos falsos
        const generatedFakeNews = createFakeNews(87);
        setAllData(generatedFakeNews);
    }, [])

    // Calcular los datos para la página actual
    const totalPages = Math.ceil(allData.length / itemsPerPage);

    // Función para calcular las páginas visibles
    const getVisiblePages = () => {
        let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
        let endPage = Math.min(startPage + maxPageButtons - 1, totalPages);

        // Ajustar el rango si el usuario se encuentra al final
        if (endPage - startPage + 1 < maxPageButtons) {
            startPage = Math.max(endPage - maxPageButtons + 1, 1);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);
    };

    const currentData = allData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Función para cambiar de página
    const goToPage = (page) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    return (
        <>
            {/* El tamaño mínimo del componente es el del viewport, sin considerar el header y el footer */}
            <div className='min-h-[calc(100vh-(56px+64px+128px))] p-4 md:px-48'>
                <form action="" className='w-full flex items-center border'>
                    <input type='search' placeholder='Search' className='w-full p-3 outline-none' />
                    <button id='searchBtn' type='submit' className='text-white border bg-blue-400 p-4'>
                        <SearchIcon />
                    </button>
                </form>

                <p className='text-xs mb-6'>Your search for &apos;<span className='font-medium'>apple</span>&apos; returned <span className='font-medium'>{allData.length}</span> results</p>

                <div className='space-y-4'>
                    {currentData.map((news, index) => (
                        <article key={index} className='p-4 border rounded-lg shadow hover:shadow-md transition'>
                            <h2 className='text-lg font-semibold text-blue-600 mb-1'>
                                {news.title}
                            </h2>

                            <p className="text-gray-500 text-xs mb-2">
                                {news.author}
                            </p>

                            <p className="text-gray-700 text-sm">
                                {news.description.substring(0, 100)}...
                            </p>

                            <p className="pt-3 text-gray-500 text-sm mb-2">
                                {news.published_at} &#124; <span className='text-xs text-gray-500'>{news.source}</span>
                            </p>
                        </article>
                    ))}
                </div>

                {/* Paginación */}
                <div className='flex justify-between items-center mt-6'>
                    {/* Botón "Anterior" */}
                    <button
                        className={`px-3 py-1 rounded text-blue-500 transition ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>

                    {/* Números de páginas */}
                    <div className='flex gap-1'>
                        {
                            getVisiblePages().map((page) => (
                                <button key={page}
                                    className={`px-1 py-1 rounded ${currentPage === page ?
                                        "text-blue-800 underline font-semibold hover:text-black" :
                                        "text-blue-500 hover:text-black"} transition`}
                                    onClick={() => goToPage(page)}
                                >
                                    {page}
                                </button>
                            ))
                        }
                    </div>

                    {/* Botón "Siguiente" */}
                    <button
                        className={`px-3 py-1 rounded text-blue-500 transition ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={currentPage === totalPages}
                    >
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}
