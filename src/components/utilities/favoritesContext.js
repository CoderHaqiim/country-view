"use client"
import { useState, createContext, useEffect} from "react";

export const FavoritesContext = createContext()

export const FavoritesProvider = ({children}) =>{
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const favs = JSON.parse(localStorage.getItem("favorites")) || [];
          setFavorites(favs);
      },[]);

    return(
    <FavoritesContext.Provider value={{favorites, setFavorites}}>
        {children}
    </FavoritesContext.Provider>
    )
}