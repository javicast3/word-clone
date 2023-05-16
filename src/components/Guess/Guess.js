import React, { useState } from 'react';
import Guesses from '../Guesses/Guesses';

function Guess() {
  const [guess, setGuess] = useState('');
  const [previous, setPrevious] = useState([]);

  function submitHandler(event) {
    event.preventDefault();
    const newGuess = {
      guess,
      id: Math.random(),
    };
    const newPrevious = [...previous, newGuess];
    setPrevious(newPrevious);
    console.log({ previous });
    setGuess('');
  }
  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
      <Guesses previous={previous} />
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={guess}
        onChange={(event) => setGuess(event.target.value)}
      />
    </form>
  );
}
export default Guess;
