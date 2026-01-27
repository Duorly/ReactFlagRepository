import { useState } from 'react'
import './App.css'
import SearchBar from './composant/SearchBar'
import ColorFilter from './composant/ColorFilter'
import FlagList from './composant/FlagList'

function App() {
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState<string>('')

  return (
    <>
    <nav className="w-full mb-4">
      <div className="container mb-4">
        <h1 className="text-center text-black ">FLAGSEARCH</h1>
      </div>
      <div className="max-w-6xl mx-auto ">
        <SearchBar value={searchQuery} onChange={(value: string) => setSearchQuery(value)} />
        <ColorFilter selectedColors={selectedColors} onColorsChange={(colors: string[]) => setSelectedColors(colors)} />

      </div>
    </nav>
    <main className="container max-w-6xl mx-auto">
      <FlagList searchTerm={searchQuery} />
    </main>
    </>
  )
}

export default App
