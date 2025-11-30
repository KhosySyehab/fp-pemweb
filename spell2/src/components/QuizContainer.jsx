import React, { useState } from 'react';
import { QuizHeader } from './QuizHeader';
import { AudioButton } from './AudioButton';
import { QuestionImage } from './QuestionImage';
import { AnswerDisplay } from './AnswerDisplay';
import { AnswerButtons } from './AnswerButtons';
import { SubmitButton } from './SubmitButton';

export const QuizContainer = ({ quizzes }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuiz = quizzes[currentQuestionIndex];
  const totalQuestions = quizzes.length;

  const handleSelectOption = (letter) => {
    if (!isSubmitted) {
      // Tambah huruf ke jawaban
      if (selectedAnswers.length < currentQuiz.displayLength) {
        setSelectedAnswers([...selectedAnswers, letter]);
      }
    }
  };

  const handleUndo = () => {
    if (!isSubmitted && selectedAnswers.length > 0) {
      setSelectedAnswers(selectedAnswers.slice(0, -1));
    }
  };

  const handlePlayAudio = () => {
    setIsPlaying(true);
    // Simulate audio playing
    setTimeout(() => setIsPlaying(false), 2000);
  };

  const handleSubmit = () => {
    if (isSubmitted) {
      // Move to next question
      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
        setSelectedAnswers([]);
        setIsSubmitted(false);
      } else {
        // Quiz selesai - bisa redirect ke result page
        alert(`Quiz Selesai! Score: ${score}/${totalQuestions}`);
      }
    } else {
      // Submit jawaban
      const answer = selectedAnswers.join('');
      if (answer.length === currentQuiz.displayLength) {
        setIsSubmitted(true);
        if (answer === currentQuiz.answer) {
          setScore(score + 1);
        }
      } else {
        alert('Harap isi semua jawaban terlebih dahulu');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-500 to-blue-300 flex flex-col">
      <QuizHeader currentQuestion={currentQuestionIndex + 1} totalQuestions={totalQuestions} />

      <div className="flex-1 flex flex-col items-center justify-between p-6 overflow-y-auto">
        {/* Audio Button */}
        <div className="pt-4">
          <AudioButton onPlay={handlePlayAudio} isPlaying={isPlaying} />
        </div>

        {/* Question Image - Main Focus */}
        <div className="w-full flex justify-center py-4">
          <QuestionImage src={currentQuiz.image} alt="Question" />
        </div>

        {/* Answer Display */}
        <div className="w-full flex justify-center py-4">
          <AnswerDisplay answer={selectedAnswers} displayLength={currentQuiz.displayLength} />
        </div>

        {/* Answer Buttons Grid */}
        <div className="w-full flex justify-center py-4">
          <AnswerButtons
            options={currentQuiz.options}
            onSelectOption={handleSelectOption}
            selectedAnswers={selectedAnswers}
            isSubmitted={isSubmitted}
            correctAnswer={currentQuiz.answer}
          />
        </div>

        {/* Undo Button */}
        {!isSubmitted && selectedAnswers.length > 0 && (
          <button
            onClick={handleUndo}
            className="mb-2 px-6 py-2 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-500 transition-all active:scale-95"
          >
            Undo
          </button>
        )}

        {/* Feedback */}
        {isSubmitted && (
          <div className="py-2 text-center">
            {selectedAnswers.join('') === currentQuiz.answer ? (
              <p className="text-3xl font-bold text-green-400 drop-shadow-lg">Benar! 🎉</p>
            ) : (
              <div>
                <p className="text-3xl font-bold text-red-400 drop-shadow-lg">Salah!</p>
                <p className="text-white mt-2 text-lg font-semibold">Jawaban: {currentQuiz.answer}</p>
              </div>
            )}
          </div>
        )}

        {/* Submit Button - Large and Easy to Click */}
        <div className="w-full flex justify-center py-4">
          <Sub