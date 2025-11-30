import React from 'react';
import { AnswerButton } from './AnswerButton';

export const AnswerButtons = ({ options, onSelectOption, selectedAnswers, isSubmitted, correctAnswer }) => {
  return (
    <div className="flex justify-center gap-4 py-8 flex-wrap">
      {options.map((option, index) => (
        <AnswerButton
          key={index}
          letter={option}
          onClick={onSelectOption}
          isSelected={selectedAnswers.includes(option)}
          isCorrect={isSubmitted && selectedAnswers[index] === correctAnswer[index]}
          isWrong={isSubmitted && selectedAnswers[index] && selectedAnswers[index] !== correctAnswer[index]}
        />
      ))}
    </div>
  );
};
