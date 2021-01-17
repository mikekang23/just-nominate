import React, { Component } from 'react';

class SearchHeader extends Component {
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }

  focusTextInput = () => {
    this.textInput.current.focus();
  }

  render(){
    let {searchValue, onSearchChange} = this.props;

    return (
      <section className="py-lg-5 pt-4 text-center container">
        <div className="row">
          <h1 className="fw-light">Movie Nominations</h1>
          <p className="lead text-muted">
            Find 5 of your favourite movies to nominate!
          </p>
          <div className="form-floating mb-3 searchBar col-lg-10 offset-lg-1">
            <input
              type="text"
              className="form-control"
              id="movie"
              onChange={(e) => onSearchChange(e)}
              value={searchValue}
              ref={this.textInput}
            />
            <label>What's your favourite movie title?</label>
          </div>
        </div>
      </section>
    )
  }
}

export default SearchHeader;
