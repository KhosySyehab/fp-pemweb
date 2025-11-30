import React from 'react';

export const SubmitButton = ({ onClick, disabled, isSubmitted }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-16 py-5 rounded-2xl font-bold text-xl transition-all duration-300 shadow-2xl transform ${
        disabled
          ? 'bg-gray-400 text-gray-600 cursor-not-allowed opacity-50'
          : 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 active:scale-95 shadow-2xl hover:shadow-2xl hover:scale-105'
      }`}
    >
      {isSubmitted ? '➜ Soal Berikutnya (Enter)' : '✓ Submit Jawaban (Enter)'}
    </button>
  );
};
