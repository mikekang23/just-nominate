import React from 'react';
import FadeIn from 'react-fade-in';

const EmptyNominationBox = () => {
  return (
    <FadeIn>
      <div className="card rounded">
        <img src="/emptyState.jpg" className="rounded mx-auto" height="260"
          width="290" alt="poster" />
        <div className="card-body rounded">
          <h5 className="text-center">Try nominating some movies!</h5>
          <p className="text-center card-text mb-3 text-muted">Press the nominate button under the movie poster description.</p>
        </div>
      </div>
    </FadeIn>
  )
}

export default EmptyNominationBox;
