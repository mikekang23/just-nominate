import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

class NominationBox extends Component {
  renderNominatedMovies = (nominatedMovies) => {
    return nominatedMovies.map((item, index) => {
      return (
        <div key={`movie-${index}`}>
          <FadeIn>
            <li key={`movie-${index}`}>
              {item.movie.Title}
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary align-middle removeBtn"
                onClick={() => this.props.onRemoveNominate(item.movie)}>Remove</button>
            </li>
          </FadeIn>
        </div>
      )
    })
  }

  render(){
    let {children, nominatedMovies} = this.props;

    return(
      <div className="card rounded nominationBox">
        <FadeIn>
          <div className="card-body">
            <h5 className={`text-center ${nominatedMovies.length === 5 ? "nomination" : ""}`}>{children}</h5>
            <ol className="gradient-list">
              {this.renderNominatedMovies(nominatedMovies)}
            </ol>
          </div>
        </FadeIn>
      </div>
    )
  }
}

export default NominationBox;
