// Write your code here
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movieDetails} = props
  const sliderProps = {
    dots: false,
    slidesToScroll: 1,
    slidesToShow: 4,
  }

  return (
    <>
      <Slider {...sliderProps}>
        {movieDetails.map(movieItem => (
          <MovieItem key={movieItem.id} movieItem={movieItem} />
        ))}
      </Slider>
    </>
  )
}
export default MoviesSlider
