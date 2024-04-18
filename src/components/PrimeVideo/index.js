// Write your code here

import MoviesSlider from '../MoviesSlider'

import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props
  const actionMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )
  const comedyMovieList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <div className="prime-video-content">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-image"
        />
        <div className="movie-carousel-container">
          <h1 className="heading">Action Movies</h1>
          <MoviesSlider movieDetails={actionMovieList} />
          <h1 className="heading">Comedy Movies</h1>
          <MoviesSlider movieDetails={comedyMovieList} />
        </div>
      </div>
    </div>
  )
}
export default PrimeVideo
