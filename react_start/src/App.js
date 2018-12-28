import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const moives = [
  {
    title : 'Matrixs',
    poster : 'https://patch.com/img/cdn20/users/22924509/20180619/041753/styles/T800x600/public/processed_images/jag_cz_movie_theater_retro_shutterstock_594132752-1529438777-6045.jpg?width=720'
  },
  {
    title : 'movie2',
    poster : 'https://patch.com/img/cdn20/users/22924509/20180619/041753/styles/T800x600/public/processed_images/jag_cz_movie_theater_retro_shutterstock_594132752-1529438777-6045.jpg?width=720'
  },
  {
    title : 'movie3',
    poster : 'https://patch.com/img/cdn20/users/22924509/20180619/041753/styles/T800x600/public/processed_images/jag_cz_movie_theater_retro_shutterstock_594132752-1529438777-6045.jpg?width=720'
  },
  {
    title : 'movie4',
    poster : 'https://patch.com/img/cdn20/users/22924509/20180619/041753/styles/T800x600/public/processed_images/jag_cz_movie_theater_retro_shutterstock_594132752-1529438777-6045.jpg?width=720'
  },
]
class App extends Component {

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() 스피너나 로딩 -> render() -> componentDidUpdate
  // willReceiveProps 이미 컴포넌트를 받았다. shouldComponent 에서는 props를 비교해서 이전과 새것이 다르면 업데이트를 ture를 합니다. 그다음 willUpdate에서 render 하고 didmount가 됩니다.
  // when component updates the render() function is called again.
  render() {
    return (
      <div className="App">
        {moives.map((movie, index) => {
          return <Movie title={movie.title} poster={movie.poster} key={index}/>
        })}
      </div>
    );
  }
}

export default App;
