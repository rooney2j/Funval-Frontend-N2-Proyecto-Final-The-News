// Contexto para la noticia actual que se mostrará en el detalle

'use client'

import { createContext, useState } from "react";

export const RelatedNewsContext = createContext();

export function RelatedNewsProvider({ children }) {

    const [relatedNews, setRelatedNews] = useState([]);

    return (
        <RelatedNewsContext.Provider value={{ relatedNews, setRelatedNews }}>
            {children}
        </RelatedNewsContext.Provider>
    )

}