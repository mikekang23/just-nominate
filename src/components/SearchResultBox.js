import React, { Component } from 'react';
import FadeIn from 'react-fade-in';

import './styles/list.scss';
import './styles/app.css';

class SearchResultBox extends Component {
  renderNominateButton = (found, capped) => {
    if(this.props.found){
      return <button type="button" className="btn btn-sm btn-success" disabled>Already Nominated</button>
    }
    if(this.props.capped === 5){
      return <button type="button" className="btn btn-sm btn-success" disabled>Maximum Reached</button>
    }

    return (
      <button
        type="button"
        className="btn btn-sm btn-success"
        onClick={() => this.props.onNominate(this.props.searchResult)}>Nominate</button>
    )
  }

  render() {
    let {searchResult} = this.props;

    return (
      <FadeIn>
        <div className="card searchResultBox">
          {searchResult.Poster === 'N/A' ?
            <img src="/emptyPosterText.jpg" className="rounded" alt="poster" height="380" />
            :
            <img src={searchResult.Poster} className="rounded imgFluid imgThumbnail" alt="poster" />
          }
            <FadeIn>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                {searchResult.releasedYear == null ?
                  <small className="text-muted">Release year is unknown</small>
                  :
                  <small className="text-muted">Released in {searchResult.releasedYear}</small>
                }

                <div className="btn-group">
                  {this.renderNominateButton()}
                </div>

              </div>
              <h5>{searchResult.Title}</h5>
              {searchResult.Plot !== 'N/A' ?
                <p className="card-text">{searchResult.Plot}</p>
                :
                <p className="card-text">Apologies! No plot is available for this movie.</p>
              }
            </div>
            </FadeIn>
        </div>
      </FadeIn>
    )
  }
}

export default SearchResultBox;
