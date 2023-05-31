import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessResults from '../GuessResults/GuessResults';
import GuessInput from '../GuessInput/GuessInput';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);

  function submitHandler(guess) {
    const newGuesses = [...guesses, guess];
    setGuesses(newGuesses);
  }

  return (
    <>
      <GuessResults guesses={guesses} />
      <GuessInput onSubmitHandler={submitHandler} />
    </>
  );
}

export default Game;
