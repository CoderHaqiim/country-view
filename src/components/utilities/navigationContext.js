"use client"
import { createContext, useState } from "react"

export const NavigationContext = createContext()

export const NavigationProvider = ({children}) =>{
    const [navigationCompleted, setNavigationCompleted] = useState(true)

    return(
        <NavigationContext.Provider value={{navigationCompleted, setNavigationCompleted}}>
            {children}
        </NavigationContext.Provider>
    )
}

