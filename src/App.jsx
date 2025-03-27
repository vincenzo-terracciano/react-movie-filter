import { useEffect, useState } from 'react'
import movies from './data/movies'

function App() {

  const [selectedGenre, setSelectedGenre] = useState('')
  const [filteredMovies, setFilteredMovies] = useState(movies)
  const [search, setSearch] = useState('')
  const [newMovies, setNewMovies] = useState('')


  useEffect(() => {
    setFilteredMovies(movies.filter(
      movie => movie.genre.toLowerCase().includes(selectedGenre.toLowerCase())))
  }, [selectedGenre])

  useEffect(() => {
    setFilteredMovies(movies.filter(
      movie => movie.title.toLowerCase().includes(search.toLowerCase())
    ))
  }, [search])

  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(search);

    setSearch('')
  }

  return (
    <>
      <h1 className='d-flex justify-content-center'>Movies</h1>

      <div className="container">
        <select onChange={e => setSelectedGenre(e.target.value)} value={selectedGenre}
          className='my-4'>
          <option value="">Tutti i generi</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        <form onSubmit={handleFormSubmit}>
          <div className="mb-3">
            <label htmlFor="new-title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              name="new-title"
              id="new-title"
              aria-describedby="helpTitle"
              placeholder="Type a film"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button className='btn btn-primary my-3' type="submit">Search</button>
          </div>

        </form>

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
