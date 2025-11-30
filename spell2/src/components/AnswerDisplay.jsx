import React from 'react';

export const AnswerDisplay = ({ answer, displayLength }) => {
  // Buat array dash sesuai displayLength
  const dashes = Array(displayLength).fill('_');

  return (
    <div className="flex justify-center gap-4 py-8">
      {dashes.map((_, index) => (
        <div
          key={index}
          className="w-12 h-12 bg-white rounded-lg border-4 border-gray-400 flex items-center justify-center shadow-md"
        >
          <span className="text-2xl font-bold text-gray-700">
            {answer[index] ? answer[index] : '_'}
          </span>
        </div>
      ))}
    </div>
  );
};
