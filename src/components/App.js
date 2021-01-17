import React, {Component, Fragment} from 'react';
import axios from 'axios';
import defaultSuggestions from '../data/suggestions';
import FadeIn from 'react-fade-in';
import './styles/list.scss';
import './styles/app.css';

import EmptyNominationBox from './ui/EmptyNominationBox';
import Navbar from './ui/Navbar';
import SearchResultBox from './SearchResultBox';
import NominationBox from './NominationBox';
import SearchHeader from './SearchHeader';

class App extends Component {
  state = {
    bestFive: [],
    searchValue: '',
    searchResult: null,
    nominatedMovies: [],
    snackBar: false
  }

  async componentDidMount() {
    const suggestedMovie = this.randomMovieSuggestion();
    try {
      const movieData = await this.getMovieAndReleasedYear(suggestedMovie);
      this.setState({searchResult: movieData});
    }catch(err){
      console.log(err);
    }
  }

  randomMovieSuggestion = () => {
    const max = defaultSuggestions.length;
    const value = Math.floor(Math.random() * max);
    return defaultSuggestions[value];
  }

  getMovieAndReleasedYear = async (movie) => {
    try{
      // Note that if this API key was a secret API key, I would instead put this in the .env
      const preppedMovie = await axios.get(`https://www.omdbapi.com/?apikey=e6c81fd&t=${movie}`)

      // Do not update the image on character changes that cause empty results
      if(preppedMovie.data.Response === 'True' && preppedMovie.data.Released === 'N/A'){
        preppedMovie.data.releasedYear = null;
        return preppedMovie.data;
      }else if(preppedMovie.data.Response === 'True' && preppedMovie.data.Released !== 'N/A'){
        let releasedString = preppedMovie.data.Released;
        let releasedYear = releasedString.substr(releasedString.length - 4, 4);
        preppedMovie.data.releasedYear = releasedYear;
        return preppedMovie.data;
      }else{
        return this.state.searchResult
      }
    }catch(err){
      console.log(err);
    }
  }

  handleSearchChange = async (e) => {
    this.setState({searchValue: e.target.value})
    try{
      const movieData = await this.getMovieAndReleasedYear(e.target.value)
      this.setState({searchResult: movieData})
    }catch(err){
      console.log(err)
    }
  }

  handleNominate = (movie) => {
    if(this.state.nominatedMovies.length < 5){
      this.setState(prevState => ({
        nominatedMovies: [...prevState.nominatedMovies, {movie}]
      }))
    }
  }

  renderSearchResults = () => {
    const { searchResult } = this.state;

    if(searchResult != null && searchResult.Response === 'True'){
      const found = this.state.nominatedMovies.find((element) => {
        return element.movie.imdbID === searchResult.imdbID
      });

      // Movie found and display
      return (
        <SearchResultBox
          searchResult={searchResult}
          onNominate={(movie) => this.handleNominate(movie)}
          found={found}
          capped={this.state.nominatedMovies.length}
        />
      )
    }
  }

  handleRemoveNominate = (movie) => {
    this.setState((prevState) => {
      const movies = prevState.nominatedMovies.filter(item => {
        return item.movie.imdbID !== movie.imdbID
      });

      return { nominatedMovies: movies };
    })
  }

  renderNominatedResults = () => {
    if(this.state.nominatedMovies.length === 5){
      return (
        <FadeIn>
          <NominationBox
            onRemoveNominate={(movie) => this.handleRemoveNominate(movie)}
            nominatedMovies={this.state.nominatedMovies}>
            Congrats! These are your top 5!
          </NominationBox>
        </FadeIn>
      )
    }else if(this.state.nominatedMovies.length > 0){
      return (
        <NominationBox
          onRemoveNominate={(movie) => this.handleRemoveNominate(movie)}
          nominatedMovies={this.state.nominatedMovies}>
          {this.state.nominatedMovies.length}/5 Nominations
        </NominationBox>
      )
    }else{
      return <EmptyNominationBox />
    }
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <SearchHeader
          onSearchChange={(e) => this.handleSearchChange(e)}
          searchValue={this.state.searchValue}
        />
        <div className="py-2">
          <div className="container">
            <div className="row justify-content-md-center content-container">
              <div className="col-xl-3 offset-xl-0 col-lg-4 offset-lg-0 col-md-5 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1 py-2">
                {this.renderSearchResults()}
              </div>
              <div className="col-xl-7 col-lg-6 col-md-7 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1 py-2">
                {this.renderNominatedResults()}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default App;
