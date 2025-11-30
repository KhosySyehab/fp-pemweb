import React from 'react';

export const QuizHeader = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="w-full bg-gradient-to-b from-blue-500 to-blue-400 text-white px-6 py-8">
      {/* Navigation Bar */}
      <div className="flex items-center justify-between mb-8">
        <button className="text-2xl">‹</button>
        <div className="text-center text-2xl font-semibold">
          {currentQuestion} of {totalQuestions}
        </div>
        <button className="text-2xl">›</button>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-white bg-opacity-30 rounded-full h-2 overflow-hidden">
        <div
          className="bg-white h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};
