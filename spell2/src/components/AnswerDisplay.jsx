import React from 'react';

export const AnswerDisplay = ({ answer, displayLength, onRemoveLetter, onDropLetter, isSubmitted, correctAnswer }) => {
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

  const isCorrect = (index) => {
    return isSubmitted && answer[index] && answer[index] === correctAnswer[index];
  };

  const isWrong = (index) => {
    return isSubmitted && answer[index] && answer[index] !== correctAnswer[index];
  };

  return (
    <div className="flex justify-center gap-2">
      {dashes.map((_, index) => (
        <div
          key={index}
          onDragOver={handleDragOver}
          onDrop={(e) => handleDrop(e, index)}
          className={`w-14 h-14 rounded-lg border-4 flex items-center justify-center shadow-lg font-bold text-3xl cursor-pointer hover:scale-105 transition-all duration-200 transform ${
            isWrong(index)
              ? 'bg-red-200 border-red-500 text-red-600'
              : isCorrect(index)
              ? 'bg-green-200 border-green-500 text-green-600'
              : 'bg-white border-blue-500 text-blue-600 hover:bg-blue-50'
          }`}
          onClick={() => answer[index] && onRemoveLetter(index)}
          title={answer[index] ? 'Click to delete' : 'Drag letter here'}
        >
          {answer[index] ? answer[index] : '_'}
        </div>
      ))}
    </div>
  );
};
