import React from 'react';

export const QuestionImage = ({ src, alt }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="w-80 h-80 bg-white rounded-xl border-8 border-black shadow-2xl overflow-hidden flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/320?text=Animal';
          }}
        />
      </div>
    </div>
  );
};
