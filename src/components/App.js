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
  render(){
    return (
      ''
    )
  }
}

export default App;
