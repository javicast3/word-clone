import React, { useState } from 'react';

function GuessInput({ onSubmitHandler }) {
  const [guess, setGuess] = useState('');
  function submitHandler(event) {
    event.preventDefault();
    onSubmitHandler(guess);
    setGuess('');
  }

  return (
    <form className="guess-input-wrapper" onSubmit={submitHandler}>
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

export default GuessInput;
