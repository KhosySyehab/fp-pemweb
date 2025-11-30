import React from 'react';

export const QuestionImage = ({ src, alt }) => {
  return (
    <div className="w-full flex justify-center py-8">
      <div className="w-64 h-64 bg-white rounded-lg shadow-lg overflow-hidden border-4 border-black flex items-center justify-center">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/256?text=Question+Image';
          }}
        />
      </div>
    </div>
  );
};
