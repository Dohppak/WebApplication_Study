import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  //state 가 바뀌면 render 가 이루어지며, state는 setState를 통해서 변화가 발생한다. 
  state = {};

  componentDidMount(){
    this._getMoives();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
    console.log(movie);
      return (
      <Movie 
        title={movie.title_english} 
        poster={movie.medium_cover_image} 
        key={movie.id}
        genres = {movie.genres}
        synopsis = {movie.synopsis}
      />
      );
    });
    return movies;
  };

  _getMoives = async() => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
    .then(Api => Api.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  };

  // Render : componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() 스피너나 로딩 -> render() -> componentDidUpdate

  // willReceiveProps 이미 컴포넌트를 받았다. shouldComponent 에서는 props를 비교해서 이전과 새것이 다르면 업데이트를 ture를 합니다. 그다음 willUpdate에서 render 하고 didmount가 됩니다.
  // when component updates the render() function is called again.


  render() {
    const { movies } =this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

export default App;
