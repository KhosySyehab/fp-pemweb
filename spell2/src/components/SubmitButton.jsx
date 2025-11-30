import React from 'react';

export const SubmitButton = ({ onClick, disabled, isSubmitted }) => {
  return (
    <div className="flex justify-center py-8">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`px-12 py-4 rounded-lg font-bold text-lg transition-all duration-200 ${
          disabled
            ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
            : 'bg-gray-700 text-white hover:bg-gray-800 active:scale-95'
        }`}
      >
        {isSubmitted ? 'Next Question' : 'Submit Answers'}
      </button>
    </div>
  );
};
