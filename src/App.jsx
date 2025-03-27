import { useState } from 'react'
import movies from './data/movies'

function App() {

  return (
    <>
      <h1 className='d-flex justify-content-center'>Movies</h1>

      <div className="card">
        <div className="card-body">
          <div>
            {
              movies.map(movie => (
                <h5>{movie.title}, {movie.genre} </h5>
              ))
            }
          </div>
        </div>
      </div >
    </>
  )
}

export default App
