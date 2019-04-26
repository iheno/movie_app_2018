import React, { Component } from 'react';
import './App.css';
import Movie from './Movie.js';

class App extends Component {

  // Render: componentWillMount() -> render() - > componentDidMount()
  // Update: componentWillReceivedProps() - > shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  state = {
    movies: [
      {
        title: "Matrix",
        poster: "https://upload.wikimedia.org/wikipedia/tr/3/36/Matrix-film.jpg"
      },
      {
        title: "Full Metal Jacket",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/9/99/Full_Metal_Jacket_poster.jpg/220px-Full_Metal_Jacket_poster.jpg"
      },
      {
        title: "Oldboy",
        poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
      },
      {
        title:  "Star Wars",
        poster: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2019/01/celebration-chicago-key-art-720x1066.jpg"
      }
    ]
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        movies: [
          ...this.state.movies,
          {
            title: "super man",
            poster: "https://www.sideshow.com/storage/product-images/903305/super-powers-superman_dc-comics_gallery_5c4d07bcf32e0.jpg"
          }
        ]
      })     
    }, 3000);
  }
  
  render() {
    return (
      <div className="App">
        {this.state.movies.map((movie, movieIndex) => {
          return <Movie title={movie.title} poster={movie.poster} key={movieIndex} />
        })}
      </div>
    );
  }
}

export default App;
