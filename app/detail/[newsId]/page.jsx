'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image'

import dayjs from 'dayjs';

import { faker } from '@faker-js/faker';
import { useRouter, useSearchParams } from 'next/navigation';

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

    useEffect(() => {
        // Generar n datos falsos
        const generatedFakeRelatedNews = createFakeRelatedNews();
        setFakeRelatedNews(generatedFakeRelatedNews);
    }, [])

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % fakeRelatedNews.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + fakeRelatedNews.length) % fakeRelatedNews.length);
    };

    return (
        <div className='min-h-[calc(100vh-(56px+64px+128px))] pb-4'>
            <div className='mt-5 w-screen h-80'>
                <Image
                    src='/images/default_image.png'
                    width={500}
                    height={500}
                    alt='Imagen'
                    className='h-full w-full object-cover'
                />
            </div>

            <div className='px-6'>
                {/* Descripción */}
                <p className='text-sm text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum vel accusamus. Assumenda fugit tempora iusto ullam debitis veritatis cupiditate architecto commodi dicta doloribus unde facere voluptatem, corporis dolores atque aliquid sequi cumque! Perferendis cupiditate optio voluptatibus. Facere, sit! Quo id mollitia voluptates, neque adipisci totam ipsa voluptas in assumenda?
                </p>

                {/* Autor */}
                <p className='mt-2 mb-4 uppercase text-xs'>Ronnie Santoyo</p>

                {/* Title */}
                <h2 className='text-3xl font-semibold mb-3'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusantium tenetur exercitationem debitis facilis. Illum a exercitationem aut minus aliquam magni quis perspiciatis eaque velit.
                </h2>

                {/* Desarrollo de la noticia */}
                <p className='text-justify'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati rem nobis voluptas, eius possimus nemo necessitatibus. Deserunt inventore hic recusandae repellat ad optio ipsa! Minima odit corrupti, illum nihil repellat et provident dolores culpa aut itaque ratione atque, earum pariatur rerum recusandae accusamus minus numquam deserunt id mollitia quidem! Aut libero reprehenderit magnam deleniti ullam ea esse eaque debitis quas ad saepe laudantium harum at suscipit id animi unde exercitationem a rem mollitia tenetur iste inventore, quibusdam quae! Atque et modi, cumque aliquam velit vero nulla consectetur quis commodi dolorum quisquam, quos excepturi dicta ratione veritatis voluptate aperiam, ipsam vel. Dolorem tempore ratione illum ea aut unde temporibus rerum debitis ipsam optio velit accusamus error, vel placeat minus nam, ducimus fugit? Unde, laborum veniam molestias non debitis rem vitae quas quod earum eum expedita repellendus, autem aperiam adipisci ducimus ad mollitia consequuntur fuga harum labore aspernatur tempore doloribus natus necessitatibus! Fugit inventore unde rerum velit similique illum dolor sit recusandae quaerat commodi libero corrupti, assumenda officia quis fuga quisquam amet! Odit temporibus, ullam praesentium illum, fugiat ipsa recusandae ad eaque similique, et asperiores vero debitis maiores vel deleniti qui adipisci. Beatae quidem sed placeat quis fugiat praesentium, consequatur ea molestiae delectus a, voluptates commodi nobis dolorem, harum maxime eaque libero nulla modi doloremque error? Exercitationem ratione assumenda blanditiis porro quasi odit, nemo earum voluptas nobis aperiam numquam? Sed amet consectetur doloribus esse rerum, provident accusantium ipsum dolor itaque, vero dicta veritatis odio qui quis? Unde temporibus tempora dolores. Eum quo ad beatae voluptatibus. Unde sequi facilis fugit, suscipit vero laudantium, mollitia culpa recusandae necessitatibus, debitis quaerat illum dolorem modi sint odio sapiente. Voluptate animi dolores culpa dolorum repellat sequi porro nesciunt accusamus in, non cum dignissimos odio. Rerum exercitationem, fugiat amet, deleniti velit distinctio voluptatum, ex aut nobis officia necessitatibus sint asperiores eveniet provident obcaecati blanditiis praesentium eius ut laudantium itaque inventore libero. Sunt eos incidunt repellendus nemo ad cum, asperiores ut vero beatae ullam sit architecto necessitatibus! Deserunt sint inventore repellendus voluptates eligendi. Ad harum cumque mollitia molestiae veniam, nesciunt animi sunt inventore ducimus porro laboriosam optio voluptas magnam magni neque, at error accusamus natus? Laudantium, in aspernatur. Ducimus libero, facere natus quam exercitationem earum vel architecto qui error aperiam corporis blanditiis hic tempore nesciunt esse doloremque placeat deserunt porro dolore! Repudiandae ad laborum eveniet eius libero esse provident. Est assumenda illo quam iste neque quo nihil totam consequuntur quos, aliquam maxime accusantium repellat porro suscipit veritatis delectus. Maxime mollitia placeat accusantium minima quasi est iusto sunt non, dignissimos quod quo tempora, corrupti ipsam! Ad consectetur, doloremque vitae ullam cumque at iure ipsum cupiditate minus omnis incidunt sapiente quasi ipsam laboriosam! A quos voluptatibus enim odit beatae sunt nisi quas repudiandae reprehenderit quibusdam nemo obcaecati earum facere ipsa sed officiis, eligendi labore illo assumenda animi fugiat ea. Omnis suscipit expedita voluptatibus ipsam esse, sunt eius fugit est aperiam debitis autem explicabo at, id odit distinctio ab doloribus facere sapiente optio iusto amet corporis iste necessitatibus? Similique temporibus porro est.
                </p>
            </div>

            {/* Carrusel */}
            {fakeRelatedNews.length > 0 && (
                <div className="mt-8 flex flex-col items-center">
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
        </div>
    )
}
