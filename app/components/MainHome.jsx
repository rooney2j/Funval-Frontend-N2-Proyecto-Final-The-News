import React from 'react'

export default function MainHome() {
    return (
        <main className="divide-y pb-8">
            {/* Noticia destacada 1 */}
            <article>
                <div className="px-4">
                    {/* Título y descripción */}
                    <h2 className="pt-3 text-3xl font-semibold">Neque porro quisquam est qui dolorem ipsum quia dolor</h2>
                    <h3 className="pt-1 text-lg font-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</h3>
                </div>

                <div className="mt-2 mb-4 w-full h-80 bg-red-300">

                </div>
            </article>

            {/* Noticia destacada 2 */}
            <article className="px-4 pb-10">
                <h2 className="pt-1 text-xl font-semibold">Neque porro quisquam est qui dolorem ipsum quia dolor</h2>
                <h3 className="pt-1 text-sm font-normal text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim</h3>
            </article>

            {/* El resto de noticias destacadas */}
            <div className="flex flex-wrap">
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
