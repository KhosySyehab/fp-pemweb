import React from 'react';

export const KeyboardLayout = ({ onSelectOption, usedLetters, isSubmitted }) => {
  // QWERTY Layout
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
    ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
  ];

  const isLetterUsed = (letter) => usedLetters.includes(letter);

  return (
    <div className="flex flex-col gap-2 bg-gray-100 p-3 rounded-xl shadow-lg">
      {rows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`flex gap-1.5 justify-center ${rowIndex === 1 ? 'ml-4' : rowIndex === 2 ? 'ml-8' : ''}`}
        >
          {row.map((letter) => (
            <button
              key={letter}
              onClick={() => !isSubmitted && !isLetterUsed(letter) && onSelectOption(letter)}
              disabled={isLetterUsed(letter) || isSubmitted}
              className={`
                w-10 h-10 rounded-lg font-bold text-sm transition-all duration-200 
                transform hover:scale-110 active:scale-95 shadow-md
                ${
                  isLetterUsed(letter)
                    ? 'bg-gray-400 text-gray-500 cursor-not-allowed opacity-50'
                    : 'bg-white text-gray-800 hover:bg-gray-100 border-2 border-gray-300 hover:border-gray-400 cursor-pointer'
                }
              `}
              title={letter}
            >
              {letter}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};
