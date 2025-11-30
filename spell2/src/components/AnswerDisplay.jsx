import React from 'react';

export const AnswerDisplay = ({ answer, displayLength, onRemoveLetter, onDropLetter }) => {
  const dashes = Array(displayLength).fill(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy';
  };

  const handleDrop = (e, index) => {
    e.preventDefault();
    const letter = e.dataTransfer.getData('text/plain');
    if (letter) {
      onDropLetter(index, letter);
    }
  };

  return (
    <div className="flex justify-center gap-2">
      {dashes.map((_, index) => (
        <div
          key={index}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className="w-14 h-14 bg-white rounded-lg border-4 border-blue-500 flex items-center justify-center shadow-lg font-bold text-3xl text-blue-600 cursor-pointer hover:bg-blue-50 transition-all duration-200 transform hover:scale-105"
          onClick={() => answer[index] && onRemoveLetter(index)}
          title={answer[index] ? 'Klik untuk hapus' : 'Drag huruf ke sini'}
        >
          {answer[index] ? answer[index] : '_'}
        </div>
      ))}
    </div>
  );
};
