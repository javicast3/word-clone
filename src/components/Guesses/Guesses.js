import React from 'react';

function Guesses({ previous }) {
  return (
    <div className="guess-results">
      {previous.map(({ id, guess }) => (
        <p key={id} className="guess">
          {guess}
        </p>
      ))}
    </div>
  );
}

export default Guesses;
