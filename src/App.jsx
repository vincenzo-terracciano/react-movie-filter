import { useEffect, useState } from 'react'
import movies from './data/movies'

function App() {

  const [selectedGenre, setSelectedGenre] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)

  useEffect(() => {
    setFilteredMovies(movies.filter(
      movie => movie.genre.toLowerCase().includes(selectedGenre.toLocaleLowerCase())))
  }, [selectedGenre])

  return (
    <>
      <h1 className='d-flex justify-content-center'>Movies</h1>

      <div className="container">
        <select onChange={e => setSelectedGenre(e.target.value)} value={selectedGenre} className='my-4'>
          <option value="">Tutti i generi</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        <div className="card">
          <div className="card-body">
            <div>
              {
                filteredMovies.map((movie, index) => (
                  <h5 key={index}>{movie.title}, {movie.genre} </h5>
                ))
              }
            </div>
          </div>
        </div >
      </div>

    </>
  )
}

export default App
