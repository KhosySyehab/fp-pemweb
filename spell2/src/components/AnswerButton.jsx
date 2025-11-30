import React from 'react';

export const AnswerButton = ({ letter, onClick, isSelected, isCorrect, isWrong }) => {
  let buttonClass =
    'w-16 h-16 rounded-lg text-2xl font-bold transition-all duration-200 shadow-lg active:scale-95 ';

  if (isSelected) {
    if (isCorrect) {
      buttonClass += 'bg-green-500 text-white scale-110';
    } else if (isWrong) {
      buttonClass += 'bg-red-500 text-white scale-105';
    } else {
      buttonClass += 'bg-blue-500 text-white scale-105';
    }
  } else {
    buttonClass += 'bg-gray-300 text-gray-800 hover:bg-gray-400';
  }

  return (
    <button
      onClick={() => onClick(letter)}
      className={buttonClass}
      disabled={isWrong}
    >
      {letter}
    </button>
  );
};
