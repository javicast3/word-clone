import React from 'react';
import GuessResults from '../GuessResults/GuessResults';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function Guesses({ previous }) {
  // console.log('llegamos');
  // console.log({ previous });
  // return (
  //   <div className="guess-results">
  //     {range(NUM_OF_GUESSES_ALLOWED).map(({ id }) => (
  //       <GuessResults key={id} aGuess={previous[id]} />
  //       // <p key={id} className="guess">
  //       //   {guess}
  //       // </p>
  //     ))}
  //   </div>
  // );
}

export default Guesses;
