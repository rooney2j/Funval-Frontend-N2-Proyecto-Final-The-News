// Contexto para la noticia actual que se mostrará en el detalle

'use client'

import { createContext, useState } from "react";

export const CurrentNewContext = createContext();

export function CurrentNewProvider({ children }) {

    const [currentNew, setCurrentNew] = useState({});

    return (
        <CurrentNewContext.Provider value={{ currentNew, setCurrentNew }}>
            {children}
        </CurrentNewContext.Provider>
    )

}