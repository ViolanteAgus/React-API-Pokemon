import { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({children}) => {

  const [allPokemon, setAllPokemon] = useState([])
  const [offset, setOffset] = useState(0)

  const GetPokemons = async(limit = 50) => {
      const bUrl= 'https://pokeapi.co/api/v2/'

      const res = await fetch (`${bUrl}pokemon?limit=${limit}&offset=${offset}`)
      const data = await res.json()

      const promises = data.results.map(async(pokemon) => {
        const res = await fetch(pokemon.url)
        const data = await res.json()
        return data
      })

      const results = await Promise.all(promises)
      setAllPokemon(results)
  }

  useEffect(() => {
      GetPokemons()
  }, [])


  return(
    <PokemonContext.Provider value={{
      numero: 0
    }}>
      {children}
    </PokemonContext.Provider>
  )
}
