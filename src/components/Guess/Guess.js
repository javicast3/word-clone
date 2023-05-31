import React, { useState } from 'react';
import Guesses from '../Guesses/Guesses';
import { range } from '../../utils';

function Guess({ guess = '' }) {
  console.log({ guess });
  const val = guess?.split('');
  return (
    <p className="guess">
      {range(5).map((num) => (
        <span className="cell">{val[num]}</span>
      ))}
    </p>
  );
}
export default Guess;
