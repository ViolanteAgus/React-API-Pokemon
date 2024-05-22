import { Routes, Route, Navigate } from "react-router-dom"
import { Navigation } from "./components/Navigation"
import { HomePage, PokemonPages, SearchPages } from "./pages"

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="pokemon/:id" element={<PokemonPages />} />
            <Route path="search" element={<SearchPages />} />
        </Route>
        
        <Route path="*" element={<Navigate to='/' />} />
    </Routes>
  )
}
